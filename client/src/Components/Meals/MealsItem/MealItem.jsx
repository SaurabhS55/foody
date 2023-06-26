import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
function MealItem(props) {
  const ctx=useContext(CartContext);
  const addToCartHandler = (amount) => {
    ctx.addItem({...props.item,amount:+amount})
  }
  return (
    <li className={classes.meal}>
        <div>
            <h1>{props.item.name}</h1>
            <div className={classes.description}>{props.item.description}</div>
            <div className={classes.price}>{props.item.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm id={props.item.id} addToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem