import { Box, styled } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'


const Container=styled(Box)``

const Wrapper=styled(Box)`
    padding:20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#111111;
    
`

const Heading=styled(Box)`
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    font-size: 36px;
`

const TextWrapper=styled(Box)`
    display: flex;
    margin: 5px 0px;
    font-size: 18px;
`

const Quantity=styled(Box)``

const Price=styled(Box)`
    margin-left: 10px;
`

const OrderWrapper=styled(Box)(({theme})=>({
    backgroundColor: "#111111",
    color:"#ffffff",
    margin: "30px 0px",
    padding:"110px 0px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))
   


const OrderText=styled(Box)`
    padding: 0px 20px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    font-size: 50px;
`

const OrderInfo=styled(Box)`
    font-size: 20px;
    margin: 50px 20px;
`

const OrderId=styled(Box)``

const OrderDate=styled(Box)`
    margin: 10px 0px;
`


const Success = () => {
    const location=useLocation();
    const data=location.state.data;
    const cartData=location.state.products;
    const id=location.state.id;
    const date=location.state.date;
    const shippingCharges=location.state.shipping;
    const price=(cartData.total+shippingCharges);

    console.log(data);
    console.log(cartData);
  return (
   <>
        <Container>
            <Wrapper>
                <Heading>THANK YOU!</Heading>
                <TextWrapper>
                    {cartData.quantity===1?<Quantity>{cartData.quantity} Item</Quantity>:<Quantity>{cartData.quantity} Items</Quantity>}
                    <Price>₹ {price}</Price>
                </TextWrapper>
                <OrderWrapper>
                    <OrderText>YOUR ORDER WAS PLACED SUCCESSFULLY</OrderText>
                </OrderWrapper>
                <OrderInfo>
                    <OrderId>Your Order: {id}</OrderId>
                    <OrderDate>Order Date: {date}</OrderDate>
                </OrderInfo>
            </Wrapper>
        </Container>
   </>
  )
}

export default Success