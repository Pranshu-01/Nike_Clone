import { Box, ImageList, ImageListItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Container=styled(Box)`
     margin-bottom:8%;
`

const Wrapper=styled(Container)(({theme})=>({
    /* min-width: 500px; */
    /* max-width:500px; */
    /* height: 760px; */
    // margin: "8px 15px 8px 0px",
    margin:"8px 8px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down('lg')]:{
        margin: "8px 10px 8px 0px",
    },
    [theme.breakpoints.down('md')]:{
        margin: "8px 0px",
    }
}))
    


const Image=styled('img')(({theme})=>({
    width:"100%",
    height:"32vw",
    objectFit:"cover",
    [theme.breakpoints.down('md')]:{
        height:"60vh"
    }
}))
    


const Info=styled(Box)`
    width: 100%;
    margin-top: 10px;
    color:#111;
    font-weight: 500;
`

const Heading=styled(Box)`
    margin-top: 10px;
    font-size: 15.8px;
    /* color:#b24400; */
    color:#b04400;
`


const Title=styled(Box)`
    margin-top: 10px;
    font-size: 17px;
`

const Tagline=styled(Box)`
    color:#696969;
    font-size: 15.8px;
    margin-top: 8px;
`

const Color=styled(Box)`
    color:#696969;
    margin-top: 8px;
    font-size: 15.8px;
`
const Price=styled(Box)`
    font-size: 17px;
    margin-top: 16px;
`



const MRPWrapper=styled(Box)`
    display: flex;
    margin-top: 16px;
    font-size: 17px;
    align-items: center;
`

const DisPrice=styled(Box)`
    font-size: 17px;
`

const MRP=styled(Box)`
    margin-left: 5px;
    color:#696969;
`

const ProductCat = ({item}) => {
   
  return (
    <>
        <Container>
            <Link to={`/product/${item._id}`} style={{textDecoration:"none"}}>
            <Wrapper>
                <Image src={item.img.color1[0]} alt="" />  
            <Info>
                {
                    item.heading && (
                    <Heading>{item.heading}</Heading>
                    )
                }
                <Title>{item.title}</Title>
                <Tagline>{item.tagline}</Tagline>
                <Color>{item.color.length + "  Colour"}</Color>
                {item.mrp?
                <MRPWrapper>
                    <DisPrice>₹ {item.price}</DisPrice>
                    <MRP>MRP : ₹ {item.mrp}</MRP>
                </MRPWrapper>
                :
                <Price>MRP : ₹ {item.price}</Price>}
            </Info>
            
            </Wrapper>
            </Link>
        </Container>
    </>
  )
}

export default ProductCat