import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'

export default function OperatorButton(props) {
  const { appendCalc, calculate } = useContext(ActionsCtx)

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={(e) => {
        if (props.char === "=") {
          calculate()
        } else {
          appendCalc(props.value) 
        }
      }}>
        {props.char}
      </button>
    </>
  )
}
