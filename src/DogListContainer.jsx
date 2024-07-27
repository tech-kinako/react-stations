// @ts-check
import { useState } from 'react'
import { useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()
  useEffect(() => {
    setDogImageUrl();
  }, [])

  async function setDogImageUrl() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    const data = await response.json();
    setBreeds(data.message);
  }

  return <></>
}