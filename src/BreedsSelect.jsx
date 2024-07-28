// @ts-check

export const BreedsSelect = Props => {
  const handleChange = event => {
    Props.setSelectedBreeds(event.target.value)
  }

  const viewDogList = () => {
    return Props.breeds.map(breed => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ))
  }

  return (
    <>
      <p id="select_description">Breeds List</p>
      <select value={Props.selectedBreeds} onChange={e => handleChange(e)}>
        <option value="">
          Select
        </option>
        {viewDogList()}
      </select>
    </>
  )
}
