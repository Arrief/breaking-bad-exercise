import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  let [apiData, setApiData] = useState([]);
  let [loadedApi, setLoadedApi] = useState(false);
  let [survivors, setSurvivors] = useState(false);

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      setApiData(data);
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
  }

  return (
    <div className="list-of-characters">
      <button onClick={handleAlive}>Show everybody who is alive</button>
        {loadedApi === true
          ? survivors === false
            ? apiData.map((element, index) => (
             <div className="char-wrapper" key={index}>
                <img src={element.img} alt={element.name}/>
                <h1>{element.name}</h1>
                <h3>{element.nickname}</h3>
                <p>{element.status}</p>
                {element.status === "Alive" &&
                  <button onClick={() => handleClick(element.char_id)}>Kill</button>
                }
              </div>
              ))
            :  apiData.filter((element) => element.status === "Alive").map((element, index) => (
              <div className="char-wrapper" key={index}>
                 <img src={element.img} alt={element.name}/>
                 <h1>{element.name}</h1>
                 <h3>{element.nickname}</h3>
                 <p>{element.status}</p>
                 {element.status === "Alive" &&
                   <button onClick={() => handleClick(element.char_id)}>Kill</button>
                 }
               </div>
               ))
          : <p>Data loading...</p>
        }
    </div>
  );
}

export default App;
