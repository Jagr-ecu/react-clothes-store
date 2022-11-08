import { Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import Spinner from './components/spinner/Spinner';
import { checkUserSession } from './store/user/UserAction';

//CODE SPLITTING
//will not render these until it actually fetches when it's required
const Home = lazy(() => import('./routes/home/Home'));
const Navigation = lazy(() => import('./navigation/Navigation'));
const Authentication = lazy(() => import('./routes/authentication/Authentication'));
const Shop = lazy(() => import('./routes/shop/Shop'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, []);//opcional: se pone dispatch para que no de advertencia porque dispatch no va a cambiar

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path='shop/*' element={<Shop />}/>
          <Route path='auth' element={<Authentication />}/>
          <Route path='checkout' element={<Checkout />}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
