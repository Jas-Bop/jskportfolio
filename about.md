---
layout: page
title: About SRFSC
permalink: /srfsc-about
---

<style>
  .srfsc-page {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem 2rem;
    color: #12261d;
    font-family: Arial, sans-serif;
  }

  .srfsc-page-hero {
    background: linear-gradient(120deg, rgba(16, 39, 31, 0.84), rgba(42, 71, 53, 0.72)),
      url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
    color: white;
    border-radius: 24px;
    padding: 3rem 2rem;
    box-shadow: 0 20px 40px rgba(16, 39, 31, 0.14);
  }

  .srfsc-page-hero h1 {
    margin: 0 0 0.7rem;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    letter-spacing: -0.05em;
  }

  .srfsc-page-hero p {
    margin: 0;
    max-width: 700px;
    font-size: 1.08rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.9);
  }

  .srfsc-top-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .srfsc-card {
    background: white;
    border-radius: 18px;
    padding: 1.4rem;
    box-shadow: 0 12px 25px rgba(19, 41, 18, 0.08);
    border: 1px solid rgba(17, 38, 27, 0.08);
  }

  .srfsc-card .icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: #edf8ec;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .srfsc-card h2 {
    margin: 0 0 0.6rem;
    font-size: 1.3rem;
    color: #173b2f;
  }

  .srfsc-card p, .srfsc-card li {
    color: #2a3934;
    line-height: 1.7;
  }

  .srfsc-feature {
    margin-top: 2rem;
    background: #f6f9f6;
    border-radius: 20px;
    padding: 1.8rem;
    border: 1px solid rgba(17, 38, 27, 0.08);
  }

  .srfsc-feature h2 {
    margin-top: 0;
    color: #173b2f;
  }

  .srfsc-feature ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  .srfsc-cta {
    display: inline-block;
    margin-top: 1rem;
    background: #d8572a;
    color: white;
    border-radius: 999px;
    padding: 0.8rem 1.4rem;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  @media (max-width: 800px) {
    .srfsc-top-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="srfsc-page">
  <div class="srfsc-page-hero">
    <h1>About SRFSC</h1>
    <p>
      The Scripps Ranch Fire Safe Council is a volunteer-led neighborhood organization focused on wildfire prevention and community preparation.
    </p>
  </div>

  <div class="srfsc-top-grid">
    <div class="srfsc-card">
      <div class="icon">🔥</div>
      <h2>Our purpose</h2>
      <p>We work to reduce wildfire risk by clearing fuel, supporting defensible space, and educating residents.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">🤝</div>
      <h2>Our values</h2>
      <p>Neighbor-led action, community education, practical safety work, and year-round preparedness.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">🏠</div>
      <h2>Why it matters</h2>
      <p>Scripps Ranch sits near canyon terrain that has historically increased fire risk and the danger to homes.</p>
    </div>
  </div>

  <div class="srfsc-feature">
    <h2>What we believe</h2>
    <ul>
      <li>Protecting this canyon requires every household to participate.</li>
      <li>Fire safety is year-round work, not a seasonal event.</li>
      <li>Prepared neighborhoods create safer outcomes for everyone.</li>
    </ul>
    <a class="srfsc-cta" href="{{ '/volunteer' | relative_url }}">Get involved</a>
  </div>
</div>
