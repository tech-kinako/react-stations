// @ts-check
import { useState } from 'react'
import { useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([''])
  const [selectedBreeds, setSelectedBreeds] = useState('')
  const [dogKindList, setDogkindList] = useState([''])
  useEffect(() => {
    setDogList()
  }, [])

  async function setDogList() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    const dogList = Object.keys(data.message).map(key => key)
    setBreeds(dogList)
    setSelectedBreeds(dogList[0])
  }

  return (
    <>
      <div>
        <BreedsSelect
          breeds={breeds}
          setSelectedBreeds={setSelectedBreeds}
          selectedBreeds={selectedBreeds}
          dogKindList={dogKindList}
          setDogkindList={setDogkindList}
        />
      </div>
    </>
  )
}
