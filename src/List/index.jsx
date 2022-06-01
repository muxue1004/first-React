import React from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.jsx';

function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );

  const listItems = chemists.map(person =>
    <React.Fragment key={person.id}>
      <li>
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
    </React.Fragment>
  );

  return <ul>{listItems}</ul>;
}

export default List;