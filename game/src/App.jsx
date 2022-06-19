// import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [alpha, setAlpha] = useState();
  const [time,setTime] = useState(0)
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomLetter = alphabet[Math.floor(Math.random() * 20)]
  
  useEffect(() => {

    console.log(alpha);
    if (alpha == randomLetter) {
      console.log("detect");
      setTime((i)=>i+1);
    }
    else {
      console.log("error")
      setTime((i)=>i+1.5);
    }
  }, [alpha])

  const handleChange = (e) => {
    // console.log(e.target.value)
    setAlpha(e.target.value);
  }
  return (
    <div className="App">
      <input type="text" value={randomLetter} className="ran" onChange={(e) => handleChange(e)} />
      <p>Timer:{time}</p>
    </div>
  );
}

export default App;
