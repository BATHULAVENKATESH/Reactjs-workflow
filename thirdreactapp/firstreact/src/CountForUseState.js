import { useState } from "react";

function CountForUseState(){

    let count = 0;

    function fun1(){

        return 45;
    }

    const [variable, setState] = useState(fun1);


    const CountDec = () =>{

        setState(befValue => befValue - 1);

    }


    const CountIncre = () => {

        count = count + 1;
        console.log(count);

         setState(variable+1);
       
        setState((preValue) => {

            return preValue + 1;
        });

        setState(preValue => preValue + 1);

        setState(preVa => preVa + 1);

        
    }

    let inputtex = "";

    const InputValChange = (event) => {

        console.log(event.target.value);

        inputtex = event.target.value;

    }

    return(
        <>
            <button onClick={CountIncre}> click here </button>

            <div>{count}</div>

            <div>
                this is value of count {variable}
            </div>


            <div>
                
                <input onChange={InputValChange} placeholder="search..." />

            </div>

            {inputtex}

            <div>

                <button onClick={CountDec} >Click Dec</button>

                {variable}
            </div>

            

        </>
    )
}

export default CountForUseState;
