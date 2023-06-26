import React, { useState,useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
// import Card from '../UI/Card'
const Cart = (props) => {
  const [visible,setVisible]=useState(false)
  const [hidden,setHidden]=useState(false)
  const cartItem=useContext(CartContext)
  const hasCart=cartItem.item.length>0;
  const add=(item)=>{
    cartItem.addItem({...item,amount:1})
  }
  const remove=(id)=>{
    cartItem.removeItem(id)
  }
  const cancelHandler=()=>{
    setVisible(false)
    setHidden(false)
  }
  const submitHandler=async (userData)=>{
    setHidden(true)
    const res=await fetch("https://foody-da258-default-rtdb.firebaseio.com/orders.json",{
      method:'POST',
      body:JSON.stringify({
        user:userData,
        orderItems:cartItem.item
      }),
      Headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(res)
      setVisible(false)
      setHidden(false)
      cartItem.clearCart()
  }
    const cartItems=<ul className={classes['cart-items']}>{cartItem.item.map(item=><CartItem key={item.id} item={item} onAdd={add.bind(null,item)} onRemove={remove.bind(null,item.id)}>{item.name}</CartItem>)}</ul>
    const cartButtons=<div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.hideCart}>Close</button>
    {hasCart&&<button className={classes.button} onClick={()=>{setVisible(true);setHidden(true)}}>Order</button>}</div>
  return (
    <Modal className={classes.content} hideCart={props.hideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Amount</span>
            <span>{cartItem.totalAmount.toFixed(2)}</span>
        </div>
        {visible&&<Checkout onSubmit={submitHandler} onCancel={cancelHandler}/>}
        {!hidden&&cartButtons}
    </Modal>
  )
}

export default Cart