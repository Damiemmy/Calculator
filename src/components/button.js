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
      alert('0 already included')
    } else{
      numberValue=Number(calc.num + numberString)
    }


    setCalc({
      ...calc,
      num:numberValue
    })
  }
  //User Percentage Click
  const percentClick=()=>{
    setCalc({
      num:(calc.num/100),
      res:(calc.res/100),
      sign:'',

    })

  }
  //User equals Click
  const equalsClick=()=>{
    if (calc.res && calc.num){
      const math =(a,b,sign)=>{
        const result = {
          '+':(a,b)=> a+b,
          '-':(a,b)=> a-b,
          '/':(a,b)=> a/b,
          'x':(a,b)=> a*b,
        }
        return result[sign](a,b);
      }
      
      setCalc({
        res: math(calc.res,calc.num,calc.sign),
        sign:"",
        num:0
      })
    }
    
  }
  // User invert Click function
  const invertClick=()=>{
    setCalc({
      num:calc.num?calc.num * -1:0,
      res:calc.num?calc.num * -1:0,
      sign:'',
    })
  }
  
  //User click operation
  const signClick=()=>{

    setCalc({
      sign:value,
      res:!calc.res && calc.num? calc.num :calc.res,
      num:0
    
    })
  }
  const handlebtnclick=()=>{

    
    
   
    const results={
      '.':commaClick,
      'C':resetClick,
      '+':signClick,
      '-':signClick,
      '/':signClick,
      'x':signClick,
      '=':equalsClick,
      '%':percentClick,
      '+-':invertClick,
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