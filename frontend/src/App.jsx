import { useState } from 'react';
import './App.css';
import axios from 'axios';

function Wiki() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState(null);

  const fetch = async () => {
    try {
      await axios.get(`http://localhost:7000/api/wiki/${word}`)
        .then(response => setResult(response.data))
        .catch(error => console.log(error));
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        onChange={(e) => setWord(e.target.value)} 
        placeholder="Enter a word to search" 
      />
      <button onClick={fetch}>Fetch Data</button>
      {result && (
        <div className="result">
          <h2>{result.title}</h2>
          <p>{result.extract}</p>
          <a href={result.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      )}
    </div>
  );
}

export default Wiki;
