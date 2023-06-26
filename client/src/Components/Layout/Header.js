import React from 'react'
import mealImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h2>Foody</h2>
            <HeaderCartButton showCart={props.showCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="#"/>
        </div>
    </>
  )
}

export default Header