import React from "react";
import "./About.css";
import backgroundImg from '../assets/background.jpg';

// Services Array
// Services Array with numbers instead of icons
const services = [
  {
    icon: <span className="service-number">1</span>,
    title: "Medical Consumables and Disposables",
    description: "Providing high-quality consumables and disposable medical products for hospitals and clinics."
  },
  {
    icon: <span className="service-number">2</span>,
    title: "Surgical Instruments",
    description: "Offering precision surgical instruments for all medical and surgical procedures."
  },
  {
    icon: <span className="service-number">3</span>,
    title: "Physiotherapy and Rehabilitation",
    description: "Providing equipment and solutions for effective physiotherapy and rehabilitation programs."
  },
  {
    icon: <span className="service-number">4</span>,
    title: "Dental Division",
    description: "Complete range of dental equipment and supplies for clinics and laboratories."
  },
  {
    icon: <span className="service-number">5</span>,
    title: "CSSD And Infection Control",
    description: "Solutions for sterilization, infection control, and safe medical practices."
  },
  {
    icon: <span className="service-number">6</span>,
    title: "Emergency and PPE Supplies",
    description: "Providing essential emergency equipment and personal protective gear for medical staff."
  },
  {
    icon: <span className="service-number">7</span>,
    title: "Lab & Analytical",
    description: "Laboratory instruments, analytical devices, and support for scientific research."
  },
  {
    icon: <span className="service-number">8</span>,
    title: "Medical & Lab Furniture",
    description: "Durable and ergonomic furniture designed for medical and laboratory environments."
  },
  {
    icon: <span className="service-number">9</span>,
    title: "Medical Furniture",
    description: "High-quality furniture tailored for healthcare facilities."
  },
  {
    icon: <span className="service-number">10</span>,
    title: "Healthcare & General Furniture",
    description: "Wide range of furniture solutions for hospitals, clinics, and general spaces."
  },
];


const About = () => {
  return (
    <div className="about-page">

      {/* NAV BUFFER */}
      <div className="nav-buffer"></div>

      {/* ABOUT COMPANY */}
      <section className="about-hero">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <div className="about-para">
            <p>
              Vendor Trading W.L.L. specializes in medical and furniture supplies, offering a broad range of products including medical devices, laboratory and dental equipment, consumables, instruments, disposables, and healthcare and general furniture. Since its founding in 2022, the company has quickly earned a reputation for trust, quality, and reliability, delivering solutions that meet the highest industry standards.
            </p>
            <p>
              Committed to staying at the forefront of scientific and medical advancements, Vendor Trading W.L.L. ensures clients receive the best products and services. With a dedicated team of professionals and a focus on innovation, the company transforms ideas into actionable solutions, driving long-term growth and providing lasting value to its customers.
            </p>
          </div>
        </div>

        <div className="about-image-area">
          <div className="pixel-overlay">
            <div className="pixel-row">
              <div className="pixel p1"></div>
              <div className="pixel p2"></div>
            </div>
            <div className="pixel-row">
              <div className="pixel p3"></div>
              <div className="pixel p4"></div>
              <div className="pixel p5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="leader-card">
          <h1>Chairperson</h1>
          <p className="con">
            "Since its founding, Vendor Medical Trading has been a leader in providing top-quality medical services and products, setting high standards for the industry. Our success is driven by a commitment to excellence, innovative thinking, and careful resource management."
          </p>
          <p className="con">
            "Our vision is to become the leading healthcare provider in Qatar, establishing a new benchmark for the industry. With a dedicated management team and a highly skilled workforce, we are committed to providing exceptional service to every client in Qatar."
          </p>
          <p className="con">
            "I extend my sincere thanks to our valued customers and business partners for their continued trust in Vendor Medical Trading, and to our dedicated team for their hard work, commitment, and dedication."
          </p>
          <p className="ch">SHEIKHA NOORA AHMED KH A AL THANI</p>
        </div>

        <div className="leader-card">
          <h1>Managing Director</h1>
          <p className="con">
            "Vendor Medical's mission is to empower customers and the community by providing exceptional resources and services. As a leading medical services solutions provider in Qatar, we offer state-of-the-art infrastructure, premium medical and industrial facilities, and cutting-edge technology, significantly contributing to the advancement of the nation's scientific and healthcare sectors."
          </p>
          <p className="con">
            "Beyond serving the community, we are dedicated to improving all aspects of healthcare. By translating innovation into transformative solutions, we aim to deliver sustainable growth and value to our customers."
          </p>
          <p className="con">
            "We are committed to staying at the forefront of emerging trends in the scientific and medical fields to offer our clients the best possible solutions."
          </p>
          <p className="ch">HEILA SOWAYED S JOHAR</p>
        </div>
      </section>

      {/* ALTERNATING EDGE-TOUCH CARDS */}
      <section className="alt-wrapper">

        <div className="alt-card edge-right">
          <img src={backgroundImg} alt="Values" />
          <div className="alt-text">
            <h1>Our Values</h1>
            <p className="t">
              Integrity and Ethics
              <ul className="about-bullets">
                <li>Honesty: Being truthful and transparent in all interactions.</li>
                <li>Accountability: Taking responsibility for actions and outcomes.</li>
                <li>Confidentiality: Protecting patient privacy and sensitive information.</li>
                <li>Professionalism: Maintaining the highest standards of conduct and expertise.</li>
              </ul>
            </p>
            <p className="t">
              Team work and Collaboration
              <ul className="about-bullets">
                <li>Collaboration: Working together effectively to provide the best care.</li>
                <li>Communication: Open, clear, and respectful communication.</li>
                <li>Support: Creating a supportive environment.</li>
              </ul>
            </p>
            <p className="t">
              Innovation and Growth
              <ul className="about-bullets">
                <li>Continuous Improvement: Seeking ways to enhance care and services.</li>
                <li>Innovation: Embracing new technologies and approaches to improve patient outcomes.</li>
                <li>Learning: Supporting ongoing education and development for staff.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="alt-card edge-left">
          <img src={backgroundImg} alt="Vision" />
          <div className="alt-text">
            <h1>Our Vision</h1>
            <p className="t">
              Utilize innovative technologies and solutions to transform the organization into a world-class model and provide the Qatari healthcare industry with the highest standards the nation deserves.
            </p>
          </div>
        </div>

        <div className="alt-card edge-rightt">
          <img src={backgroundImg} alt="Mission" />
          <div className="alt-text">
            <h1>Our Mission</h1>
            <p className="t">
              Enable organizations through secure, scalable, and patient-centric digital solutions.
            </p>
          </div>
        </div>

        <div className="alt-card edge-leftt">
          <img src={backgroundImg} alt="Team" />
          <div className="alt-text">
            <h1>Our Team</h1>
            <p className="t">
              A multidisciplinary team of professionals committed to delivering excellence and clinical-grade quality.
            </p>
          </div>
        </div>

      </section>

      {/* SERVICES – STYLISH LAYOUT */}
      <section className="about-services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
          Providing high-quality healthcare solutions across consumables, instruments, rehab & dental equipment, PPE, labs, and furniture.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="services-btn">
          <a href="/services">
            <button>Explore More</button>
          </a>
        </div>

      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-heading">
          <h1>Our Gallery</h1>
        </div>

        <div className="gallery-collage">
          <div className="collage-item item-1"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-2"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-3"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-4"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-5"><img src="../assets/y.jpg" alt="" /></div>
        </div>
      </section>

    </div>
  );
};

export default About;
