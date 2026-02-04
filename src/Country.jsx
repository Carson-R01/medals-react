import Medal from './Medal.jsx'

function Country({ country, medals, onDelete, onIncrement, onDecrement }) {
  const { id, name } = country
  const total = country.gold + country.silver + country.bronze

  return (
    <div className="country">
      <div className="country__header">
        <h2 className="country__name">{name}</h2>
        <div className="country__actions">
          <span className="country__total" aria-label={`Total medals for ${name}`}>
            {total}
          </span>
          <button
            type="button"
            className="country__delete"
            onClick={() => onDelete(id)}
            aria-label={`Delete ${name}`}
          >
            🗑️
          </button>
        </div>
      </div>
      <div className="country__body medals">
        {medals.map((medal) => (
          <Medal
            key={medal.id}
            name={medal.name}
            count={country[medal.name]}
            onIncrement={() => onIncrement(id, medal.name)}
            onDecrement={() => onDecrement(id, medal.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default Country
