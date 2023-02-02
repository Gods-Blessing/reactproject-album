import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Album from './components/album/Album';
import Aside from './components/aside/Aside';


function App() {
  // state for list of items that we get on fetching the data from api
  const [list, setList] = useState([]);

  // fro managing the state of input
  const [value, setvalue] = useState({id: list.length, title: ""});

  // function for managing the state of input
  function handlestate(e){
    setvalue((prevState)=>{
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  // function for managing the sate of list, like whenever we add any data to the album
  function handleValue(e){
    e.preventDefault();

    setList((prevState)=>{
      return [{id: list.length+1, title: value.title }, ...prevState]
    })
  }


  useEffect(()=>{
    // fetching the data from the api
    async function getMemes() {
      const arr = [];
      const res = await fetch("https://jsonplaceholder.typicode.com/albums")
      const data = await res.json();
      // setting the fetched data into the state
      setList(()=>{
        return [...data]
      })
  }
  getMemes()


    // fetch("https://jsonplaceholder.typicode.com/albums")
    // .then(res => res.json())
    // .then(data=> arr.push(data))
    // .then(()=>setList(arr))
    // setList(arr);
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className='asideAndalbum'>
        <Aside mystate={value} myhandleState={handleValue} handleState={handlestate}/>
        <Album list={list}/>    
      </div>
    </div>
  );
}

export default App;
