import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
function HeaderCartButton(props) {
  const ctx=useContext(CartContext);
  const [bump,setBump]=useState(false)
  let count
  // let {item}=ctx
  count=ctx.item.reduce((c,ele)=>{
    let t=c+ele.amount
    return t;
  },0)
  const bumpButton=`${classes.button} ${(bump)?classes.bump:''}`
  useEffect(()=>{
    if(ctx.item.length===0){
      return
    }
    setBump(true)
    let t=setTimeout(() => {
      setBump(false)
    }, 300);
    return ()=>{
      clearTimeout(t)
    }
  },[ctx.item])
  // console.log(count)
  return (
    <button className={bumpButton} onClick={props.showCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Cart
        </span>
        <span className={classes.badge}>{count}</span>
    </button>
  )
}

export default HeaderCartButton