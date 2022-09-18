import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOutUser } from "../utils/firebase/Firebase";
import { selectCurrentUser } from "../store/user/UserSelector";
import { selectIsCartOpen } from "../store/cart/CartSelector";

import { ReactComponent as ShopLogo } from "../assets/crown.svg";
import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from "./NavigationStyles";
import CartIcon from "../components/cart-icon/CartIcon";
import CartDropdown from "../components/cart-dropdown/CartDropdown";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      {/**Fragment sirve en caso de que queramos encerrar todo el componente y no crear un nuevo elemento */}
      <NavigationContainer>
        <LogoContainer to="/">
          <ShopLogo />
        </LogoContainer>
        <NavLinksContainer >
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SALIR
              </NavLink>
            ) : (
              <NavLink to="/auth">
                INICIAR SESIÓN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
