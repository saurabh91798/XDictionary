import React, { useState } from 'react';
import './App.css';

const dictionaryData = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const searchedWord = searchTerm.trim().toLowerCase();
    const foundWord = dictionaryData.find(entry => entry.word.toLowerCase() === searchedWord);

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>Definition:</p>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default App;
