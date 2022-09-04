import { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIconStyles.jsx'

const CartIcon = () => {
  const { isCartOpen ,setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }


  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon"/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
// <ShoppingIcon className="shopping-icon"/>