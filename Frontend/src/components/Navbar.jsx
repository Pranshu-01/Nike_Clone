import React, { useState } from 'react'
import {Box, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, styled} from '@mui/material'
import {FavoriteBorderOutlined, MenuOutlined, MenuSharp, Search, WorkOutline} from '@mui/icons-material';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import DrawerButtons from './DrawerButtons';

const Component=styled(Box)`
    background-color: #ffffff;
    /* height:70px; */
    color:#111;
`
const Wrapper=styled(Box)(({theme})=>({
    display: "flex",
    padding: "10px 50px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]:{
        padding:"10px 20px"
    }
}))
    

const Left=styled(Box)`
    flex: 1;
`

const Logo=styled('img')({
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    width:"8vh",
})
    


const Center=styled(Box)(({theme})=>({
    display: "flex",
    flex:"1",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down('lg')]:{
        display:"none",
    }
}))
   

const CenterText=styled(Box)`
    font-size: 16px;
`

const MenuButton=styled(IconButton)(({theme})=>({
    marginLeft:"15px",
    display:"none",
   
    [theme.breakpoints.down('lg')]:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
}))

const DrawerWrapper=styled(Box)`
    background-color: #ffffff;
    color:#111111;
    padding: 50px 40px;
`


const Navbar = () => {

    const [open,setOpen]=useState(false);

    const openDrawer=()=>{
        setOpen(true)
    }

    const closeDrawer=()=>{
        setOpen(false)
    }

  return (
    <>
        <Component>
            <Wrapper>
                
                    <Left>
                        <Link to="/">
                            <Logo src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
                        </Link>
                    </Left>
                
                <Center>
                    <Link to="/products/New and Featured" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>New & Featured</CenterText>
                    </Link>
                    <Link to="/products/Men" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>Men</CenterText>
                    </Link>
                    <Link to="/products/Women" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>Women</CenterText>
                    </Link>
                    <Link to="/products/Kid" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>Kids</CenterText>
                    </Link>
                    <Link to="/products/Sale" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>Sale</CenterText>
                    </Link>
                    <Link to="/products/SNKRS" style={{textDecoration:"none",color:"inherit"}}>
                        <CenterText>SNKRS</CenterText>
                    </Link>
                </Center>
                <CustomButtons/>
                <MenuButton onClick={openDrawer}>
                    <MenuSharp style={{fontSize:"25px",color:"#111111"}}/>
                </MenuButton>
                <Drawer open={open} onClose={closeDrawer} anchor='right'>
                    <Box onClick={closeDrawer}>
                        <DrawerWrapper>
                            <DrawerButtons/>
                        </DrawerWrapper>
                    </Box>
                </Drawer>
            </Wrapper>
        </Component>
    </>
  )
}

export default Navbar