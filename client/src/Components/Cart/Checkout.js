import classes from './Checkout.module.css';
import { useRef,useState } from 'react';
const Checkout = (props) => {
    const [formInputValidity,setFormInputValidity]=useState({
        nameValidity:true,
        streetValidity:true,
        postalValidity:true,
        cityValidity:true
    })
    const isEmpty=(value)=>value.trim()===""
    const isFiveChars=(value)=>value.trim().length===5
    const nameRef=useRef()
    const streetRef=useRef()
    const postalRef=useRef()
    const cityRef=useRef()
let formIsValid=false
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameRef.current.value
    const enteredStreet=streetRef.current.value
    const enteredPostal=postalRef.current.value
    const enteredCity=cityRef.current.value
    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredPostalIsValid=isFiveChars(enteredPostal)
    const enteredCityIsValid=!isEmpty(enteredCity)
    setFormInputValidity({
        nameValidity:enteredNameIsValid,
        streetValidity:enteredStreetIsValid,
        postalValidity:enteredPostalIsValid,
        cityValidity:enteredCityIsValid
    })
    formIsValid=enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid
    if(!formIsValid){
        return
    }
    props.onSubmit({
        name:enteredName,
        street:enteredStreet,
        postal:enteredPostal,
        city:enteredCity
    })
    // props.onSubmit()
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.nameValidity?"":classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formInputValidity.nameValidity && <p>Please enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.streetValidity?"":classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formInputValidity.streetValidity && <p>Please enter a valid street</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.postalValidity?"":classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
        {!formInputValidity.postalValidity && <p>Please enter a valid postal code</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.cityValidity?"":classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formInputValidity.cityValidity && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        {!formIsValid&&<button className={classes.submit}>Confirm</button>}
      </div>
    </form>
  );
};

export default Checkout;