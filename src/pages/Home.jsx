import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* ===== NAVBAR COVER BAR ===== */}
      <div className="navbar-spacer" />

 {/* ================= HERO SLIDER ================= */}
<section className="hero-slider">
  <div className="hero-carousel">
    <div className="hero-slide slide-1"></div>
    <div className="hero-slide slide-2"></div>
    <div className="hero-slide slide-3"></div>
  </div>

  {/* Overlay */}
  <div className="hero-overlay">
    <div className="hero-text">
      <h1>Empowering Healthcare Providers to Achieve Excellence</h1>
      <p>
        Delivering tailored medical solutions and expert guidance
        across Qatar’s healthcare ecosystem.
      </p>
      <Link to="/about" className="hero-btn">
        Learn More
      </Link>
    </div>
  </div>

  {/* Dots */}
  <div className="hero-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</section>

      {/* ================= BEST PROVIDER ================= */}
      <section className="best-provider">
        <div className="provider-left">
          <img src="/assets/best-provider.jpg" alt="Medical Team" />
        </div>
        <div className="provider-right">
          <h2>The Best Medical Service Provider</h2>
          <p>
            Vendor Medical Trading W.L.L. delivers end-to-end medical equipment,
            consumables, and turnkey healthcare solutions to public and private
            institutions.
          </p>
          <Link to="/contact" className="primary-btn">
            Contact Us
          </Link>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="services-preview">
        <h2>Our Products & Solutions</h2>
        <p className="section-subtext">
          Comprehensive healthcare solutions designed to support clinical,
          diagnostic, and operational excellence.
        </p>

        <div className="services-grid">
          <div className="service-card">Medical</div>
          <div className="service-card">Diagnostic & Research</div>
          <div className="service-card">Projects</div>
          <div className="service-card">IT Solutions</div>
        </div>

        <Link to="/services" className="primary-btn">
          Explore Services
        </Link>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose">
        <div className="why-overlay">
          <div className="why-box">
            <h2>Why Choose Us</h2>
            <ul>
              <li>Latest Medical Equipment</li>
              <li>Modern Healthcare Technology</li>
              <li>Trusted Global Partnerships</li>
            </ul>
            <Link to="/about" className="primary-btn">
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MAJOR CLIENTS ================= */}
      <section className="clients">
        <h2>Our Major Clients</h2>
        <div className="clients-grid">
          <img src="/assets/j.png" alt="Client" />
          <img src="/assets/j.png" alt="Client" />
          <img src="/assets/j.png" alt="Client" />
          <img src="/assets/j.png" alt="Client" />
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section className="certificates">
        <h2>Certificates & Accreditations</h2>
        <div className="cert-grid">
          <img src="/assets/j.png" alt="Certificate" />
          <img src="/assets/j.png" alt="Certificate" />
          <img src="/assets/j.png" alt="Certificate" />
        </div>
      </section>

    </div>
  );
};

export default Home;
