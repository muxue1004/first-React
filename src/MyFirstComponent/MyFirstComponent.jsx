import './index.css'
import picture from './OIP-C.jpg'

export default function Profile() {
  return (
    <img
      src={picture}
      alt="React"
      className="ReactPhoto"
    />
  )
}