import { useState } from 'react'
import './App.css'
import axios from  'axios';

function Wiki() {
  const [word, setword] = useState('');
  const [result, setResult] = useState(null);
 const fetch =async()=>{
  try {
    await axios.get(`http://localhost:7000/api/wiki/${word}`).then(response=>{setResult(response.data)}).catch(er=>{console.log(er)});  
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
