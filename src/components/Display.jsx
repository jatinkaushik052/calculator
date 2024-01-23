import React from 'react'
import Styles from './Display.module.css'
const Display = ({displayVal}) => {
  return (
    <div className={Styles.displayContainer}>
        <input type="text" className={Styles.input} value={displayVal} readOnly/>
    </div>
  )
}

export default Display