import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { BsCart2 } from 'react-icons/bs'
import{ AiOutlineUser} from 'react-icons/ai'
import {GrFavorite} from 'react-icons/gr'
import { Container } from './Common/CommonStyles'
import { NavLinks } from './Navbar/NavLinks'
const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { totalItems } = useCartContext()
  return (
  
      <Container  justifyContent='center' gap ="30px">
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
     
        <span className='cart-container'>
          <GrFavorite/>
        
        </span>
      </Link>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
     
     <span className='cart-container'>
     <CartItems>{totalItems}</CartItems>
     <BsCart2  color='black'/>
    
     </span>
   </Link>
   <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
     
     <span className='cart-container'>
     <AiOutlineUser color='black' />
      
     </span>
   </Link>
   </Container>


  )
}

const CartItems = styled.span`


background: red;
width: 12px;
height: 12px;
display: flex;
margin-top:-16px;
align-items: center;
justify-content: center;
border-radius: 50%;
font-size: 0.75rem;
color: var(--clr-white);
padding: 8px;

`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: red;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
