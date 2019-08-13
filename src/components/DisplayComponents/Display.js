import React from "react"


const styles = {
  display: {
    textAlign: "end",
    background: "rgb(75,75,75)",
    padding: "1rem 2rem",
    borderRadius: "25px",
    color: "white",
    maxWidth: "600px"
  }
}

export default function Display(props) {
  return <div style={styles.display} className="display">{props.children}</div>
}
