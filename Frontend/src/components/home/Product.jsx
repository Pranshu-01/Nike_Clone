import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Container=styled(Box)`
    margin: 0px 0px 0px 15px;
`

const Image=styled('img')(({theme})=>({
   margin:"0px 220px",
   width:"100%",
   height:"22vw",
   objectFit:"cover",
 
   [theme.breakpoints.down('lg')]:{
      margin:"0px 120px",
      height:"auto",
   },
   
   [theme.breakpoints.down('md')]:{
      margin:"0px 50px",
      height:"40vw",
   }
}))
   


const Product = ({item}) => {
  return (
   <>
   <Link to={`/products/${item.categories[0]}`}>
      <Container>
         <Image src={item.img.color1[0]} alt="" />
      </Container>
    </Link>
   </>
  )
}

export default Product