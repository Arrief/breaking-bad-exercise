import React, { useState, useEffect } from 'react';
import './App.css';

// 1. import API data with useEffect to display on page load
// 2. call API
// 3. loading text
// 4. show character name, the nickname, the picture and the status for each character

function App() {
  let [apiData, setApiData] = useState([]);
  let [loadedApi, setLoadedApi] = useState(false);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
      setLoadedApi(true);
      console.log(data);
    })
  }, [])

  return (
    <div className="App">
      {loadedApi == true
        ? apiData.map((element, index) => (
          <>
           <div key={index}><img src={element.img}></img></div>
           <div key={index}>{element.name}</div>
           <div key={index}>{element.nickname}</div>
           <div key={index}>{element.status}</div>
          </>
        ))
        : <p>Data loading...</p>
      }
    </div>
  );
}

export default App;
