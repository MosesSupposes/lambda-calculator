import React, { useState } from "react"

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import { _operators } from '../../../data'

export default function Operators() {
  // STEP 2 - add the imported data to state
  const [operators, _] = useState(_operators)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operators.map(function renderOperators(operator, index) {
        return <OperatorButton 
                  key={index} 
                  char={operator.char} 
                  value={operator.value}
                />
      })}
    </div>
  )
}
