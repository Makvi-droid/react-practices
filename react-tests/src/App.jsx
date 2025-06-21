import React from "react"
import Props from "./props/Props"

function App() {
 
  return (
    <>
      <Props game="Bloodborne" creator="FROMSOFTWARE" year={2016} isActive={true}/>
      <Props game="Dusk Bloods" creator="FROMSOFTWARE" year={2025} isActive={false}/>
    </>
  )
}

export default App
