import React, {useState} from 'react'


function UseState() {

  const [name, setName] = useState('Guest');

  function updateName(){
    setName('Bro')
  }

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={()=>updateName()}>Click</button>
    </>
  )
}

export default UseState
