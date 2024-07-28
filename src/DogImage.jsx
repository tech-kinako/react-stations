// @ts-check

export const DogImage = Props => {
  return (
    <>
      <img
        src={Props.imageUrl}
        alt="Dog image"
        style={{ width: '100%', height: '400px' }}
        id="image"
      />
    </>
  )
}
