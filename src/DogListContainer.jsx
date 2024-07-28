// @ts-check
import { useState } from 'react'
import { useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreeds, setSelectedBreeds] = useState()
  useEffect(() => {
    setDogList()
  }, [])

  async function setDogList() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    const dogList = Object.keys(data.message).map(key => key)
    setBreeds(dogList)
  }

  return (
    <>
      <div id="dogList_Container">
        <BreedsSelect
          breeds={breeds}
          setSelectedBreeds={setSelectedBreeds}
          selectedBreeds={selectedBreeds}
        />
      </div>
    </>
  )
}
