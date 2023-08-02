import { Box, styled } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'


const Container=styled(Box)`
`

const Wrapper=styled(Box)(({theme})=>({
    padding: "50px 50px",
    [theme.breakpoints.down('md')]:{
        padding:"50px 20px"
    }
}))

const Heading=styled(Box)`
    font-size: 24px;
    margin-bottom: 40px;
`

const Component=styled(Box)`
    position: relative;
`

const Image=styled('img')(({theme})=>({
    width:"100%",
    height:"100%",
    [theme.breakpoints.down('sm')]:{
        height:"55vh",
        objectFit:"cover"
    }
}))



const TextWrapper=styled(Box)(({theme})=>({
    position:'absolute',
    bottom:'70px',
    left:'40px',
    color:'white',
    [theme.breakpoints.down('md')]:{
        position:'relative',
        color:'#111111',
        left:"0px",
        bottom:"0px",
        top:"20px"
    }
}))
    
const Text1=styled(Box)(({theme})=>({
    color:"#ffffff",
    fontWeight:"500",
    fontSize:"16px",
    [theme.breakpoints.down('md')]:{
        color:'#111111'
    }
}))


const TextHeader=styled('h1')(({theme})=>({
    color:"#ffffff",
    fontSize:"4.2rem",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    letterSpacing:"2px",
    fontWeight:"600",
    [theme.breakpoints.down('md')]:{
        fontSize:"3rem",
        color:"#111111"
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:"2rem",
        lineHeight:"1"
    },
}))

const Text2Wrapper=styled(Box)`
    display: flex;
    flex:1;
`

const Text2=styled(Box)(({theme})=>({
    marginTop: "20px",
    color:"#ffffff",
    fontWeight: "500",
    fontSize: "16px",
    width: "24vw",
    [theme.breakpoints.down('md')]:{
        color:"#111111",
        width: "60vw",
        fontSize:"18px",
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:"15px"
    },
}))
   
const TextButton=styled('button')(({theme})=>({
    backgroundColor: "#ffffff",
    fontSize: "16px",
    border:"none",
    borderRadius: "50px",
    padding: "10px 22px",
    marginTop: "30px",
    color:'#111',
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
    [theme.breakpoints.down('md')]:{
        marginTop: "15px",
        backgroundColor:"#111111",
        color:"#fff",
        fontSize:"14px"
    }
}))

const Banner2 = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Heading>Featured</Heading>
                <Component>
                    <Link to="/products/Tennis Shoe">
                        <Image src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0f3b3f02-75b2-4d2e-912d-b6e7d94527bb/nike-just-do-it.png" alt="" />
                    </Link>
                <TextWrapper>
                    <Text1>Nike Killshot 2 Leather</Text1>
                    <TextHeader>ALWAYS ICONIC</TextHeader>
                    <Text2Wrapper>
                        <Text2>Blending court side attitude with a modern touch for your everyday style.</Text2>
                    </Text2Wrapper>
                    <Link to="/products/Tennis Shoe" style={{textDecoration:"none",color:"inherit"}}>
                        <TextButton>Shop</TextButton>
                    </Link>
                </TextWrapper>
                </Component>
            </Wrapper>
        </Container>
    </>
  )
}

export default Banner2