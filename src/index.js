import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './MyFirstComponent'
import Item from './Item';
import PackingList from './PackingList';
import List from './List'
// import App from './App';
// import Hw from './Hw/Hw'
// import TodoList from './TodoList'
// import Avatar from './Avatar';
// import Card from './Card'
// import Counter from './Counter'
// import ClickBtn from './ClickBtn';
// import Photo from './MyFirstComponent/MyFirstComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>
    <Profile />
    {/* <Hw />
    <Photo />
    <Photo />
    <TodoList />
    <Avatar /> */}
     <PackingList>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={true} 
          name="Photo of Tam" 
        />
    </PackingList>

    <List />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
