import React, { useEffect, useState } from 'react'
import Product from '../components/home/Product'
import { Box, styled } from '@mui/material'
import 'react-multi-carousel/lib/styles.css';
import { getProducts, getProductsByCategory } from '../services/api';
import ProductCat from './ProductCat';
import { Link } from 'react-router-dom';


const Container=styled(Box)(({theme})=>({
  padding:"20px 0px",
  display:"grid",
  gridTemplateColumns: "repeat(3,1fr)",
  [theme.breakpoints.down('lg')]:{
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [theme.breakpoints.down('md')]:{
    gridTemplateColumns: "repeat(1,1fr)",
  },
  
}))
    // padding:40px 0px;
    // display: grid;
    // grid-template-columns: repeat(3,1fr);
    // /* display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between; */


const ProductsCat = ({category,filters,sort,open}) => {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  // console.log(filters);


  useEffect(()=>{
    getAllProducts();
  },[category]);

  const getAllProducts=async()=>{
    try{
      const response=await getProductsByCategory(category);
      setProducts(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
        <Container>
            {(
              filteredProducts.map((item)=>{
                return (
                  <>
                    <ProductCat item={item} key={item._id} open={open}/>
                  </>
                )
              }))
            }
        </Container>
    </>
  )
}

export default ProductsCat