import React from 'react'
import './Cards.css'
function Card(props) {
    let classes="cards "+props.className;
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Card