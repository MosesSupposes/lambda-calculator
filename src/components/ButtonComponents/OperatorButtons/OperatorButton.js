import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'


export default function OperatorButton(props) {
  const { appendCalc, calculate } = useContext(ActionsCtx)

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-btn" onClick={(e) => {
        (props.char === "=") 
          ? calculate()
          : appendCalc(props.value) 
      }}>
        {props.char}
      </button>
    </>
  )
}
