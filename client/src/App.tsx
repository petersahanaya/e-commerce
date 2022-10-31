import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Search = lazy(() => import('./component/search'))
const Cart  = lazy (() =>  import('./pages/cart/cart'))
const DetailProduct = lazy(() => import('./pages/detail/detailProduct'))
const Home = lazy(() => import('./pages/home/home'))
const Profile = lazy(() => import('./pages/profile/profile'))
const Register = lazy(() => import('./pages/register/register'))
const Success = lazy(() => import('./pages/success/success'));
const Loading = lazy(() => import('./component/Loading'))

const App = () => {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register title='Register'/>}/>
        <Route path='/login' element={<Register title='Login'/>}/>
        <Route path='/product/:title/:id' element={<DetailProduct />}/>
        <Route path='/product/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes> 
    </Suspense>
    </>
  )
}

export default App
