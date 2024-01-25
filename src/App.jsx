import React, { useState } from 'react';
import './App.css';

function App() {
  const [work, setWork] = useState('');
  const [listWork, setListWork] = useState([]);
  const [listFinished, setListFinished] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    setWork(event.target.value);
  };

  const appendList = () => {
    setListWork(listWork.concat(work));
    setWork(''); // Clean the input
  };

  const deleteElement = (index) => {
    // CREATE A NEW LIST. EXCLUDING THE ELEMENT THAT SHARES THE INDEX OF THE ELEMENT THAT I CLICKED
    const newList = listWork.filter((_, i) => i !== index);
    setListWork(newList);
    setListFinished(listFinished.concat(listWork[index])); // Add the deleted item to the finished list
  };

  const finishedWorks = () => {
    return (
      <div>
        {listFinished.length > 0 && (
          <>
            <h2>Finished Works</h2>
            {listFinished.map((elementFinished, index) => (
              <span key={index}>
                <a>{elementFinished}</a>
                <br />
              </span>
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div>
        <h1>To Do List</h1>

        <form>
          <input
            type="text"
            name="work"
            className="work"
            value={work}
            placeholder="add a work"
            onChange={handleInputChange}
          />
          <input type="button" value="accept" onClick={appendList} />
        </form>

        <p>
        {
        listWork.map((listElement, index) => (
          <span key={index}>
             <label>
            <input type="checkbox" value={listElement} onClick={() => deleteElement(index)} />
            {listElement}
          </label>
          </span>
        ))
        }

        </p>
        <div>
        {finishedWorks()}
        </div>
      </div>
    </>
  );
}

export default App;
