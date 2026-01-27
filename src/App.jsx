import { useState } from 'react'
import './App.css'
import Country from './Country.jsx'

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ])

  const handleDelete = (id) => {
    setCountries((prev) => prev.filter((country) => country.id !== id))
  }

  return (
    <div className="app">
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.id}
            id={country.id}
            name={country.name}
            gold={country.gold}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <hr className="divider" />
    </div>
  )
}

export default App
