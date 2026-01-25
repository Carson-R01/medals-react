import { useState } from 'react'

function Country() {
  const [name] = useState('United States')
  const [gold, setGold] = useState(0)

  const handleClick = () => {
    setGold((prev) => prev + 1)
  }

  return (
    <div className="country">
      <span className="country__label">
        {name} gold medals: <span className="country__count">{gold}</span>
      </span>
      <button type="button" onClick={handleClick} aria-label="Add gold medal">
        +
      </button>
    </div>
  )
}

export default Country
