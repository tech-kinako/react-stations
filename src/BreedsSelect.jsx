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

  const getDogImage = async () => {
    // if (Props.selectedBreeds !== 'select' || Props.selectedBreeds == '') {
      const response = await fetch(
        `https://dog.ceo/api/breed/${Props.selectedBreeds}/images/random/12`,
      )
      const data = await response.json()
      const image = Object.values(data.message).map(value => value)
      Props.setDogkindList(image)
    // }
  }

  const viewDogKindList = () => {
    console.log(Props.dogKindList.length)
    if (Props.dogKindList.length > 1) {
      return Props.dogKindList.map(image => (
        <div key={image}>
          <img
            className="dog-image"
            src={image}
            alt=""
            style={{ width: '400px', height: '300px' }}
          />
        </div>
      ))
    }
  }

  return (
    <>
      <div id="dog_list--container">
        <p id="select--description">Breeds List</p>
        <select value={Props.selectedBreeds} onChange={e => handleChange(e)}>
          {viewDogList()}
        </select>
        <button id="view-button" onClick={() => getDogImage()}>
          表示
        </button>
      </div>
      <div id="dog_kind_List--container">{viewDogKindList()}</div>
    </>
  )
}
