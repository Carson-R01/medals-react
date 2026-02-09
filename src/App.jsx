/* eslint-disable react-hooks/refs */
import { useState } from 'react'
import './App.css'
import Country from './Country.jsx'
import NewCountry from './NewCountry.jsx'

function App() {
  const medalTypes = [
    { id: 1, name: 'gold' },
    { id: 2, name: 'silver' },
    { id: 3, name: 'bronze' },
  ]

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: 'France', gold: 0, silver: 2, bronze: 2 },
  ])

  const handleAddCountry = (name) => {
    setCountries((prev) => {
      const nextId = prev.reduce((max, country) => Math.max(max, country.id), 0) + 1
      return [
        ...prev,
        { id: nextId, name, gold: 0, silver: 0, bronze: 0 },
      ]
    })
  }

  const handleDelete = (id) => {
    setCountries((prev) => prev.filter((country) => country.id !== id))
  }

  const handleIncrement = (countryId, medalName) => {
    setCountries((prev) =>
      prev.map((country) =>
        country.id === countryId
          ? { ...country, [medalName]: country[medalName] + 1 }
          : country,
      ),
    )
  }

  const handleDecrement = (countryId, medalName) => {
    setCountries((prev) =>
      prev.map((country) => {
        if (country.id !== countryId) return country
        const nextValue = Math.max(0, country[medalName] - 1)
        return { ...country, [medalName]: nextValue }
      }),
    )
  }

  const overallTotals = countries.reduce(
    (acc, country) => {
      const total = country.gold + country.silver + country.bronze
      acc.gold += country.gold
      acc.silver += country.silver
      acc.bronze += country.bronze
      acc.total += total
      return acc
    },
    { gold: 0, silver: 0, bronze: 0, total: 0 },
  )

  return (
    <div className="app">
      <header className="header">
        <h1>
          Olympic Medals <span className="header__total">{overallTotals.total}</span>
        </h1>
      </header>
      <NewCountry onAdd={handleAddCountry} />
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            medals={medalTypes}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default App
