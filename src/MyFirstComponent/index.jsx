import Avatar from "../Avatar";
// import './index.css'
// import picture from './OIP-C.jpg'

// export default function Profile() {
//   return (
//     <img
//       src={picture}
//       alt="React"
//       className="ReactPhoto"
//     />
//   )
// }

function Profile() {
  return (
    <>
      <Avatar
        size={200}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2s'
        }}
      />
      <Avatar
        size={150}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lhs'
        }}
      />
      <Avatar
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6s'
        }}
      />
    </>
  );
}

export default Profile;