// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  const letter =()=>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
useEffect(()=>{
document.addEventListener("keydown",detectkey)
const a = letter();
const detectkey=(e)=>{
  // console.log(e.key);
  if(e.key===randomCharacter)
  {
    console.log(randomCharacter,e.key)
  }
}
})
  return (
    <div className="App">
      <input type="text" onChange={letter}  className="ran" />
       <p>Timer:{}</p>
    </div>
  );
}

export default App;
