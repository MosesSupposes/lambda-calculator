import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'


const styles = {
  numberBtn: {
    borderRadius: "100%",
    border: "1px solid black",
    backgroundColor: "navy",
    color: "white",
    fontWeight: "bold",
    padding: ".75rem",
    margin: ".5rem",
    boxShadow: "1px 1px black",
  }
}

export default function NumberButton(props) {
  const { appendCalc } = useContext(ActionsCtx)

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={styles.numberBtn} onClick={() => appendCalc(props.value)}>{props.char}</button>
    </>
  )
}

