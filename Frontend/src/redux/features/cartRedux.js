import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            let find=state.products.findIndex((item)=>item.product.title===action.payload.product.title && item.size===action.payload.size && item.color===action.payload.color);
            

            if(find>=0){
                state.products[find].quantity+=1;
            }
            else{
                state.products.push(action.payload);
            }
            state.total+=parseInt(action.payload.product.price*action.payload.quantity);

        },
        removeProduct:(state,action)=>{
            state.quantity-=action.payload.quantity;
            state.total-=action.payload.product.price*action.payload.quantity;

            let find=state.products.find((item)=>item.product._id===action.payload.product._id && item.size===action.payload.size && item.color===action.payload.color);
            
            state.products=state.products.filter((item)=>find!==item);
        },
        changeQuantity:(state,action)=>{
            let find=state.products.findIndex((item)=>item.product._id===action.payload.item.product._id && item.size===action.payload.item.size && item.color===action.payload.item.color);

            let prevQuantity=state.products[find].quantity;

            state.products[find].quantity=action.payload.updatedQuantity;

            state.quantity-=(prevQuantity);

            state.quantity+=parseInt(action.payload.updatedQuantity);

            state.total-=parseInt(action.payload.item.product.price*prevQuantity);
            state.total+=parseInt(action.payload.item.product.price*action.payload.updatedQuantity);
        },
        changeSize:(state,action)=>{
            let find=state.products.findIndex((item)=>item.product._id===action.payload.item.product._id && item.size===action.payload.item.size && item.color===action.payload.item.color);
            state.products[find].size=action.payload.updatedSize;
        },
        addUserCart:(state,action)=>{
            // console.log(action.payload);
            // let find=state.products.findIndex((item)=>item.product.title===action.payload.item.product.title && item.size===action.payload.item.size && item.color===action.payload.item.color);
            // if(find>=0){
                
            // }
            // else{
            //     state.products.push(action.payload.item);
            //     state.quantity+=parseInt(action.payload.item.quantity);
            //     state.total+=parseInt(action.payload.item.product.price*action.payload.item.quantity);
            // }

            let find=state.products.findIndex((item)=>item.product.title===action.payload.product.title && item.size===action.payload.size && item.color===action.payload.color);
            if(find>=0){
                
            }
            else{
                state.products.push(action.payload);
                state.quantity+=parseInt(action.payload.quantity);
                state.total+=parseInt(action.payload.product.price*action.payload.quantity);
            }
           
        },
        logoutUser:(state)=>{
            state.products=[],
            state.quantity=0,
            state.total=0
        }
    }
})


export const {addProduct,removeProduct,changeQuantity,changeSize,addUserCart,logoutUser}=cartSlice.actions;
export default cartSlice.reducer;