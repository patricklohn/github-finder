import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Git hub finder</h1>
        <Outlet/>
      </div>
    </>
  )
}

export default App
