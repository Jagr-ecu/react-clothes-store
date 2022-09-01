import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as ShopLogo } from "../assets/crown.svg";
import { UserContext } from "../context/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async() => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <Fragment>
      {/**Fragment sirve en caso de que queramos encerrar todo el componente y no crear un nuevo elemento */}
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SALIR
            </span>
          ) : (
            <Link className="nav-link" to="/sing-in">
              INICIAR SESIÓN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
