import picture from '../MyFirstComponent/OIP-C.jpg'

function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <>
      <img
        className="avatar"
        src = {picture}
        // src = {avatar}
        alt = {description}
      />
    </>
  )
}

export default Avatar