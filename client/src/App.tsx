import { Route, Routes } from 'react-router-dom';
import Search from './component/search';
import Cart from './pages/cart/cart';
import DetailProduct from './pages/detail/detailProduct';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Register from './pages/register/register';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register title='Register'/>}/>
        <Route path='/login' element={<Register title='Login'/>}/>
        <Route path='/product/:title/:id' element={<DetailProduct />}/>
        <Route path='/product/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes> 
    </div>
  )
}

export default App
