import React, { useState } from 'react'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import Styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [calVal, setcalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if (buttonText ==='c'){
      setcalVal("")
    }
    else if (buttonText === '='){
      const result=eval(calVal)
      setcalVal(result)
    }
    else{
      const newDisplayValue=calVal+buttonText;
      setcalVal(newDisplayValue)
    }
  }
  return (
    <>
    
    <div className='container d-flex justify-content-center'>
    <div  className={Styles.calculator}>
    <h1>Calculator</h1>
    <Display displayVal={calVal}/>
    <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
    </div>
    </>
  )
}

export default App