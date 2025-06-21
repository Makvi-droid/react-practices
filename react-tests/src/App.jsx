import React from "react"
import Props from "./props/Props"
import Profile from "./props/mini-projects/Profile"

function App() {
 
  return (
    <>
      <Props game="Bloodborne" creator="FROMSOFTWARE" year={2016} isActive={true}/>
      <Props game="Dusk Bloods" creator="FROMSOFTWARE" year={2025} isActive={false}/>

      <Profile image="https://ih1.redbubble.net/image.4064547845.8027/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" name="Zeph" id={87654257} age={23}/>
      <Profile image="https://cdn-useast1.kapwing.com/static/templates/scared-cat-meme-template-thumbnail-cc1d1491.webp" name="Yum" id={62314166} age={20}/>
    </>
  )
}

export default App
