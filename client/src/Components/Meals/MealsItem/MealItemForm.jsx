import React, { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
function MealItemForm(props) {
  const Inputref=useRef()
  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(Inputref.current.value)
    props.addToCart(Inputref.current.value)
    // Inputref.current.value=0
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={Inputref}
        label="Amount"
        input={{
            id:'amount_'+props.id,
            type:"number",
            min:"1",
            max:"5",
            step:"1",
            defaultValue:"1"
        }}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm