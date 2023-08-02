import {Box,Button,Typography,styled } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Container=styled(Box)`
`

const Wrapper=styled(Box)(({theme})=>({
    padding: "0px 50px",
    [theme.breakpoints.down('md')]:{
        padding:"0px 20px"
    }
}))


const Top=styled(Box)`

`

const Image=styled('img')(({theme})=>({
    width:"100%",
    height:"100%",
    [theme.breakpoints.down('sm')]:{
        height:"55vh",
        objectFit:"cover"
    }
}))

const Bottom=styled(Box)`
    padding-top: 40px;
    padding-bottom: 20px;
`
    
const BottomWrapper=styled(Box)(({theme})=>({
    display: "flex",
    flex:"1",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down('lg')]:{
        justifyContent:"start",
        alignItems:"start"
    }
}))

const BottomHeading=styled('h1')(({theme})=>({
    color:"#111111",
    fontSize:"4.5rem",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    fontWeight:"600",
    letterSpacing:"2px",
    [theme.breakpoints.down('md')]:{
        fontSize:"3rem"
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:"2rem",
        lineHeight:"1"
    },
}))


const BottomText=styled(Box)(({theme})=>({
    display:'flex',
    color:"#111111",
    marginTop: "12px",
    fontSize: "16px",
    fontWeight: "500",
    [theme.breakpoints.down('md')]:{
        fontSize:"18px"
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:"15px"
    },
}))
    


const BottomButton=styled('button')(({theme})=>({
    background: "#111111",
    fontSize: "16px",
    border:"none",
    borderRadius: "50px",
    padding: "10px 22px",
    marginTop: "30px",
    color:'white',
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
    [theme.breakpoints.down('md')]:{
        marginTop: "15px",
        fontSize:"14px"
    }
}))






const Banners = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Top>
                    <Link to="/products/Phantom Luna">
                        <Image src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/e74e2140-ed98-4773-b0b4-0da67406419e/nike-just-do-it.jpg" alt="phantom_luna" />
                    </Link>
                </Top>
                <Bottom>
                    <BottomWrapper>
                        <BottomHeading>INTRODUCING PHANTOM LUNA</BottomHeading>
                        <BottomText>A boot that changes football for athletes changing everything.</BottomText>
                        <Link to="/products/Phantom Luna" style={{textDecoration:"none",color:"inherit"}}>
                            <BottomButton variant='contained'>Shop</BottomButton>
                        </Link>
                    </BottomWrapper>
                </Bottom>
            </Wrapper>
        </Container>
    </>
  )
}

export default Banners