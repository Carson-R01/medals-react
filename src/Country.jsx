function Country({ id, name, gold, onDelete }) {
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
          Delete
        </button>
      </div>
      <div className="country__body">
        <span className="country__label">
          Gold medals: <span className="country__count">{gold}</span>
        </span>
      </div>
    </div>
  )
}

export default Country
