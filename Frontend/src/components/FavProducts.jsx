import React from 'react'
import FavProduct from './FavProduct'
import { useSelector } from 'react-redux'
import { Box,styled } from '@mui/material'

const Container=styled(Box)(({theme})=>({
    padding:"50px 0px 10px 0px",
    display:"grid",
    gridTemplateColumns: "repeat(3,1fr)",
    [theme.breakpoints.down('lg')]:{
      gridTemplateColumns: "repeat(2,1fr)",
    },
    [theme.breakpoints.down('md')]:{
      gridTemplateColumns: "repeat(1,1fr)",
    },
    
  }))

  

const FavProducts = ({edit}) => {

    const products=useSelector((state)=>state.fav.products);
    
    // console.log(products);
  return (
    <>
        <Container>
            {(
              products.map((item)=>{
                return (
                  <>
                    <FavProduct item={item} edit={edit} key={item._id}/>
                  </>
                )
              }))
            }
        </Container>
    </>
  )
}

export default FavProducts