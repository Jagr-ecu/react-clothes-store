import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { checkUserSession } from './store/user/UserAction';
import Navigation from './navigation/Navigation';
import Home from './routes/home/Home';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, []);//opcional: se pone dispatch para que no de advertencia porque dispatch no va a cambiar

  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home />}/>
      <Route path='shop/*' element={<Shop />}/>
      <Route path='auth' element={<Authentication />}/>
      <Route path='checkout' element={<Checkout />}/>
    </Route>
    </Routes>
  )
}

export default App;
