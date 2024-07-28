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
      <div id="dog_image">
        <div id="dog_image--description">
          <p id="description">犬の画像を表示するサイトです。</p>
        </div>
        <div id="dog_image--picture">
          <div id="dog_image--container">
            <DogImage imageUrl={dogUrl} />
            <div id="dog_image--update-button">
              <button onClick={() => setImage()}>更新</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
