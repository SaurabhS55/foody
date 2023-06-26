import React, { useReducer} from 'react'
import CartContext from './cart-context'
const defaultState={item:[],totalAmount:0}
const reducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedAmount=state.totalAmount+action.ele.price*action.ele.amount
        let updatedItems;
        let existingItemIndex=state.item.findIndex(e=>e.id===action.ele.id);
        let existingItem=state.item[existingItemIndex]
        if(existingItem){
            let updatedItem={
                ...existingItem,
                amount:existingItem.amount + action.ele.amount,
            }
            updatedItems=[
                ...state.item
            ]
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            updatedItems=state.item.concat(action.ele)
        }
        return {
            item:updatedItems,
            totalAmount:updatedAmount
        }
    }
    else if(action.type==="REMOVE"){
        let i
        let existingItemIndex=state.item.findIndex(e=>e.id===action.id)
        let existingItem=state.item[existingItemIndex]
        let price=state.totalAmount-existingItem.price
        if(existingItem.amount===1){
            i=state.item.filter(ele=>ele.id!==action.id)
        }
        else{
            let updatedItem={
                ...existingItem,
                amount:existingItem.amount-1
            }
            i=[
                ...state.item
            ]
            i[existingItemIndex]=updatedItem
        }
      
        return {
            item:i,
            totalAmount:price
        }
    }
    else{
        return defaultState;
    }
}
function Context(props) {
    const [cartState,dispatchCartState]=useReducer(reducer,defaultState);
    const addItemHandler=(item)=>{
        dispatchCartState({type:"ADD",ele:item})
    }
    const removeItemHandler=(id)=>{
        dispatchCartState({type:"REMOVE",id:id})
    }
    const clearCartHandler=()=>{
        dispatchCartState({type:"CLEAR"})
    }
    const cartProvider={
        item:cartState.item,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        clearCart:clearCartHandler
    }
    
  return (
    <CartContext.Provider value={cartProvider}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context