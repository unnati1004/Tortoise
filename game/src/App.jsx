// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
useEffect(()=>{
document.addEventListener("keydown",detectkey)
})
const detectkey=(e)=>{
  // console.log(e.key);
  if(e.key===randomCharacter)
  {
    console.log(randomCharacter,e.key)
  }
}
  return (
    <div className="App">
      <input type="text" value={randomCharacter} className="ran" />
       <p>Timer:{}</p>
    </div>
  );
}

export default App;
