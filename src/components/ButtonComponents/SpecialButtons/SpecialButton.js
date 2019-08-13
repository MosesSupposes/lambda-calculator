import React, { useContext } from "react"
import { ActionsCtx } from '../../../App'


const styles = {
  specialBtn: {
    borderRadius: "100%",
    border: "1px solid black",
    backgroundColor: "rgb(100, 100, 175)",
    color: "white",
    fontWeight: "bold",
    padding: ".75rem",
    margin: ".5rem",
    boxShadow: "1px 1px black"
  }
}

export default function SpecialButton(props) {
  const { appendCalc, resetCalc } = useContext(ActionsCtx)

  return (
      <>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button style={styles.specialBtn} onClick={(e) => {
          (props.char === "C")
            ? resetCalc()
            : appendCalc(props.value)
        }}>
          {props.char}
        </button>
      </>
    )
}
