import React, { useState } from "react";


function FormwithUseStateExmple(){  

    const [form, useFun] = useState();

const object = {
    name: '',
    email: '',
    password: '',
    fname: ''
};

 
 
 const Name = (e)=>{
     
    return(

        useFun({...form, name:e.target.value})
    )


 } 

  const Email = (e)=>{
     
    return(

        useFun({...form, email:e.target.value})
    )


 } 

 const Password = (e)=>{
     
    return(

        useFun({...form, Password:e.target.value})
    )


 } 

 const Fname = (e)=>{
     
    return(

        useFun({...form, Fname:e.target.value})
    )


 } 

 console.log(form)

    return(

        <>

        <div>
         
        <form>

        <div>

        <label>Enter Name</label>
        <input  onChange={Name} placeholder="enter your name"></input>
        </div>

         <div>
         <label>Enter Email</label>
        <input  onChange={Email} placeholder="enter your email"></input>
         </div>

         <div>
         <label>Enter Password</label>
        <input onChange={Password} placeholder="enter your paswword"></input>
         </div>

         <div>
         <label>Enter father name</label>
        <input onChange={Fname} placeholder="enter your Fname"></input>
        </div>

        </form>

        </div>

   
        </>
    )
}

export default FormwithUseStateExmple;