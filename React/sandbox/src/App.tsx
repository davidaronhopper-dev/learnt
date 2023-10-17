import { useState } from 'react'
import './App.css'

const List = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
    'List Item 6',
    'List Item 7'
]

const ListContainer = ({content, handleClick}) => {
    return (
        <ul>
            {content.map((item, i) => {
                return (
                    <ListItem key={i} text={item} handleClick={handleClick}/>
                )
            })}
        </ul>
    )
}

const ListItem = ({text, handleClick}) => {
    return (
        <li><input type="checkbox" onClick={() => {handleClick()}}/> {text}</li>
    )
}

function App() {

    function handleClick() {
        console.log('clicked');
    }

  return (
    <>
        <div className="listContainer flex">
            <div className="listBox">
                <ListContainer content={List} handleClick={handleClick}/>
            </div>
            <button>&rarr;</button>
            <button>&larr;</button>
            <div className="listBox"></div>
        </div>
    </>
  )
}

export default App;
