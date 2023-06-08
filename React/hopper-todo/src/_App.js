//import logo from './logo.svg';
import './App.css';
import React from 'react';




const App: React.FC = () => {

  let todolist = [
    {id: 0, task: 'To do list item 1'},
    {id: 1, task: 'To do list item 2'},
    {id: 2, task: 'To do list item 3'},
    {id: 3, task: 'To do list item 4'},
    {id: 4, task: 'To do list item 5'},
  ];

  const [input, setinput] = React.useState('');
  const [todo, updatetodo] = React.useState(todolist);

  const addToList = e => {
    updatetodo([...todo, {id: 10, task: input}]);
  }

  const updateInput = e => {
    setinput(e.target.value);
  }

  return (
   <>
      <h1>My To-Do List</h1>
      <ul>
        <List list={todo} />
      </ul>
      <AddToListInput input={input} onClick={addToList} onChange={updateInput}/>
    </>
  )
}

const List = ({list}) =>  {
  return (
    list.map(({id, task}) =>  (
      <li key={id}>{task} <button>X</button></li>
    ))
  )
}

const AddToListInput = ({input, onClick, onChange}) => {
  return (
    <>
      <hr/>
      <label htmlFor="addToList">Add To List</label>
      <br />
      <input id="search" type="text" value={input} onChange={onChange}/>
      <button onClick={onClick}>Add</button>
    </>
  )
}

export default App;
