import { Facebook, Instagram, LocationOn, Twitter, YouTube } from '@mui/icons-material'
import { Box,Icon,colors,styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Container=styled(Box)(({theme})=>({
    backgroundColor: "#111111",
    padding: "50px 50px 20px 50px",
    color:"white",
    [theme.breakpoints.down('md')]:{
        padding:"50px 20px 20px 10px"
    }
}))
    

const Wrapper=styled(Box)`
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
`

const Top=styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "space-between",
    flex: "4",
    fontSize: "12px",
    minWidth: "20px",
    [theme.breakpoints.down('sm')]:{
        flex:"1",
        flexDirection:"column"
    }
}))
    


const Left=styled(Box)(({theme})=>({
    display: "flex",
    flex:"3",
    [theme.breakpoints.down('sm')]:{
        flex:"1",
        flexDirection:"column"
    }
}))
    


const Left1=styled(Box)(({theme})=>({
    fontWeight: "600",
    marginRight: "100px",
    [theme.breakpoints.down('md')]:{
        marginRight:"0px"
    }
}))
    

const Left2=styled(Box)(({theme})=>({
    padding:"0px 50px",
    color:"#696969",
   
    [theme.breakpoints.down('sm')]:{
        padding:"30px 0px 0px 0px"
    }
}))
    

const Title=styled(Box)`
    /* font-weight: 600; */
    color:#ffffff;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    
`

const List=styled('ul')({
    padding:"10px 0px",
    listStyle:"none",
    minWidth:"100px"
})

const ListItem=styled('li')({
    listStyle:"none",
    padding:"10px 0px",
    fontSize:"12px",
    fontWeight:"500",
    "&:hover":{
        color:"#ffffff"
    },
})

const ListItemT=styled('li')({
    listStyle:"none",
    padding:"10px 0px",
    color:"#ffffff",
    fontSize:"14px",
    fontWeight: "400",
    fontFamily:"'Bebas Neue', sans-serif",
    letterSpacing: "1px",
    minWidth:"120px",
    

})

const Right=styled(Box)`
    /* flex:1; */
`
const IconWrapper=styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const Icons=styled(Box)(({theme})=>({
    margin: "5px",
    color:"#111111",
    backgroundColor: "#8c8989",
    padding:"5px",
    width: "24px",
    height: "24px",
    borderRadius: "50px",
    textAlign: "center",
    transition:"all 0.2s ease",
    "&:hover":{
        backgroundColor:"#ffffff"
    },
    [theme.breakpoints.down('sm')]:{
        marginRight:"10px"
    }
}))
    


const Bottom=styled(Box)(({theme})=>({
    display: "flex",
    flex:"1",
    alignContent: "center",
    justifyContent: "space-between",
    paddingTop: "40px",
    fontSize: "12px",
    [theme.breakpoints.down('sm')]:{
       flexDirection:"column"
    }
}))

const BottomIconWrapper=styled(Box)(({theme})=>({
    display: "flex",
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column"
    }
}))

   

const BottomIcon=styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
        // flexDirection:"column",
        alignItems:"start",
        justifyContent:"start"
    }
}))
    

const BottomText=styled(Box)(({theme})=>({
    padding: "0px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:"#696969",
    [theme.breakpoints.down('sm')]:{
        alignItems:"start",
        justifyContent:"start",
        padding:"20px 0px"
    }
}))
    
const BottomWrapper=styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]:{
        alignItems:"start",
        justifyContent:"start",
        padding:"10px 0px",
        flexDirection:"column"
    }
}))
   
    
const BottomRight=styled(Box)(({theme})=>({
    display: "flex",
    marginLeft: "20px",
    color:"#696969",
    [theme.breakpoints.down('sm')]:{
        margin:"0px",
        padding:"15px 0px"
    }
}))
   


const Footer = () => {
  return (
    <>
        <Container>
           <Wrapper>
            <Top>
                <Left>
                    <Left1>
                    <Title >FIND A STORE</Title>
                    <List>
                        <Link to="/register" style={{textDecoration:"none",color:"inherit"}}><ListItemT>BECOME A MEMBER</ListItemT></Link>
                        <ListItemT>Send Us Feedback</ListItemT>
                        <ListItemT>STUDENT DISCOUNTS</ListItemT>
                    </List>
                    </Left1>

                    <Left2>
                    <Title>GET HELP</Title>
                    <List>
                        <ListItem>Order Status</ListItem>
                        <ListItem>Delivery</ListItem>
                        <ListItem>Returns</ListItem>
                        <ListItem>Payment Options</ListItem>
                        <ListItem>Contact Us On Nike.com Inquiries</ListItem>
                        <ListItem>Contact Us On All Other Inquiries</ListItem>
                    </List>
                    </Left2>

                    <Left2>
                    <Title>ABOUT NIKE</Title>
                    <List>
                        <ListItem>News</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Investors</ListItem>
                        <ListItem>Sustainability</ListItem>
                    </List>
                    </Left2>
                </Left>
                <Right>
                    <IconWrapper>
                        <a href='https://twitter.com/Nike' target='_blank' style={{color:"inherit",textDecoration:"none"}}><Icons><Twitter/></Icons></a>
                        <a href='https://www.facebook.com/nike' target='_blank' style={{color:"inherit",textDecoration:"none"}}><Icons><Facebook/></Icons></a>
                        <a href='https://www.youtube.com/user/nike' target='_blank' style={{color:"inherit",textDecoration:"none"}}><Icons><YouTube/></Icons></a>
                        <a href='https://instagram.com/nike' target='_blank' style={{color:"inherit",textDecoration:"none"}}><Icons><Instagram/></Icons></a>
                    </IconWrapper>
                </Right>
            </Top>
            <Bottom>
                <BottomIconWrapper>
                    <BottomIcon><LocationOn style={{fontSize:"16px"}}/>&nbsp;&nbsp;India</BottomIcon>
                    <BottomText>© 2023 Nike, Inc. All Rights Reserved</BottomText>
                </BottomIconWrapper>
                <BottomWrapper>
                    <BottomRight>Terms of Sale</BottomRight>
                    <BottomRight>Terms of Use</BottomRight>
                    <BottomRight>Nike Privacy Policy</BottomRight>
                </BottomWrapper>
            </Bottom>
           </Wrapper>
        </Container>
    </>
  )
}

export default Footer