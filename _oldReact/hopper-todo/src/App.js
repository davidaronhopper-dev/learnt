//import logo from './logo.svg';
import './App.css';
import React from 'react';




const App: React.FC = () => {

const [addToListInput, updateAddToListInput] = React.useState('');
const [todoList, updateToDoList] = React.useState([
  'Task 1',
  'Task 2',
  'Task 3'
]);

const updateWithInput = e => {
  updateAddToListInput(e.target.value);
  console.log(e.target.value);
}

const addToToDo = () => {
  updateToDoList([...todoList, addToListInput]);
}

const removeToToDo = index => {
  const updateList = todoList;
  console.log(index);
  updateList.splice(index, 1);
  return updateToDoList([...updateList]);
}

return(
    <>
      <h1>My To Do List</h1>
      <ul><List content={todoList} onClick={removeToToDo}/></ul>
      <AddToList onChange={updateWithInput} onClick={addToToDo}/>
    </>
  )

}

const List = ({content, onClick}) => {
  return(
    content.map((item, index) => {
      return <li key={index}>{item} <button onClick={e => onClick(index)}>-</button></li>
    })
  )
}

const AddToList = ({onChange, onClick}) => {
  return (
    <>
    <input type="text" onChange={onChange}/>
    <button type="submit" onClick={onClick}>+</button>
    </>
  )
}

export default App;
