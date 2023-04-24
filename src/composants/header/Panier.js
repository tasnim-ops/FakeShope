import React, { useEffect, useState } from 'react'
import CartItems from './CartItems';

import { useSelector } from 'react-redux';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import './CartItems.css'
import { useDispatch } from 'react-redux';
import { clearPanier, getTotals } from '../../redux/cartSlice';
const Panier = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state)=>state.storeCart)
    const [cardOpen,setCardOpen]=useState(false);
    const closeCard =()=>{
        setCardOpen(null)
    }
    const handelClear=()=>{
      dispatch (clearPanier())
      setCardOpen(false)
    }
    useEffect(()=>{
    dispatch(getTotals())
    },[cartItems,dispatch])
    const {cartTotalAmount}= useSelector((state)=>state.storeCart);
    const {cartTotalQuantity}= useSelector((state)=>state.storeCart);

  return (
    <div className='containercart'>
      <h2>Shopping card</h2>
        {cartTotalQuantity ===0 ?(
          <h2>Your cart is currently empty</h2>
        ):(
          <>
            <div className={cardOpen ? "overlay": "nonoverlay"}>  </div> 
            <div className={cardOpen ? "cartItem": "cardhide"}>  </div>
            <div className='title flex'>
              <div >            
                <ClearAllIcon  className='clear' onClick={ ()=>handelClear() }  />
              </div>
              {cartItems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>
            <div>
                <div className="my-box-text">Price To Checkout</div>
                <div className="my-box-result"> | {cartTotalAmount} $</div>
              </div>
          </>
        )}
  </div>
  )
} 
export default Panier 
