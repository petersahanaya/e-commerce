import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Search = lazy(() => import('./component/search'))
const Cart  = lazy (() =>  import('./pages/cart/cart'))
const DetailProduct = lazy(() => import('./pages/detail/detailProduct'))
const Home = lazy(() => import('./pages/home/home'))
const Profile = lazy(() => import('./pages/profile/profile'))
const Register = lazy(() => import('./pages/register/register'))


const App = () => {
  return (
    <>
    <Suspense fallback={''}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register title='Register'/>}/>
        <Route path='/login' element={<Register title='Login'/>}/>
        <Route path='/product/:title/:id' element={<DetailProduct />}/>
        <Route path='/product/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes> 
    </Suspense>
    </>
  )
}

export default App
