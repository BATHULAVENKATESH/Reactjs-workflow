// import logo from './logo.svg';
// import './App.css';
// import { useReducer } from 'react';

// import { useState } from "react";

// function App() {

//   const initialState ={
//     count : 0
//   }

//   const reducerFun = (state, action) =>{

//     switch (action.type){
//       case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//       case 'DECREMENT':
//         return{
//           ...state,
//           count: state.count - 1
//         }
//       default:
//         return state
//     }
//   }


//    const[state, countDispatch]  = useReducer(reducerFun, initialState);

//       const onDecClick = () =>{

//         countDispatch({type: 'DECREMENT'})
//       }


//   return (

//     <div className="App">

//       <h2>{state.count}</h2>

//       <button onClick={()=> countDispatch({type: 'INCREMENT', payload:'1234'})}>Inc</button>
//       <button onClick={onDecClick} >Dec</button>




//      </div>
     
//   );
// }

// export default App;



import React, { useState } from "react";

import Button from "./components/Button";  

function App() {

  const [count, setCount] = useState(0);

  const onButtonClick = () => {

    setCount(count + 1);

  };

  return (

    <div className="App">

      <Button count={count} onButtonClick={onButtonClick} />

    </div>

  );
}

export default App;
