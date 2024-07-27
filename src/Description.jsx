// @ts-check
import { DogImage } from './DogImage'
import { useState } from 'react'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/cavapoo/lulu2.jpg',
  )

  async function setImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const image = await response.json()
    setDogUrl(image['message'])
  }

  return (
    <>
      <div id="description">
        <p>犬の画像を表示するサイトです。</p>
      </div>
      <DogImage imageUrl={dogUrl} />
      <div>
        <button onClick={() => setImage()}>更新</button>
      </div>
    </>
  )
}
