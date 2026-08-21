export class CodeExecutor {
  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
    this.pyodideReadyPromise = null;
  }

  async run() {
    const code = this.editor?.getValue?.() || '';
    const lang = this.languageSelect?.value || 'python';
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    if (!outputDiv) {
      throw new Error('CodeExecutor requires an output element');
    }

    outputDiv.textContent = '⏳ Running...';
    if (execTimeSpan) execTimeSpan.textContent = '';

    const startTime = Date.now();

    if (lang === 'javascript') {
      this.runJavaScriptFallback(code, startTime);
      return;
    }

    let runURL;
    if (lang === 'python') runURL = `${this.pythonURI}/run/python`;
    else if (lang === 'java') runURL = `${this.javaURI}/run/java`;
    else throw new Error(`Unsupported language: ${lang}`);

    const body = JSON.stringify({ code });
    const options = { ...this.fetchOptions, method: 'POST', body };

    try {
      const result = await this.runRemoteCode(runURL, options);
      const output = result.output || '[no output]';

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      if (lang === 'python') {
        await this.runPythonFallback(code, startTime, err);
        return;
      }

      outputDiv.textContent = 'Error: ' + err.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  async runRemoteCode(runURL, options) {
    const res = await fetch(runURL, options);
    const contentType = res.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
      ? await res.json()
      : { output: await res.text() };

    if (!res.ok) {
      const message = payload.error || payload.message || payload.output || `Request failed with status ${res.status}`;
      throw new Error(message);
    }

    return payload;
  }

  async runPythonFallback(code, startTime, remoteError) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      outputDiv.textContent = 'Loading local Python runtime...';
      const pyodide = await this.loadPyodide();
      outputDiv.textContent = 'Running locally...';

      await pyodide.loadPackagesFromImports(code);

      pyodide.globals.set('runner_code', code);
      await pyodide.runPythonAsync(`
import builtins
import sys
import traceback
from io import StringIO
from js import prompt

_runner_stdout = StringIO()
_runner_stderr = StringIO()
_runner_old_stdout = sys.stdout
_runner_old_stderr = sys.stderr
_runner_old_input = builtins.input

def _runner_input(message=''):
    value = prompt(str(message))
    return '' if value is None else str(value)

try:
    sys.stdout = _runner_stdout
    sys.stderr = _runner_stderr
    builtins.input = _runner_input
    exec(runner_code, {})
except Exception:
    traceback.print_exc(file=_runner_stderr)
finally:
    sys.stdout = _runner_old_stdout
    sys.stderr = _runner_old_stderr
    builtins.input = _runner_old_input
`);

      const stdout = pyodide.runPython('_runner_stdout.getvalue()');
      const stderr = pyodide.runPython('_runner_stderr.getvalue()');
      const output = [stdout, stderr].filter(Boolean).join('\n').trim();

      outputDiv.textContent = output || '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local Python)`;
      }
    } catch (fallbackError) {
      outputDiv.textContent = `Error: ${remoteError.message}\nLocal Python fallback failed: ${fallbackError.message}`;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  loadPyodide() {
    if (window.pyodide) {
      return Promise.resolve(window.pyodide);
    }

    if (this.pyodideReadyPromise) {
      return this.pyodideReadyPromise;
    }

    this.pyodideReadyPromise = this.loadScript('https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js')
      .then(() => window.loadPyodide())
      .then((pyodide) => {
        window.pyodide = pyodide;
        return pyodide;
      });

    return this.pyodideReadyPromise;
  }

  loadScript(src) {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      return new Promise((resolve, reject) => {
        if (window.loadPyodide) {
          resolve();
          return;
        }
        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
      });
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', resolve, { once: true });
      script.addEventListener('error', reject, { once: true });
      document.head.appendChild(script);
    });
  }

  runJavaScriptFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    const originalLog = console.log;
    try {
      const logs = [];
      console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
      };

      eval(code);

      outputDiv.textContent = logs.length > 0 ? logs.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local fallback)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    } finally {
      console.log = originalLog;
    }
  }

  bindCopyOutput(button) {
    if (!button || !this.outputElement) return;

    button.addEventListener('click', () => {
      const output = this.outputElement.textContent;
      const original = button.textContent;
      navigator.clipboard.writeText(output).then(() => {
        button.textContent = '✔';
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      });
    });
  }
}

export default CodeExecutor;
