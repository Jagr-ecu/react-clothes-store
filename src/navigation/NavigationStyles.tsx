import styled from 'styled-components'
import { Link } from 'react-router-dom';

//opcion alternativa para que los nombres de css no se sobrescriban
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
    margin-top: 10px;
  }
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 130%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;

  @media screen and (max-width: 800px) {
    margin-right: 0px;
    width: 80%;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`