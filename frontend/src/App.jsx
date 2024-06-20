import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from  'axios';

function Wiki() {
  const [word, setword] = useState('');
  const [result, setResult] = useState(null);
 const fetch =()=>{
  try {
    const response = axios.get(`http://localhost:7000/api/wiki/${word}`);
    setResult(response.data);
} catch (error) {
    console.error('Error fetching data', error);
}
 }
  return (
    <>
     <input type='text' onChange={(e)=>{setword(e.target.value)}} />
     <button onClick={fetch}>Fetch Data</button>
     {result && (
                <div>
                    <h2>{result.title}</h2>
                    <p>{result.extract}</p>
                    <a href={result.content_urls.desktop.page} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            )}
    </>
  )
}

export default Wiki
