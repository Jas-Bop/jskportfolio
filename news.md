---
layout: page
title: News & Updates
permalink: /news
---

<style>
  .srfsc-page {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem 2rem;
    font-family: Arial, sans-serif;
    color: #12261d;
  }

  .srfsc-page-hero {
    background: linear-gradient(120deg, rgba(13, 33, 26, 0.82), rgba(35, 61, 43, 0.72)),
      url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
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
    line-height: 1.7;
    color: rgba(255,255,255,0.9);
  }

  .srfsc-grid {
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

  .srfsc-card .tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #d8572a;
    margin-bottom: 0.75rem;
  }

  .srfsc-card h2 {
    margin: 0 0 0.6rem;
    color: #173b2f;
    font-size: 1.25rem;
  }

  .srfsc-card p {
    color: #2d3d36;
    line-height: 1.7;
  }

  .srfsc-cta {
    display: inline-block;
    margin-top: 1rem;
    background: #d8572a;
    color: white;
    padding: 0.8rem 1.4rem;
    text-decoration: none;
    border-radius: 999px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 0.75rem;
  }

  @media (max-width: 800px) {
    .srfsc-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="srfsc-page">
  <div class="srfsc-page-hero">
    <h1>Community News</h1>
    <p>
      Stay informed about upcoming wildfire preparedness events, neighborhood updates, and ways the community is working together to reduce risk.
    </p>
  </div>

  <div class="srfsc-grid">
    <div class="srfsc-card">
      <div class="tag">Preparedness</div>
      <h2>Spring brush-clearing checklist</h2>
      <p>New guidance for homeowners preparing their property before the dry season begins.</p>
    </div>

    <div class="srfsc-card">
      <div class="tag">Events</div>
      <h2>Community workshop this month</h2>
      <p>Residents can learn practical fire prevention strategies and how to get involved locally.</p>
    </div>

    <div class="srfsc-card">
      <div class="tag">Impact</div>
      <h2>Volunteer efforts expand</h2>
      <p>Neighbors are stepping up to support wildfire resilience and defensible-space improvements.</p>
    </div>
  </div>

  <div class="srfsc-card" style="margin-top: 2rem;">
    <h2>Latest updates</h2>
    <p>Follow our programs, events, and initiatives as we work to keep Scripps Ranch safer and better prepared.</p>
    <a class="srfsc-cta" href="https://srfiresafe.org/" target="_blank" rel="noopener">See official site</a>
  </div>
</div>
