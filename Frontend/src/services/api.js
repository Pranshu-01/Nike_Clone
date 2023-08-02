import axios from 'axios'
import { publicRequest } from '../requestMethods';
import { loginFailure, loginStart, loginSuccess } from '../redux/features/userRedux';
import { useSelector } from 'react-redux';

// const URL="http://localhost:8080/api";

export const register=async(data)=>{
    try{
        // return axios.post(`${URL}/auth/register`,data)
        return publicRequest.post("/auth/register",data);
    }
    catch(err){
        console.log(`Error while calling register api`,err);
    }
}

export const login=async(dispatch,user)=>{
    dispatch(loginStart());

    try{
        const response=await publicRequest.post("/auth/login",user);
        console.log(response);
        dispatch(loginSuccess(response.data));
    }
    catch(err){
        dispatch(loginFailure());
    }
}

export const getProducts=async(req,res)=>{
    try{
        return await publicRequest.get('/products');
    }
    catch(err){
        console.log('Error while calling getProducts Api',err);
    }
}

export const getProductsByCategory=async(category)=>{
    try{
        return await publicRequest.get(`/products?category=${category}`);
    }
    catch(err){
        console.log('Error while calling getProductsByCategory Api',err);
    }
}

export const getProductById=async(id)=>{
    try{
        return await publicRequest.get(`/products/find/${id}`);
    }
    catch(err){
        console.log('Error while calling getProductsById Api',err);
    }
}

export const updateUserFavRequest=async(data)=>{
    try{
        return await publicRequest.post('/fav/',data);
    }
    catch(err){
        console.log('Error while calling updateUserFavRequest Api',err);
    }
}

export const getUserFavRequest=async(id)=>{
    try{
        return await publicRequest.get(`/fav/find/${id}`);
    }
    catch(err){
        console.log('Error while calling updateUserFavRequest Api',err);
    }
}

export const updateUserCartRequest=async(data)=>{
    try{
        return await publicRequest.post('/cart/',data);
    }
    catch(err){
        console.log('Error while calling updateUserCartRequest Api',err);
    }
}

export const getUserCartRequest=async(id)=>{
    try{
        return await publicRequest.get(`/cart/find/${id}`);
    }
    catch(err){
        console.log('Error while calling updateUserCartRequest Api',err);
    }
}







   