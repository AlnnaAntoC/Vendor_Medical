import React from "react";
import "./Services.css";

// Temp assets (your existing images)
import a from "../assets/a.jpg";
import k from "../assets/k.jpg";

// SECTION DATA
const medicalServices = [
  { name: "Medical Devices", image: k },
  { name: "Medical Equipment", image: a },
  { name: "Medical Instruments", image: a },
  { name: "Lab Devices & Equipment", image: a },
  { name: "Medical Furniture", image: a },
  { name: "Physiotherapy & Rehabilitation", image: a },
  { name: "Medical Consumables & Disposables", image: a },
  { name: "Dental Division", image: a },
  { name: "Surgical Instruments", image: a },
  { name: "CSSD & Infection Control", image: a },
  { name: "Emergency & PPE Supplies", image: a },
];

const tradingServices = [
  { name: "Lab & Analytical Products", image: a },
  { name: "Medical & Lab Furniture", image: a },
  { name: "Healthcare & General Furniture", image: a },
];

const Services = () => {
  return (
    <div className="services-wrapper">

      {/* MEDICAL SECTION */}
      <section id="medical-section" className="services-section">
        <h2 className="services-title">Medical Division</h2>
        <div className="services-container">
          {medicalServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-content">
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRADING SECTION */}
      <section id="trading-section" className="services-section">
        <h2 className="services-title">Trading Division</h2>
        <div className="services-container">
          {tradingServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-content">
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
