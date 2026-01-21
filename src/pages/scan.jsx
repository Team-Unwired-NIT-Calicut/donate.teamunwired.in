import { useNavigate } from 'react-router-dom'
import './Scan.css'
function Scan() {
  const navigate = useNavigate()

  return (
    <div className="scan-container">
        <div>
            <img 
            src="/newqr.png" 
            alt="Team Unwired Racing Car"
            className='qr'
          />
        </div>
          <button className='back-button'
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
          <div className='text-buttonn'>
            Back
          </div>
        </button>
    </div>
  )
}

export default Scan
