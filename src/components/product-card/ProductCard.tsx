import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/CartAction";
import { selectCartItems } from "../../store/cart/CartSelector";
import { CategoryItem } from "../../store/categories/CategoriesTypes";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

import "./productCard.scss";

interface ProductCardProps  {
  product: CategoryItem
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems)

  const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Añadir
      </Button>
    </div>
  );
};

export default ProductCard;
