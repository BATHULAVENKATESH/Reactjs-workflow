import logo from './logo.svg';
import './App.css';
import { FileX, Flame, Inbox } from 'lucide-react';

 const age = 12;
 const work ='software developer'

 const Element = ()=>{
 
  return(

    <>

    <div style={{display:'flex', backgroundColor: 'orange'}}>


     <h1 className='virat' > ShopToday </h1>

    <input type="text" placeholder='search'/>

    <div style={{display: 'flex'}}>

      <li>html</li>
      <li>css</li>
      <li>javascript</li>

  </div>

  </div>

    </>
  )

 }

function App() {

  
var intput = '';

const OnSearchChange = (event)=>{
  
  console.log(event.target.value)
   intput = event.target.value;
  
}

  let count =0;

const Count = ()=>{
  

   count = count + 1;
   console.log(count);


};

// Define the first functional component
const MyButton = () => {
  return <button>Click Me!</button>;
};

// Define the second functional component
const MyText = () => {
  return <p>This is some text inside a functional component.</p>;
};



  return (
   <>

   < Element />
   
  <button onClick={Count} >Click me</button>
    {Count}
   <div>
    <input onChange={OnSearchChange} placeholder='enter name' />
    {intput}
    
    </div>  

       <div>
      <h1>Welcome to My App</h1>
      <MyButton />
      <MyText />
    </div>

   
   </>
  );

}

export default App;




