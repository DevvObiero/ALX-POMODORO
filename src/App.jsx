import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './App.css'
import SettingsPage from './components/SettingsPage'

function App() {
  return (
    <div className="text-[#c9ccea] flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle,_#012754_0%,_#06F076_30%,_#012754_100%)]">
      <h1 className='text-5xl font-bold'>POMODORO</h1>
      <small>Maximize your productivity</small> 
      <SettingsPage/>
      {/* <CountdownCircleTimer/> */}
    </div>
  )
}

export default App
