import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'


const styles = {
  operatorBtn: {
    borderRadius: "100%",
    border: "1px solid black",
    backgroundColor: "teal",
    color: "white",
    fontWeight: "bold",
    padding: ".75rem",
    margin: ".5rem",
    boxShadow: "1px 1px black",
  }
}

export default function OperatorButton(props) {
  const { appendCalc, calculate } = useContext(ActionsCtx)

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={styles.operatorBtn} onClick={(e) => {
        (props.char === "=") 
          ? calculate()
          : appendCalc(props.value) 
      }}>
        {props.char}
      </button>
    </>
  )
}
