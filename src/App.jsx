import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Portfolio from './views/Portfolio'
import { SocialMedia } from './components/SocialMedia'





function App() {

  return (
    <div className="App">
        
        <Routes>
        <Route path="/" element={<Portfolio />} />
        
        </Routes>

    </div>
  )
}

export default App
