import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './cartDropdown.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext) 

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item}/>
                )
            }
        </div>
        <Button>Ir al Carrito</Button>
    </div>
  )
}

export default CartDropdown