import { people } from './data.js';
import { getImageUrl } from './utils.jsx';

function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl()}
        alt={person.name}
        style={{width : '10%'}}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return <ul>{listItems}</ul>;
}

export default List;