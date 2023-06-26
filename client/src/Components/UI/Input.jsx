import React from 'react'
import classes from './Input.module.css'
const Input=React.forwardRef((props,ref)=> {
  // const [amount,setAmount]=useState(0);
  // const chageHandler=(e)=>{
  //   setAmount(e.target.value);
  //   // console.log(amount)
  //   props.addAmount(+amount)
  // }
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} ref={ref}/>
    </div>
  )
})

export default Input