import picture from '../MyFirstComponent/OIP-C.jpg'

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date)
}

function TodoList() {
  return(
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src={picture}
        alt="Hedy Lamarr" 
        className="photo"
      />
      <h1>To Do LIST FOR {formatDate(today)}</h1>
      <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
      </ul>
    </>
  )
}

export default TodoList