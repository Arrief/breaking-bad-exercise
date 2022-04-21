import React, { useState, useEffect } from 'react';
import './App.css';

// 1. import API data with useEffect to display on page load
// 2. call API
// 3. loading text
// 4. show character name, the nickname, the picture and the status for each character

function App() {
  let [apiData, setApiData] = useState([]);
  let [loadedApi, setLoadedApi] = useState(false);
  let [survivors, setSurvivors] = useState(false);
  let [copyOfOriginal, setCopyOfOriginal] = useState([]);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
      setCopyOfOriginal(data);
      setLoadedApi(true);
      console.log(data);
    })
  }, [])

  const handleClick = (charId) => {
    let index = apiData.findIndex((element) => element.char_id === charId);
    let copyArray = [...apiData];
    copyArray[index].status = "Deceased";
    setApiData(copyArray);
    console.log(apiData);
  }

  const handleAlive = () => {
    setSurvivors(!survivors)
    if (survivors === false) {
      let onlyAlive = apiData.filter((element) => element.status === "Alive");
      setApiData(onlyAlive)
    } else {
      setApiData(copyOfOriginal);
    }
    console.log(survivors);
  }

  return (
    <div className="list-of-characters">
      <button onClick={handleAlive}>Show everybody who is alive</button>
        {loadedApi == true
          ? apiData.map((element, index) => (
          <div className="char-wrapper" key={index}>
          <div><img src={element.img}></img></div>
          <div>{element.name}</div>
          <div>{element.nickname}</div>
          <div>{element.status}</div>
          {element.status === "Alive" 
            ? <button onClick={() => handleClick(element.char_id)}>Kill</button>
            : null
          }
            </div>
          ))
          : <p>Data loading...</p>
      }
    </div>
  );
}

export default App;
