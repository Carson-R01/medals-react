import { useRef, useState } from 'react'

function NewCountry({ onAdd }) {
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const openDialog = () => {
    setError('')
    dialogRef.current?.showModal()
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }

  const closeDialog = () => {
    setName('')
    setError('')
    dialogRef.current?.close()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Country name is required')
      return
    }
    onAdd(trimmed)
    closeDialog()
  }

  return (
    <div className="new-country">
      <button type="button" className="new-country__trigger" onClick={openDialog}>
        <span className="new-country__icon">+</span>
        Add country
      </button>

      <dialog className="new-country__dialog" ref={dialogRef}>
        <form className="new-country__form" onSubmit={handleSubmit}>
          <h2 className="new-country__title">Add a country</h2>
          <label className="new-country__label" htmlFor="country-name">
            Country name
          </label>
          <input
            id="country-name"
            ref={inputRef}
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              if (error) setError('')
            }}
            className="new-country__input"
            placeholder="e.g., Spain"
          />
          {error ? <p className="new-country__error">{error}</p> : null}
          <div className="new-country__actions">
            <button type="button" className="new-country__button new-country__button--ghost" onClick={closeDialog}>
              Cancel
            </button>
            <button type="submit" className="new-country__button">
              Add
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default NewCountry
