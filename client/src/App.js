import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
// import CartContext from './store/cart-context';
import Context from './store/Context';
function App() {
  const [visible,setVisible]=useState(false)
  const showCart=()=>{
    setVisible(true)
  }
  const hideCart=()=>{
    setVisible(false)
  }
  return (
    <Context>
    {visible&&<Cart hideCart={hideCart}/>}
      <Header showCart={showCart}/>
      <main>
        <Meals/>
      </main>
    </Context>
  );
}

export default App;
