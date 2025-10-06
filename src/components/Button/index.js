import React from "react";
import { Text } from "../Text";

export const Button = ({ count, onButtonClick }) => {

  return (
    <>
      <button onClick={onButtonClick}>Click to Increment</button>

      {/* Pass count to Text */}

      <Text count={count} />

    </>
  );
  
};

export default Button;
