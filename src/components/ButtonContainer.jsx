import React from 'react'
import Styles from './ButtonContainer.module.css'
const ButtonContainer = ({ onButtonClick }) => {
    const btnName = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]
    return (
        <div className={Styles.btnContainer} >
            
            {btnName.map((btnName) => <button className={Styles.btn} onClick={() => onButtonClick(btnName)}>{btnName}</button>
            )}

        </div>
    )
}

export default ButtonContainer