import './Funding.css';
import FundraiserProgress from './FundraiserProgress.jsx';
const Hero = () => {

  return (
    <>
    <div className="hero-container">
      <div className='big-big-box'>
      <div className="big-right-box">
      </div>
        <div className="big-left-box">
          <div className='crowd-funding-box'>
            <div className="text1">CROWD FUNDING</div>
          </div>
<div className='big-box'>
<div className='box1'>
        <div className='box-heading'>
          <div className='box-logo'></div>
          <div className='team-name'>Team Unwired.</div>
        </div>
        <div className='title-caption'>Fuel Innovation . Build the Future.</div>
        <FundraiserProgress />
        <div className="image-container">
          <img 
            src="/poster.png" 
            alt="Team Unwired Racing Car"
            className="main-image"
          />
        </div>
</div>
<div className='box2'>
        <div>
            <img 
            src="/qrcode.png" 
            alt="Team Unwired Racing Car"
            className='qr-code'
          />
        </div>
        <div>
            <img 
            src="/contactus.png" 
            alt="Team Unwired Racing Car"
            className='qr-code'
          />
        </div>
</div>
</div>
        <div class="content">

    <h3>Who We Are</h3>

    <p>
      Team Unwired is a completely student-run Formula Student team from NIT Calicut,
      driven by a passionate group of engineering students.
    </p>

    <p>
      Each season, the team designs, builds, and races a single-seater formula-style
      race car entirely from scratch.
    </p>

    <p>
      We proudly represent NIT Calicut at premier national Formula Student competitions,
      competing against top engineering institutes across India, including:
    </p>

    <ul>
      <li>Formula Bharat</li>
      <li>SUPRA SAEINDIA</li>
    </ul>

    <p>
      Over the 2026 season, Team Unwired is committed to pushing performance,
      reliability, and innovation further than ever before.
    </p>

    <p class="bold">Our goals include:</p>

    <ul>
      <li>
        Designing and building a new, improved Formula Student race car, fully
        engineered, manufactured, and assembled by students.
      </li>
      <li>
        Competing at Formula Bharat 2026, to be held at Kari Motor Speedway,
        Coimbatore, from January 21–24, 2026 – the landmark 10th edition of India’s
        premier Formula Student competition.
      </li>
      <li>
        Preparing for SUPRA SAEINDIA 2026, scheduled between mid-July and mid-August
        2026.
      </li>
    </ul>

    <h3>Why We Need Your Support Now</h3>

    <p>
      Unlike factory-backed teams, Team Unwired is fully student-owned and self-funded.
      The success of our project depends entirely on sponsorships and individual
      contributions.
    </p>

    <p class="bold">Immediate funding is critical to:</p>

    <ul>
      <li>
        Procure essential components such as:
        <ul>
          <li>Powertrain parts</li>
          <li>Suspension, brakes, and steering systems</li>
          <li>Electronics, tyres, fasteners, and raw materials for chassis and subsystems</li>
        </ul>
      </li>
      <li>
        Cover costs related to:
        <ul>
          <li>Manufacturing, machining, and fabrication</li>
          <li>Testing to ensure reliability and safety</li>
        </ul>
      </li>
      <li>
        Manage operational expenses including:
        <ul>
          <li>Logistics and transportation</li>
          <li>Tooling and safety gear</li>
        </ul>
      </li>
      <li>
        Event registration fees and travel costs for competitions
      </li>
    </ul>

    <h3>How Your Contribution Helps</h3>

    <p>
      Every contribution—big or small—directly helps get our car built, tested,
      and on track.
    </p>

    <p class="bold">All funds raised will be used exclusively for:</p>

    <ul>
      <li>Vehicle design and development</li>
      <li>Component procurement</li>
      <li>Fabrication and testing</li>
      <li>Participation in Formula Bharat 2026 and SUPRA SAEINDIA 2026</li>
    </ul>

  </div>
  <div className='images'>
    <img src="/newshindu.png" className="ma1"/>
    <img src="/fsside.png" className="ma"/>
    <img src="/teamfs.png" className="ma"/>
    <img src="/achievement.png" className="ma"/>
    <img src="/upcommingevent.png" className="ma"/>
    <img src="/supportus.png" className="ma"/>
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/-bwlOPy2lbA?si=47Jju2fjAySug0US" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen></iframe>
  </div>
  </div>
      </div>
      <div className='footer-divider'></div>
      <footer className="footer-bottom">
        <p className="copyright">
          Copyright © 2025 Team Unwired. All rights reserved.
        </p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>

        </div>

    </>
   
  )
}

export default Hero


