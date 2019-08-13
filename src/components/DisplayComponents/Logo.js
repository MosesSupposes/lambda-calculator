import React from "react"

import logo from "../../Img/Lambda_Logo_white.png"


const styles = {
  logoContainer:  {
    paddingLeft: "5rem",
    alignSelf: "flex-start",
  }
}

const Logo = () => {
  return (
    <div style={styles.logoContainer} className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  )
}

export default Logo
