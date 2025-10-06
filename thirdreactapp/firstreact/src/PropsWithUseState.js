import React, { useState } from 'react';

const IncreFun1 = (props) => {


    const setIncreFunction = () => {

        props.setStae(prev => prev + 1);

    };

   

    return (

        <button onClick={setIncreFunction}>

            IncreButton {props.setval}

        </button>


    );

};

const DecFun1 = (props) => {

    const DecFunnction = () => {

        props.setStae(prev => prev - 1);
      
    };

    return (

        <button onClick={DecFunnction}>

            DecButton {props.setval}

        </button>

    );

};

function PropsWithUseState() {

    const [setval, setStae] = useState(12);

    return (

        <>
            <IncreFun1 setval={setval} setStae={setStae}  />

            <DecFun1 setval={setval} setStae={setStae} />
        </>

    );

}

export default PropsWithUseState;
