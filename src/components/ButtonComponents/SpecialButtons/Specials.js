import React, { useState } from "react"

//import any components needed
import SpecialButton from './SpecialButton'

//Import your array data to from the provided data file
import { _specials } from '../../../data'

export default function Specials(props) {
  // STEP 2 - add the imported data to state
  const [specials, _] = useState(_specials)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {specials.map(function renderSpecials(special, index) {
        return <SpecialButton 
                  key={index} 
                  char={special} 
                  value={special}
                />
      })}
    </div>
  )
}