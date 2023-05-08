import './App.css';


const bookList = [
  {
    title: 'React',
    url: 'http://reactjs.org',
    author: 'Jordan White',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'http://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

function App() {

  const title = 'My Hacker Story';

  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
      <hr />

      {bookList.map(function(book){
        return (
          <div key={book.objectID}>
            <h1><a href={book.url} target='blank'>{book.title} by {book.author}</a></h1>
          </div>
        );
      })}

    </div>
  );
}

export default App;