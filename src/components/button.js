import React from 'react'
import { CalContext } from '../context/CalContext'
import{useContext} from 'react';

const getStyleName=(btn)=>{
 
    const className={
      '=':'equals',
      'x':'opt',
      '-':'opt',
      '+':'opt',
      '/':'opt',
    }
    return className[btn]
}

const Button = ({value}) => {
  const{calc,setCalc}=useContext(CalContext);
  console.log(setCalc);
  const commaClick=()=>{
    setCalc({
      ...calc,
      num:!calc.num.toString().includes('.') ? calc.num + value:calc.num
    })

  }
  // User click c
  const resetClick=()=>{
    setCalc({sign:'',num:0,res:0})
  }
  
  //User click Number
  const handleClickButton=()=>{
    const numberString=value.toString()
    
    let numberValue;
    if(numberString==='0' && calc.num ===0){
      numberValue="0"
    } else{
      numberValue=Number(calc.num + numberString)
    }


    setCalc({
      ...calc,
      num:numberValue
    })
  }
  const handlebtnclick=()=>{

    
    
   
    const results={
      '.':commaClick,
      'C':resetClick,
    }
    if(results[value]){
      return results[value]()
      
    }else{
      return handleClickButton()
    }
    
  }
  return (
    <button onClick={handlebtnclick} className={`${getStyleName(value)} Button`}>{value}</button>
  )
}

export default Button;