import React from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'
// import Card from './Card'
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.hideCart}/>
}
const ModalOverlay=(props)=>{
  return(
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  )
}
const Modal = (props) => {
  return (
    <>
    {ReactDom.createPortal(<Backdrop hideCart={props.hideCart}/>,document.getElementById("overlay"))}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("overlay"))}
    </>
  )
}

export default Modal