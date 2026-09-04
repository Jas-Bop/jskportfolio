---
layout: page
title: Volunteer
permalink: /volunteer
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
    background: linear-gradient(120deg, rgba(16, 39, 31, 0.84), rgba(42, 71, 53, 0.72)),
      url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
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
    .srfsc-top-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="srfsc-page">
  <div class="srfsc-page-hero">
    <h1>Volunteer with SRFSC</h1>
    <p>
      We need neighbors who are ready to help protect the canyon and prepare the community for the next wildfire season.
    </p>
  </div>

  <div class="srfsc-top-grid">
    <div class="srfsc-card">
      <div class="icon">🧰</div>
      <h2>Join a clearing day</h2>
      <p>Work alongside neighbors on canyon trails and firebreaks to reduce fuel and improve defensible space.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">🏡</div>
      <h2>Host a block meeting</h2>
      <p>Support residents by sharing fire-safety guidance and practical preparedness tips.</p>
    </div>

    <div class="srfsc-card">
      <div class="icon">📋</div>
      <h2>Join the board</h2>
      <p>Help plan long-term strategy, outreach, and community safety efforts.</p>
    </div>
  </div>

  <div class="srfsc-card" style="margin-top: 2rem;">
    <h2>Get started</h2>
    <p><strong>Call:</strong> 858-201-3711</p>
    <p><strong>Email:</strong> srfiresafecouncil@gmail.com</p>
    <a class="srfsc-cta" href="{{ '/donate' | relative_url }}">Support the mission</a>
  </div>
</div>
