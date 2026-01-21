import { Routes, Route } from 'react-router-dom'
import Funding from './components/Funding'
import Scan from './pages/scan.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Funding />} />
      <Route path="/scan" element={<Scan />} />
    </Routes>
  )
}

export default App
