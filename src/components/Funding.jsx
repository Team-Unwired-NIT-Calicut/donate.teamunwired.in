import './Funding.css';
import FundraiserProgress from './FundraiserProgress.jsx';
import { useState } from "react";
const images = [
  {
    id: 1,
    url: '/img1.png',
    alt: 'Mountain landscape'
  },
  {
    id: 2,
    url: '/img2.png',
    alt: 'Nature path'
  },
  {
    id: 3,
    url: '/img3.png',
    alt: 'Sunset sky'
  },
  {
    id: 4,
    url: '/img4.png',
    alt: 'Forest trail'
  },
  {
    id: 5,
    url: '/img5.png',
    alt: 'Mountain peak'
  },
  {
    id: 6,
    url: '/img2.png',
    alt: 'Misty landscape'
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
        <h1 className="text1">CROWD FUNDING</h1>
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
        <h1 className="text2">SUPPORT OUR DREAMS</h1>
      <div className='caption'>
        <div className='heading1'>Who we are</div>
          <p className="caption-text">
            <br />
            Team Unwired is a completely student-run Formula Student team from NIT Calicut,
            driven by a small group of passionate engineering students who design, build
            and race a single-seater formula-style race car from scratch every season.
            <br />
            The team represents NIT Calicut at premier national competitions like Formula
            Bharat and SUPRA SAEINDIA, competing against top engineering institutes from
            across India.
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
                <br /><br />
                <strong>Our 2026 season</strong>
                <br />
                In the 2026 season, Team Unwired will:
                <br />
                Build a new, improved Formula Student race car, designed, manufactured
                and assembled entirely by students.
                <br />
                Compete at Formula Bharat 2026 at Kari Motor Speedway, Coimbatore from
                January 21–26, 2026.
                <br />
                Prepare to race again at SUPRA SAEINDIA 2026.
                <br /><br />

                <strong>Why we need your support now</strong>
                <br />
                Team Unwired is fully student-owned and self-funded; the project depends
                entirely on sponsorships and individual contributions.
                <br /><br />

                Immediate funding is critical to procure components, manufacturing,
                testing, logistics, safety gear, and event participation.
                <br /><br />

                Every contribution directly supports building and racing the 2026 car.
                <br /><br />

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
    </div>
    </>
   
  )
}

export default Hero


