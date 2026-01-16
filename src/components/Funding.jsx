import './Funding.css';
import FundraiserProgress from './FundraiserProgress.jsx';
import { useState } from "react";
import { Youtube, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const images = [
  {
    id: 1,
    url: '/img1.png',
  },
  {
    id: 2,
    url: '/img2.png',
  },
  {
    id: 3,
    url: '/img3.png',
  },
  {
    id: 4,
    url: '/img4.png',
  },
  {
    id: 5,
    url: '/img5.png',
  },
];



const Hero = () => {

const [readMore, setReadMore] = useState(false);

  return (
    <>
    <div className="hero-container">
      <div className="imgg"></div>
      <div className='bg-text-box'>
        <div className="text-box">
        <div className="text1">CROWD FUNDING</div>
        <FundraiserProgress />
        <div className='mk'>
          <div className='accountdetails'>
          BENEFICIARY NAME : SAE INDIA<br></br>COLLEGIATE CLUB<br></br>IFSC CODE : SBIN0002207 <br></br>ACCOUNT NUMBER : 30027869772 BRANCH NUMBER: 2207
        </div>
        <div className='qr'></div>
        </div>  
        </div>
      </div>
      <div className='text-bg'>
        {/* <h1 className="text2">SUPPORT OUR DREAMS</h1> */}
      <div className='caption'>
        <div className='heading1'></div>
          <p className="caption-text">
            <h2>Who we are</h2>
<p>
    Team Unwired is a completely student-run Formula Student team from NIT Calicut,
    driven by a passionate group of engineering students. The team designs, builds,
    and races a single-seater formula-style race car entirely from scratch.
  </p>
  <br />
  <p>
    We proudly represent NIT Calicut at premier national Formula Student competitions,
    competing against top engineering institutes across India:
  </p>
  <ul>
    <li>Formula Bharat</li>
    <li>SUPRA SAEINDIA</li>
  </ul>
            {/* READ MORE BUTTON */}
            {!readMore && (
              <span
                className="read-more"
                onClick={() => setReadMore(true)}
              >
                Read More
              </span>
            )}
            {/* REMAINING CONTENT */}
            {readMore && (
              <>
                  <h2>Our 2026 Season</h2>

  <p>
    For the 2026 season, Team Unwired is committed to pushing performance, reliability,
    and innovation further than ever before.
  </p>

  <ul>
    <li>
      Designing and building a new, improved Formula Student race car — fully engineered,
      manufactured, and assembled by students.
    </li>
    <li>
      Competing at Formula Bharat 2026, to be held at Kari Motor Speedway, Coimbatore,
      from January 21–26, 2026 — a landmark achievement for India’s premier Formula Student competition.
    </li>
    <li>
      Preparing for SUPRA SAEINDIA 2026, scheduled between mid-July and mid-August 2026.
    </li>
  </ul>
<br/>
  <h3>Why We Need Your Support Now</h3>
<br/>
  <p>
    Unlike factory-backed teams, Team Unwired is fully student-owned and self-funded.
    The success of our project depends entirely on sponsorships and individual contributions.
  </p>
<br />
  <p><strong>Immediate funding is critical to:</strong></p>

  <ul>
    <li>Procure essential components such as:
      <ul>
        <li>Powertrain parts</li>
        <li>Suspension, brakes, and steering systems</li>
        <li>Electronics, tyres, fasteners, and raw materials for chassis and subsystems</li>
      </ul>
    </li>
    <li>Cover costs related to:
      <ul>
        <li>Manufacturing, machining, and fabrication</li>
        <li>Testing to ensure reliability and safety</li>
        <li>Managing operational expenses</li>
        <li>Logistics and transportation</li>
        <li>Tooling and safety gear</li>
        <li>Event registration fees and travel costs</li>
      </ul>
    </li>
  </ul>
<br/>
  <h3>How Your Contribution Helps</h3>
<br/>

  <p>
    Every contribution — big or small — directly helps get our car built, tested,
    and on track.
  </p>

  <p><strong>All funds raised will be used exclusively for:</strong></p>

  <ul>
    <li>Vehicle design and development</li>
    <li>Component procurement</li>
    <li>Fabrication and testing</li>
    <li>Participation in Formula Bharat 2026 and SUPRA SAEINDIA 2026</li>
  </ul>

                <span
                  className="read-more"
                  onClick={() => setReadMore(false)}
                >
                  Read Less
                </span>
              </>
            )}
          </p>
      </div>
      </div>
       <div className="gallery">
          {images.map((image) => (
            <div key={image.id} className="image-wrapper">
              <img 
                src={image.url} 
                alt={image.alt}
                className="image"
              />
            </div>
          ))}
        </div>
        <div className="footer-divider"></div>
        <footer>
        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2025 Team Unwired. All rights reserved.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.youtube.com/@team_unwirednitc" className="footer-icon-link" aria-label="YouTube">
              <Youtube size={24} />
            </a>
            <a href="https://www.facebook.com/teamunwired/" className="footer-icon-link" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/teamunwired_nitcalicut/" className="footer-icon-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/team-unwired/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" className="footer-icon-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        </footer>
    </div>
    </>
   
  )
}

export default Hero


