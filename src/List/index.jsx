const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );

  // console.log(listItems);

  return <ul>{listItems}</ul>;
}

export default List;