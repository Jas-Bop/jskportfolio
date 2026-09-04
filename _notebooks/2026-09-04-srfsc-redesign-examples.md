---
layout: post
comments: true
title: SRFSC Website Redesign Examples
description: Visual mockup examples showing how the Scripps Ranch Fire Safe Council website could be redesigned for clarity, urgency, and action.
permalink: /srfsc-redesign-examples
author: Krish Kelageri, Jasan Boprai, Shourya Patel
---

<style>
  .srfsc-demo {
    font-family: Arial, sans-serif;
    color: #14213d;
    background: linear-gradient(180deg, #f7f7f2 0%, #eef4ee 100%);
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(18, 41, 25, 0.12);
    margin: 2rem 0;
    border: 1px solid rgba(17, 38, 27, 0.08);
  }

  .srfsc-demo,
  .srfsc-demo p,
  .srfsc-demo h2,
  .srfsc-demo h3,
  .srfsc-demo h4,
  .srfsc-demo li,
  .srfsc-demo span,
  .srfsc-demo strong,
  .srfsc-demo a:not(.srfsc-btn) {
    color: #111111 !important;
  }

  .srfsc-demo * { box-sizing: border-box; }

  .srfsc-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #173b2f;
    color: white;
    padding: 1rem 2rem;
  }

  .srfsc-brand {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .srfsc-nav {
    display: flex;
    gap: 1.2rem;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.95;
  }

  .srfsc-nav a {
    color: white;
    text-decoration: none;
  }

  .srfsc-btn {
    display: inline-block;
    background: #d8572a;
    color: white;
    padding: 0.85rem 1.5rem;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .srfsc-btn.secondary {
    background: #e8f0ea;
    color: #173b2f;
  }

  .srfsc-hero {
    position: relative;
    background:
      linear-gradient(120deg, rgba(14, 34, 27, 0.82), rgba(46, 77, 57, 0.65)),
      url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
    color: white;
    padding: 4.5rem 2rem 3rem;
  }

  .srfsc-hero-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.4fr 0.8fr;
    gap: 2rem;
    align-items: center;
  }

  .srfsc-kicker {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 800;
    color: #dfeecf;
    margin-bottom: 1rem;
  }

  .srfsc-hero h2 {
    font-size: clamp(2.2rem, 5vw, 4.3rem);
    line-height: 0.96;
    margin: 0 0 1rem;
    letter-spacing: -0.05em;
    font-weight: 900;
  }

  .srfsc-hero p {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 620px;
    color: rgba(255,255,255,0.88);
  }

  .srfsc-cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 1.5rem;
  }

  .srfsc-hero-box {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 18px;
    padding: 1.5rem;
    backdrop-filter: blur(4px);
  }

  .srfsc-hero-box h3 {
    margin: 0 0 0.8rem;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #dfeecf;
  }

  .srfsc-hero-box strong {
    display: block;
    font-size: 2.3rem;
    margin-bottom: 0.4rem;
  }

  .srfsc-section {
    max-width: 1180px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .srfsc-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 1.2rem;
  }

  .srfsc-card {
    background: white;
    border-radius: 18px;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(19, 41, 18, 0.07);
    border: 1px solid rgba(17, 38, 27, 0.06);
  }

  .srfsc-card .icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    background: #edf8eb;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .srfsc-card h3 {
    margin: 0 0 0.75rem;
    font-size: 1.2rem;
    color: #112420;
  }

  .srfsc-card p {
    margin: 0;
    line-height: 1.7;
    color: #475a53;
  }

  .srfsc-split {
    display: grid;
    grid-template-columns: 1.35fr 0.95fr;
    gap: 1.5rem;
    align-items: stretch;
  }

  .srfsc-panel {
    background: white;
    border-radius: 18px;
    padding: 1.6rem;
    border: 1px solid rgba(17, 38, 27, 0.06);
    box-shadow: 0 10px 25px rgba(19, 41, 18, 0.06);
  }

  .srfsc-panel h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #123126;
  }

  .srfsc-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.9rem;
  }

  .srfsc-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    line-height: 1.5;
    color: #1a1a1a;
  }

  .srfsc-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d8572a, #efb63b);
    margin-top: 0.48rem;
    flex-shrink: 0;
  }

  .srfsc-alert {
    background: linear-gradient(135deg, #f3f6d7, #eaf4eb);
    border-radius: 18px;
    padding: 1.5rem;
    border: 1px solid rgba(19, 41, 18, 0.08);
  }

  .srfsc-alert strong {
    display: block;
    color: #173b2f;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .srfsc-alert p {
    margin: 0;
    line-height: 1.7;
    color: #1a1a1a;
  }

  .srfsc-news-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 1.25rem;
  }

  .srfsc-news-item {
    background: #fff;
    border-radius: 18px;
    overflow: hidden;
    border: 1px solid rgba(17, 38, 27, 0.06);
    box-shadow: 0 10px 25px rgba(19, 41, 18, 0.05);
  }

  .srfsc-news-image {
    height: 180px;
    background: linear-gradient(135deg, #7e9a6a, #d7d0a4);
    position: relative;
  }

  .srfsc-news-content {
    padding: 1.2rem 1.1rem 1.4rem;
  }

  .srfsc-news-content .tag {
    display: inline-block;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #173b2f;
    background: #edf6ec;
    border-radius: 999px;
    padding: 0.35rem 0.7rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
  }

  .srfsc-news-content h4 {
    margin: 0 0 0.7rem;
    font-size: 1.2rem;
    color: #112420;
  }

  .srfsc-news-content p {
    margin: 0;
    line-height: 1.6;
    color: #1f1f1f;
  }

  .srfsc-callout {
    background: #173b2f;
    color: white;
    padding: 1.8rem 2rem;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0 2rem 2.5rem;
  }

  .srfsc-callout h3 {
    margin: 0;
    font-size: clamp(1.5rem, 2vw, 2.2rem);
    letter-spacing: -0.04em;
  }

  .srfsc-search {
    max-width: 1180px;
    margin: 0 auto;
    padding: 1.5rem 2rem 0;
  }

  .srfsc-search input {
    width: 100%;
    border: 1px solid rgba(17, 38, 27, 0.15);
    border-radius: 999px;
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
    background: rgba(255,255,255,0.9);
    color: #111;
    box-shadow: 0 6px 18px rgba(19, 41, 18, 0.05);
  }

  .srfsc-search input:focus {
    outline: 2px solid rgba(216, 87, 42, 0.25);
    border-color: rgba(216, 87, 42, 0.5);
  }

  .srfsc-hidden {
    display: none !important;
  }

  @media (max-width: 900px) {
    .srfsc-hero-inner,
    .srfsc-grid-3,
    .srfsc-news-grid,
    .srfsc-split {
      grid-template-columns: 1fr;
    }

    .srfsc-nav {
      display: none;
    }

    .srfsc-topbar {
      padding: 1rem 1.2rem;
    }

    .srfsc-hero,
    .srfsc-section {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>

<div class="srfsc-demo">
  <div class="srfsc-topbar">
    <div class="srfsc-brand">SRFSC</div>
    <nav class="srfsc-nav">
      <a href="{{ '/srfsc-about' | relative_url }}">About</a>
      <a href="{{ '/news' | relative_url }}">News</a>
      <a href="{{ '/volunteer' | relative_url }}">Volunteer</a>
      <a href="{{ '/donate' | relative_url }}">Donate</a>
    </nav>
    <a class="srfsc-btn" href="{{ '/volunteer' | relative_url }}">Join Us</a>
  </div>

  <div class="srfsc-hero">
    <div class="srfsc-hero-inner">
      <div>
        <div class="srfsc-kicker">Scripps Ranch Fire Safe Council</div>
        <h2>Protect your home.<br>Protect the whole canyon.</h2>
        <p>
          We are neighbors working together to reduce wildfire risk, protect homes,
          and keep our community prepared year-round.
        </p>
        <div class="srfsc-cta-row">
          <a class="srfsc-btn" href="{{ '/volunteer' | relative_url }}">Volunteer</a>
          <a class="srfsc-btn secondary" href="{{ '/donate' | relative_url }}">Donate</a>
        </div>
      </div>

      <div class="srfsc-hero-box">
        <h3>Why it matters</h3>
        <strong>312</strong>
        <p>homes lost in the Cedar Fire — a reminder that wildfire risk is not theoretical.</p>
      </div>
    </div>
  </div>

  <div class="srfsc-section">
    <div class="srfsc-grid-3">
      <div class="srfsc-card" data-search="fuel reduction brush firebreak hazard trees">
        <div class="icon">🔥</div>
        <h3>Fuel Reduction</h3>
        <p>Clear dead brush, remove hazard trees, and protect canyon edges with neighborhood work days.</p>
      </div>

      <div class="srfsc-card" data-search="home hardening defensible space fire safety guidance">
        <div class="icon">🏠</div>
        <h3>Home Hardening</h3>
        <p>Help residents prepare their homes with defensible space guidance and practical fire-safety education.</p>
      </div>

      <div class="srfsc-card" data-search="community action agency partners neighbors preparedness">
        <div class="icon">🤝</div>
        <h3>Community Action</h3>
        <p>Partner with agencies, local leaders, and neighbors to bring preparedness resources to the whole canyon.</p>
      </div>
    </div>
  </div>

  <div class="srfsc-section">
    <div class="srfsc-split">
      <div class="srfsc-panel" data-search="firebreak maintenance hazard tree removal community education cal fire fire rescue partners">
        <h3>Where the work actually happens</h3>
        <ul class="srfsc-list">
          <li><span class="srfsc-bullet"></span><span>Firebreak maintenance along canyon edges and property lines</span></li>
          <li><span class="srfsc-bullet"></span><span>Hazard tree removal and fuel reduction throughout the neighborhood</span></li>
          <li><span class="srfsc-bullet"></span><span>Community education for homeowners and families preparing for wildfires</span></li>
          <li><span class="srfsc-bullet"></span><span>Coordination with CAL FIRE, SD Fire-Rescue, and local partners</span></li>
        </ul>
      </div>

      <div class="srfsc-alert" data-search="ready to take action volunteer clearing day block meeting next season">
        <strong>Ready to take action?</strong>
        <p>Join a clearing day, host a block meeting, or help the council stay prepared for the next fire season.</p>
      </div>
    </div>
  </div>

  <div class="srfsc-section">
    <h3 style="margin:0 0 1.25rem; color:#173b2f; font-size:1.7rem;">Latest updates</h3>
    <div class="srfsc-news-grid">
      <div class="srfsc-news-item" data-search="news grant hazard tree removal canyon safety">
        <div class="srfsc-news-image"></div>
        <div class="srfsc-news-content">
          <span class="tag">News</span>
          <h4>New grant funds hazard tree removal</h4>
          <p>Fresh support helps expand defensible space work and improve canyon safety.</p>
        </div>
      </div>

      <div class="srfsc-news-item" data-search="newsletter expo turnout community guidance fire prep">
        <div class="srfsc-news-image" style="background: linear-gradient(135deg, #8f9b75, #d8c29a);"></div>
        <div class="srfsc-news-content">
          <span class="tag">Newsletter</span>
          <h4>Expo draws record turnout</h4>
          <p>Neighbors gathered for checklists, informative resources, and live fire-prep guidance.</p>
        </div>
      </div>

      <div class="srfsc-news-item" data-search="wildfire california rules home safety zoning">
        <div class="srfsc-news-image" style="background: linear-gradient(135deg, #9d8f73, #e7ddc5);"></div>
        <div class="srfsc-news-content">
          <span class="tag">Wildfire</span>
          <h4>California adopts stronger home wildfire rules</h4>
          <p>New statewide zoning standards raise the bar for preparation and home safety.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="srfsc-callout">
    <h3>Every firebreak starts with one neighbor showing up.</h3>
    <a class="srfsc-btn" href="{{ '/volunteer' | relative_url }}">Get involved</a>
  </div>

  <div class="srfsc-search">
    <input id="srfscSearch" type="text" placeholder="Search programs, news, volunteer, or resources..." aria-label="Search SRFSC content" />
  </div>
</div>

<script>
  const searchInput = document.getElementById('srfscSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const value = this.value.toLowerCase().trim();
      const items = document.querySelectorAll('.srfsc-card, .srfsc-panel, .srfsc-alert, .srfsc-news-item');

      items.forEach((item) => {
        const text = (item.dataset.search || item.textContent || '').toLowerCase();
        const matches = !value || text.includes(value);
        item.classList.toggle('srfsc-hidden', !matches);
      });
    });
  }
</script>

## How this matches the redesign ideas

This mockup is designed to implement the key concepts from the ideation work:

- Cleaner hero section with a direct emergency message
- Strong call-to-action buttons for volunteering and donating
- More obvious program grouping instead of a crowded homepage
- Clear community impact messaging
- Better use of cards and content blocks to organize information
- A more polished and trustworthy nonprofit look

## Example improvements this mockup reflects

1. Simplify the homepage hierarchy
2. Put the mission first
3. Make volunteering and donating obvious
4. Give each section a purpose and a visual weight
5. Present local impact and urgency clearly
6. Make the site feel community-driven, reliable, and action-focused

This is a strong starting point for a final site redesign because it keeps the emotional mission while making the structure much easier to navigate.