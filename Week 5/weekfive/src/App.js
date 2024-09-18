import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
   const [name, setName] = useState('')
   const [headerText, setHeader] = useState('')
  
   const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleClick = (e) => {
    setHeader(name)
    e.preventDefault()
  }

  return (
    <div className="header-div">
      <br></br>
      <form onSubmit={handleClick}>
      <h1>Welcome {headerText}</h1>
      <br></br>
      <input
      onChange={handleChange}
      type='text'
      placeholder='enter your name'
      value = {name}
      />
      <br></br>
      <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
