import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import Footer from "./component/footer/Footer"
import Home from "./component/home/Home"
import Signup from "./component/signup/Signup"
import Create from "./component/create/Create"
import Login from "./component/login/Login"
import FoodDetails from "./component/foodDetails/FoodDetails"
import FoodCatelog from "./component/foodCatelog/FoodCatelog"
import Cart from "./component/cart/Cart"
import Checkout from "./component/checkout/Checkout"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const location = useLocation();

  useEffect(()=> {
    window.scrollTo(0,0);
  },[location.pathname])
  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path='/'  element={<Home/>}/> 
          <Route path='/login'  element={<Login/>}/>
          <Route path='/signup'  element={<Signup/>}/>
          <Route path='/create'  element={<Create/>}/>
          <Route path='/food/:id'  element={<FoodDetails/>}/>
          <Route path='/foods/:id'  element={<FoodCatelog/>}/>
          <Route path='/cart'  element={<Cart/>}/>
          <Route path='/checkout'  element={<Checkout/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
