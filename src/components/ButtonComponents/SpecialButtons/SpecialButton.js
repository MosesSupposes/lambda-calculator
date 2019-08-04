import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'

export default function SpecialButton(props) {
  const { appendCalc, resetCalc } = useContext(ActionsCtx)

  return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button onClick={(e) => {
          if (props.char === "C"){
            resetCalc()
          } 
          else {
            appendCalc(props.value)
          } 
        }}>
          {props.char}
        </button>
      </>
    )
}
