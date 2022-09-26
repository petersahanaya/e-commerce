import { Route, Routes } from 'react-router-dom';
import DetailProduct from './pages/detail/detailProduct';
import Home from './pages/home/home';
import Register from './pages/register/register';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register title='Register'/>}/>
        <Route path='/login' element={<Register title='Login'/>}/>
        <Route path='/product/:title/:id' element={<DetailProduct />}/>
      </Routes>
    </div>
  )
}

export default App
