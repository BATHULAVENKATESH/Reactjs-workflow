import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

 
function App() {

  const useRefVariable = useRef();

const [count, setcount] = useState(0);

 const [isRunning, setIsRunning] = useState(false);

  const startcount = () =>{

    if(!isRunning){

 useRefVariable.current = setInterval(() => {
      setcount(count => count + 1);
    }, 1000);

  }

  setIsRunning(true);
    console.log(useRefVariable.current)

  }


  const stopit = () =>{

   clearInterval(useRefVariable.current)   
   setIsRunning(false);
  
  } 


  return (
    <>
     <p>{count}</p>
    <button onClick={startcount}>Start</button>
    <button  onClick={stopit}>Stop</button>
    </>
  );
}

export default App;
