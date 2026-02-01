import Medal from './Medal.jsx'

function Country({ id, name, medals, onDelete }) {
  return (
    <div className="country">
      <div className="country__header">
        <h2 className="country__name">{name}</h2>
        <button
          type="button"
          className="country__delete"
          onClick={() => onDelete(id)}
          aria-label={`Delete ${name}`}
        >
          🗑️
        </button>
      </div>
      <div className="country__body medals">
        {medals.map((medal) => (
          <Medal
            key={medal.id}
            name={medal.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Country
