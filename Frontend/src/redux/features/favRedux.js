import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const favSlice=createSlice({
    name:"fav",
    initialState:{
        products:[],
        unSetProducts:[]
    },
    reducers:{
        addFavProducts:(state,action)=>{
            let find=state.products.findIndex((item)=>item.product.title===action.payload.product.title && item.size===action.payload.size && item.color===action.payload.color);
            if(find>=0){

            }
            else{
                state.products.push(action.payload);
            }
        },
        removeFavProduct:(state,action)=>{
            let find=state.products.find((item)=>item.product._id===action.payload.product._id && item.size===action.payload.size && item.color===action.payload.color);
            state.products=state.products.filter((item)=>find!==item);
        },
        editFavProducts:(state,action)=>{
            state.unSetProducts.push(action.payload);
        },
        removeEditedProducts:(state,action)=>{
            let find=state.unSetProducts.find((item)=>item.product._id===action.payload.product._id && item.size===action.payload.size && item.color===action.payload.color);
            state.unSetProducts=state.unSetProducts.filter((item)=>find!=item);
        },
        removeNotFavProducts:(state)=>{
            // let find=state.products.filter((item)=>(
            //     state.unSetProducts.map((val)=>val.product._id!=item.product._id)
            // ))

            let find;
            state.unSetProducts.map((item)=>(
                state.unSetProducts=state.unSetProducts.filter(val=>!(val.product._id===item.product._id && val.size===item.size && val.color===item.color)),
                state.products=state.products.filter(val=>!(val.product._id===item.product._id && val.size===item.size && val.color===item.color))
                // state.products=state.products.filter((val=>(val.product._id!==item.product._id)).filter(val=>(val.size!=item.size)).filter(val=>(val.color!=item.color))),  
           ))
        },
        addUserFav:(state,action)=>{
            let find=state.products.findIndex((item)=>item.product.title===action.payload.product.title && item.size===action.payload.size && item.color===action.payload.color);
            if(find>=0){
                
            }
            else{
                state.products.push(action.payload);
            }
        },
        logoutFavUser:(state)=>{
            state.products=[];
        }
    }
})

export const {addFavProducts,removeFavProduct,editFavProducts,removeEditedProducts,removeNotFavProducts,addUserFav,logoutFavUser}=favSlice.actions;
export default favSlice.reducer;