import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import { _numbers } from '../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers, _] = useState(_numbers)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {numbers.map(function renderNumbers(number, index) {
         return <NumberButton key={index} content={number} />
       })}

    </div>
  );
};
