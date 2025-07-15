import React, {useState} from 'react'
import styles from './colorPicker.module.css'

function ColorPicker() {

    const [color, setColor] = useState('#ffffff');

    const updateColorChange = (e) => {
        setColor(e.target.value)
    }

  return (
    <div className={styles.container}>
        <h2>Color Picker App</h2>

        <div className={styles.colorContainer} style={{backgroundColor: color}}>
           
        </div>
         <p>Selected Color: {color}</p>

        <label htmlFor="color-picker">Pick a color: </label>
        <input type="color" id='color-picker' value={color} onChange={updateColorChange}/>

    </div>
  )
}

export default ColorPicker
