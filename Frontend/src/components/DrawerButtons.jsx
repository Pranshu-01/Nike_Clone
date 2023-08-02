import React, { useState } from 'react';
import { Box, InputBase, Menu, styled } from '@mui/material';
import { FavoriteBorderOutlined, FavoriteBorderSharp, LogoutSharp, Search, WorkOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/features/userRedux';
import { logoutUser } from '../redux/features/cartRedux';
import { logoutFavUser } from '../redux/features/favRedux';

const Container=styled(Box)`
`




const Top=styled(Box)(({theme})=>({
    display: "flex",
    flexDirection:"column",
    flex:"1",
    justifyContent:"center"
}))
   
const UserText=styled(Box)`
    margin: 10px 0px;
    font-size: 18px;
    color:#696969;
`

const TopText=styled(Box)`
    margin: 10px 0px;
    font-size: 24px;
`

const Center=styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const IconWrapper=styled(Box)`
    display: flex;
    justify-content: space-between;
`

const Logo = styled('img')({
	height: '30px',
    color:"#111111"
});

const CenterText=styled(Box)`
    display: flex;
    margin-left: 15px;
    color:#111111e6;
    align-items: center;
    justify-content: center;
`

const Bottom=styled(Box)`
    margin-top: 100px;
`

const BottomWrapper=styled(Box)`
    
`

const BottomText=styled(Box)(({theme})=>({
    fontSize: "20px",
    color :"#696969",
}))
    


const BottomButtonWrapper=styled(Box)`
    display: flex;
`

const BottomButton1=styled('button')(({theme})=>({
    backgroundColor: "#111111",
    fontSize: "15px",
    border:"none",
    borderRadius: "50px",
    padding: "10px 25px",
    marginTop: "30px",
    color:'#ffffff',
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
    
}))

const BottomButton2=styled('button')(({theme})=>({
    backgroundColor: "#ffffff",
    marginLeft:"7px",
    fontSize: "15px",
    border: '1px solid #69696947',
    borderRadius: "50px",
    padding: "10px 25px",
    marginTop: "30px",
    color:'#111',
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover":{
        border:"1px solid #111111"
    }
}))

const BottomIconWrapper=styled(Box)`
    margin: 60px 0px;
`


const MenuItem=styled(Box)`
`

const MenuItemIcon=styled(Box)`
    display: flex;
    /* align-items: center;
    justify-content: center; */
    /* margin-left: 25px; */
    margin: 15px 0px;
    position: relative;
    cursor: pointer;
`

const MenuItemText=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 20px;
`

const MenuItemQuantity=styled(Box)`
    position: absolute;
    text-align: center;
    top:7px;
    left:9px;
    font-size: 12px;
    font-weight: bolder;
`
const Component2 = styled(Menu)`
	margin-top: 6px;
`;


const DrawerButtons = () => {
	const cart = useSelector((state) => state.cart);
    const user=useSelector((state)=>state.user.currentUser);

    const dispatch = useDispatch();

	return (
		<>
        <Container>
			<Top>
				{user && <UserText>Hi, {user.firstname} </UserText>}


               

				<Link to="/products/New and Featured" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>New & Featured</TopText>
				</Link>
				<Link to="/products/Men" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>Men</TopText>
				</Link>
				<Link to="/products/Women" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>Women</TopText>
				</Link>
				<Link to="/products/Kid" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>Kid</TopText>
				</Link>
				<Link to="/products/Sale" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>Sale</TopText>
				</Link>
				<Link to="/products/SNKRS" style={{ textDecoration: 'none', color: 'inherit' }}>
					<TopText>SNKRS</TopText>
				</Link>
			</Top>
         
            <Center>
                <IconWrapper>
				<Link to="/products/Jordan">
                <Logo
					src="https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png"
					alt="jordan"
						/>
                </Link>
                    <Link to="/products/Jordan" style={{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <CenterText>Jordan</CenterText>
                    </Link>
                </IconWrapper>
            </Center>

            <Bottom>
                {!user && (
                <BottomWrapper>
                    <BottomText>Become a Nike Member</BottomText>
                    <BottomText>for the best products,</BottomText>
                    <BottomText>inspiration and stories in</BottomText>
                    <BottomText>sport.</BottomText>
                    <BottomButtonWrapper>
                        <Link to="/register"><BottomButton1>Join Us</BottomButton1></Link>
                        <Link to="/login"><BottomButton2>Sign In</BottomButton2></Link>
                    </BottomButtonWrapper>
                </BottomWrapper>
                
                )
                }
                <BottomIconWrapper>
                <MenuItem>
                    <Link to="/favourites" style={{color:"inherit",textDecoration:"none"}}>
                            <MenuItemIcon>
                                <FavoriteBorderSharp style={{fontSize:"25px"}}/>
                                <MenuItemText>Fav</MenuItemText>
                            </MenuItemIcon>
                        </Link>

                        <Link to="/cart" style={{color:"inherit",textDecoration:"none"}}>
                            <MenuItemIcon>
                                <WorkOutline style={{fontSize:"25px"}}/>
                                <MenuItemQuantity>{cart.quantity>0 && cart.quantity}</MenuItemQuantity>
                                <MenuItemText>Bag</MenuItemText>
                            </MenuItemIcon>
                        </Link>
                        {user && <MenuItemIcon onClick={() => {
											dispatch(logout());
											dispatch(logoutUser());
											dispatch(logoutFavUser());
									}}>
                                <LogoutSharp style={{fontSize:"25px"}}/>
                            <MenuItemText>Logout</MenuItemText>
                        </MenuItemIcon>}
                    </MenuItem>
                </BottomIconWrapper>
            </Bottom>
			
            </Container>
		</>
	);
};

export default DrawerButtons;
