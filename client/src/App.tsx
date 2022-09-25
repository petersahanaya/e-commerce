import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Register from './pages/register/register';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register title='Register'/>}/>
        <Route path='/login' element={<Register title='Login'/>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
