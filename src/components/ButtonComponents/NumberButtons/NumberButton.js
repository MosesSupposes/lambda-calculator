import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'

export default function NumberButton(props) {
  const { appendCalc } = useContext(ActionsCtx)

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => appendCalc(props.value)}>{props.char}</button>
    </>
  )
}

