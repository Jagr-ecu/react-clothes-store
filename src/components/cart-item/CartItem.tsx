import { CartItem as Item } from '../../store/cart/CartTypes'
import './cartItem.scss'

interface CartItemsProps {
  cartItem: Item
}

const CartItem = ({ cartItem }: CartItemsProps) => {
    const { name, quantity, imageUrl, price } = cartItem
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{ name }</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem