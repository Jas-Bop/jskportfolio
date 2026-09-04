---
layout: page
title: Donate
permalink: /donate
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
    background: linear-gradient(120deg, rgba(15, 36, 29, 0.82), rgba(33, 78, 47, 0.7)),
      url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
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

  .srfsc-card .icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: #edf8ec;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .srfsc-card h2 {
    margin: 0 0 0.6rem;
    color: #173b2f;
    font-size: 1.3rem;
  }

  .srfsc-card p, .srfsc-card li {
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
    <h1>Support Fire Preparedness</h1>
    <p>
      Your donation helps us keep neighborhood wildfire education, defensible space outreach, and emergency readiness programs running all year long.
    </p>
  </div>

  <div class="srfsc-grid">
    <div class="srfsc-card">
      <div class="icon">🔥</div>
      <h2>Fuel reduction</h2>
      <p>Fund brush clearing, maintenance support, and community safety projects.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">📢</div>
      <h2>Community outreach</h2>
      <p>Support workshops, literature, and neighborhood events that help households prepare.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">🚨</div>
      <h2>Emergency readiness</h2>
      <p>Help residents know what to do before, during, and after a wildfire event.</p>
    </div>
  </div>

  <div class="srfsc-card" style="margin-top: 2rem;">
    <h2>Make a contribution</h2>
    <p>Every gift strengthens the neighborhood’s resilience. Donations support volunteer work, programs, and emergency preparedness resources for Scripps Ranch.</p>
    <a class="srfsc-cta" href="https://srfiresafe.org/" target="_blank" rel="noopener">Give today</a>
  </div>
</div>
