import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Container=styled(Box)`
    margin: 0px 15px 0px 0px;
`

const Wrapper=styled(Box)``

const Image=styled('img')(({theme})=>({
   width:"100%",
   height:"32vw",
   borderRadius:"2px",
   objectFit:"cover",
   [theme.breakpoints.down('lg')]:{
      height:"40vw",
   },
   [theme.breakpoints.down('md')]:{
      height:"40vw",
   }
}))
   
const Info=styled(Box)`
    width: 100%;
    margin-top: 10px;
    color:#111;
    font-weight: 500;
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


const Price=styled(Box)`
    font-size: 17px;
    margin-top: 15px;
`


const SuggestionProducts = ({item}) => {
  return (
   <>
   <Link to={`/product/${item._id}`} style={{textDecoration:"none",color:"inherit"}}>
      <Container>
        <Wrapper>
         <Image src={item.img.color1[0]} alt="" />
         <Info>
               
                <Title>{item.title}</Title>
                <Tagline>{item.tagline}</Tagline>
                <Price>MRP : ₹ {item.price}</Price>
            </Info>
         </Wrapper>
      </Container>
    </Link>
   </>
  )
}

export default SuggestionProducts