// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/cavapoo/lulu2.jpg',
  )

  async function setImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const image = await response.json();
      setDogUrl(image["message"])
    }

  return (
    <>
      <header className='header'>
        <h1>Dogアプリ</h1>
      </header>

      <main>
        <div id="description">
          <p>犬の画像を表示するサイトです。</p>
        </div>
        <img src={dogUrl} alt="Dog image" style={{width:"500px",height:"500px"}}/>
        <div>
          <button onClick={() => setImage()}>更新</button>
        </div>
      </main>
    </>
  )
}
