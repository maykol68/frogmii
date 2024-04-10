import { useState } from 'react'
import './App.css'
import EarthquakesList from "./features/earthqueakes/EarthquakesList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>Features</h1>
          <EarthquakesList />
      </div>
    </>
  )
}

export default App
