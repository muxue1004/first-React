import picture from '../MyFirstComponent/OIP-C.jpg'

// function Avatar({ size }) {
//   // const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//   const description = 'Gregorio Y. Zara';

//   return (
//     <>
//       <img
//         className="avatar"
//         src = {picture}
//         // src = {avatar}
//         alt = {description}
//         width={size}
//       />
//     </>
//   )
// }

// export default Avatar

function Avatar({ size = 100, person }) {

  function getImageUrl() {
    return (
      picture
    )
  }

  return (
    <img
      className="avatar"
      src={getImageUrl()}
      alt={person.name}
      width={size}
    />
  );
}

export default Avatar
