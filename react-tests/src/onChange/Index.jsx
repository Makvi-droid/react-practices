import React, {useState} from 'react'

function Index() {

    const [name, setUserName] = useState('Guest');
    const [number, setNumber] = useState(0);
    const [option, setOption] = useState()

    const changeUsername = (event) => {
        setUserName(event.target.value)
    }

    const changeNumber = (event) => {
        setNumber(event.target.value)
    } 

    const changeOption = (event) => {
        setOption(event.target.value)
    }

  return (
    <div>
        <label htmlFor="username">Username: {name}</label><br />
        <input type="text" id='username' placeholder={name} onChange={changeUsername}/>
        <br /><br />

        <label htmlFor="username">Age: {number}</label><br />
        <input type="number" id='username' placeholder={number} onChange={changeNumber}/>

        <br /><br />

        <label htmlFor="options">Option:</label>
        <select value={option} name="options" id="options" onChange={changeOption}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        <p>Option: {option}</p>
    </div>
  )
}

export default Index