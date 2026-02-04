function Medal({ name, count, onIncrement, onDecrement }) {
  const disabled = count === 0

  return (
    <div className="medal">
      <span className="medal__name">{name} medals:</span>
      <div className="medal__controls">
        <button
          type="button"
          className="medal__button"
          onClick={onDecrement}
          disabled={disabled}
          aria-label={`Decrease ${name} medals`}
        >
          –
        </button>
        <span className="medal__count">{count}</span>
        <button
          type="button"
          className="medal__button"
          onClick={onIncrement}
          aria-label={`Increase ${name} medals`}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Medal
