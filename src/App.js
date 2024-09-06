      

import React from "react"
import image from "./images/image.png"

function App(){
  return(
    <div>
    <h1 style={{textAlign:"center"}}>WELCOME TO APP</h1>
    <img  src={image} alt="error"/>  
    <div id="logo-div">
                <a href="/"><img src={logo} alt='logo' /></a>
              </div> 
    </div>
  )
}

export default App

