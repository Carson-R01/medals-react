/* eslint-disable react-hooks/refs */
import { useRef, useState } from 'react'
import './App.css'
import Country from './Country.jsx'

function App() {
  const medals = useRef([
    { id: 1, name: 'gold' },
    { id: 2, name: 'silver' },
    { id: 3, name: 'bronze' },
  ])

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 0 },
    { id: 2, name: 'China', gold: 3, silver: 2, bronze: 1 },
    { id: 3, name: 'France', gold: 0, silver: 1, bronze: 3 },
  ])

  // eslint-disable-next-line react-hooks/refs
  const medalList = medals.current

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
            medals={medalList}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <hr className="divider" />
    </div>
  )
}

export default App
