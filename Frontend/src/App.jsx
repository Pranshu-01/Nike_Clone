import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Success from './pages/Success'
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from './components/ProductList'
// import SingleProduct from './components/SingleProduct'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { publicRequest } from './requestMethods'
import { addUserCart } from './redux/features/cartRedux'
import Fav from './pages/Fav'
import { addUserFav } from './redux/features/favRedux'
import { getUserCartRequest, getUserFavRequest, updateUserCartRequest, updateUserFavRequest } from './services/api'

function App() {

  const user=useSelector((state)=>state.user.currentUser);

  const cart=useSelector((state)=>state.cart);

  const fav=useSelector((state)=>state.fav);

  const dispatch=useDispatch();

  

// -------------------------------------------
useEffect(()=>{
  if(user){
    updateUserFav();
  }
},[fav]);


const updateUserFav=async()=>{
  const data={
    userId:user._id,
    products:fav.products,
  }
  // const res=await publicRequest.post('/fav/',data);
  await updateUserFavRequest(data);
  // console.log(res);
}
 
useEffect(()=>{
  if(user){
    getUserFav();
  }
},[user]);

const getUserFav=async()=>{
  // const res=await publicRequest.get(`/fav/find/${user._id}`);
  const res=await getUserFavRequest(user._id);
  console.log(res.data);

  res.data.products.map((item)=>(
    dispatch(addUserFav(item))
  ))
}

// -------------------------------------------
useEffect(()=>{
  if(user){
    updateUserCart();
  }
},[cart]);


const updateUserCart=async()=>{
  const data={
    userId:user._id,
    products:cart.products,
  }
  // const res=await publicRequest.post('/fav/',data);
  await updateUserCartRequest(data);
  // console.log(res);
}

useEffect(()=>{
  if(user){
    getUserCart();
  }
},[user]);

const getUserCart=async()=>{
  // const res=await publicRequest.get(`/fav/find/${user._id}`);
  const res=await getUserCartRequest(user._id);
  console.log(res.data);

  res.data.products.map((item)=>(
    dispatch(addUserCart(item))
  ))
}
 

// -------------------

// useEffect(()=>{
//   if(user){
//     updateUserCart();
//   }
// },[cart]);


// const updateUserCart=async()=>{
//   const data={
//     userId:user._id,
//     products:fav.products,
//   }
//   const res=await publicRequest.post('/cart/',data);
//   console.log(res);
// }
 
// useEffect(()=>{
//   if(user){
//     getUserCart();
//   }
// },[user]);

// const getUserCart=async()=>{
//   const res=await publicRequest.get(`/cart/find/${user._id}`);
//   console.log(res.data);

//   res.data.products.map((item)=>(
//     dispatch(addUserCart(item))
//   ))
// }

  return (
   <>
      <BrowserRouter>
        <TopNavbar/>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={user? <Navigate to="/"/> : <Login/>} />
            <Route path="/products/:category" element={<ProductList/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/favourites" element={user? <Fav/> : <Navigate to="/login"/>}/>
            <Route path="/success" element={<Success/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
   </>
  )
}

export default App
