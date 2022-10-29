import { useDispatch, useSelector } from 'react-redux'

import { selectCartCount, selectIsCartOpen } from '../../store/cart/CartSelector'
import { setIsCartOpen } from '../../store/cart/CartAction'

import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIconStyles.jsx'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
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