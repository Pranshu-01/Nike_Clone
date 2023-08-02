import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Box, styled } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getProducts } from '../../services/api';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };

 

const Container=styled(Box)(({theme})=>({
  padding:"40px 50px",
  [theme.breakpoints.down('md')]:{
    padding:"50px 20px"
  }
}))



const Heading=styled(Box)(({theme})=>({
  fontSize: "24px",
  marginTop: "30px",
  display: "flex",
  padding: "0px 50px",
  [theme.breakpoints.down('md')]:{
  padding: "0px 20px",
  }
}))
    


const Products = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    getAllProducts();
  },[]);

  const getAllProducts=async()=>{
    const response=await getProducts();
    setProducts(response.data);
  }


  return (
    <>
        <Heading>Always Iconic</Heading>
        <Container>
        
        <Carousel responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            {
              products.slice(0,6).map((item)=>{
                return (
                  <>
                    <Product item={item} key={item._id}/>
                  </>
                )
              })
            }
        </Carousel>

        </Container>
    </>
  )
}

export default Products