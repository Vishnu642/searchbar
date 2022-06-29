import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Searchbar } from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Searchbar placeholder="Enter a Country Name"  />
    </div>
  )
}

export default App
