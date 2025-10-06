import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {v4 as uuid } from 'uuid';

function App() {

  const [todo, setTodo] = useState('');

  const [todoList, setTodoList] = useState([]);

  const onTodoInputChange = (e) =>{
     
    setTodo(e.target.value);

  }

  const onAddTodoClick = () =>{

  setTodoList([...todoList, {id: uuid(), todo:todo, isComplete: false}]);
     setTodo('');
  }

  const OnDeleteClick = (id) =>{
     
    const  updatedTodoList = todoList.filter(todo => todo.id !== id);
     setTodoList(updatedTodoList);
    console.log(updatedTodoList)
  }

    const OntodoClickChange = (id) =>{
     
      const updatedTodoList = todoList.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo);
        console.log(updatedTodoList);
        setTodoList(updatedTodoList);
    }

  console.log(todoList);


  return (

   <div className='App'>
    <h1>My Whishlist</h1>

     <div>
      <input  value={todo} onChange={onTodoInputChange} placeholder='search here' />
      <button onClick={onAddTodoClick}>Add</button>
     </div>
   <div>

   {

    todoList && todoList.length > 0 && todoList.map(todo =>(
     
     <div key={todo.id}>
      <label>
        <input onClick={ () => OntodoClickChange(todo.id)} type='checkbox' />
        <span className= {todo.isCompleted? 'strike-through':''}>{todo.todo}</span>
      </label>
      <button onClick={ () => OnDeleteClick(todo.id)} >Delete</button>
      </div>

    ))
 
   }

   </div>

   </div>
  )
}

export default App;
