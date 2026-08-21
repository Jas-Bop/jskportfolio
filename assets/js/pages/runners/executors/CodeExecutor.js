export class CodeExecutor {
  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
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
      const res = await fetch(runURL, options);
      const result = await res.json();
      const output = result.output || '[no output]';

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      outputDiv.textContent = 'Error: ' + err.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  runJavaScriptFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
      };

      eval(code);
      console.log = originalLog;

      outputDiv.textContent = logs.length > 0 ? logs.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local fallback)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
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
