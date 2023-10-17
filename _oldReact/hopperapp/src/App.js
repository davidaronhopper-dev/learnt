import './App.css';
import React from 'react';


function App() {

	const title = 'My Hacker Story';

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

	const [searchTerm, setSearchTerm] = useSemiePersistentState('search', 'React');



  const handleSearch = event => {
  		setSearchTerm(event.target.value);	
  }

  const filteredStories = bookList.filter(story => {
  	return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <h1>{title}</h1>
      <SearchBox onSearch={handleSearch} searchText={searchTerm}/>
      <InputField id={'Search'} type={'text'} value={'Pennnnnnis'}/>
      <List list={filteredStories}/>
    </div>
  );
}



//Custom Hooks ---------------------------------------------------------

const useSemiePersistentState = (key, initialState) => {
	const [value, setValue] = React.useState(
  		localStorage.getItem(key) || initialState
  	);

	React.useEffect(()=> {
  	localStorage.setItem(key, value);
  }, [value, key]);

	return [value, setValue];
}



//Components ---------------------------------------------------------

const SearchBox = ({onSearch, searchText}) => {
	return (
		<>
			<label htmlFor="search">Search: </label>
      	<input id="search" type="text" onChange={onSearch} value={searchText}></input>
      	<hr />
      <h1>Searching For: {searchText}</h1>
		</>
	)
}

const InputField = ({id, type, onChange, value}) => {
	return (
		<>
			<label htmlFor={id}>{value}: </label>
      	<input id={id} type={type} value={value}></input>
		</>
	)
}

const List = ({ list }) => {
	return list.map(item => {
		return (
			<Item key={item.objectID} {...item} />
		)
	});
}

const Item = ({title, url, author, num_comments, points, objectID}) => {
	return (
			<div key={objectID}>
            <h1><a href={url} target='blank'>{title} by {author}</a></h1>
            <hr/>
            <h2>comments: {num_comments} | points: {points}</h2>
          </div>
		)
}

export default App;