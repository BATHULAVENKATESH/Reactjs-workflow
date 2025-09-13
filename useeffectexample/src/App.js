import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [count , setcount] = useState(1);
  const [products, objectfun]  = useState([]);

  const functionone = async (URL) =>{
   
    try{

       const { data } = await axios.get(URL);
        objectfun([data]);

    }
    catch(err){

      return  err;
       
    }

  } 


  useEffect(()=>{

    const URL = `https://fakestoreapi.com/products/${count}`;

     functionone(URL)

  }, [count]);



  return (

    <>

    <button onClick={()=>{setcount(count+1)}} > click - {count}</button>

    {products.length > 0 && (
        <div>
          {products.map((product) => (
            <p key={product.id}>{product.id}: {product.title}</p>
          ))}
        </div>
      )}

    </>

  );
}

export default App;
