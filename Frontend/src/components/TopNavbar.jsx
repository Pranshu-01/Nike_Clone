import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/features/userRedux';
import { logoutUser } from '../redux/features/cartRedux';
import { logoutFavUser } from '../redux/features/favRedux';
import { PersonOutline } from '@mui/icons-material';

const Component = styled(Box)(({ theme }) => ({
	background: '#f5f5f5',
	color: '#111',
	[theme.breakpoints.down('lg')]: {
		display: 'none',
	},
}));

const Wrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 50px;
`;

const Left = styled(Box)`
	/* flex: 1; */
	display: flex;
	align-items: center;
`;

const Logo = styled('img')({
	height: '24px',
});

const Right = styled(Box)`
	/* flex:1; */
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 12.5px;
`;

const RightButton = styled(Box)`
	margin-left: 10px;
	cursor: pointer;
	text-decoration: none;
`;

const RightDivider = styled(Box)`
	margin-left: 10px;
`;

const Component2 = styled(Menu)`
	margin-top: 6px;
`;

const TopNavbar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.currentUser);

	const [open, setOpen] = useState(false);

	const handleClick = (event) => {
		setOpen(event.currentTarget);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Component>
				<Wrapper>
					<Left>
						<Link to="/products/Jordan">
						<Logo
							src="https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png"
							alt="jordan"
						/>
						</Link>
					</Left>
					<Right>
						<RightButton>Find a Store</RightButton>
						<RightDivider>|</RightDivider>
						<RightButton>Help</RightButton>
						<RightDivider>|</RightDivider>

						{user ? (
                            <>
							<RightButton onMouseEnter={handleClick}>Hi, {user.firstname} </RightButton>
                            </>
						) : (
							<Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
								<RightButton>Join Us</RightButton>
							</Link>
						)}

						<Component2 anchorEl={open} open={Boolean(open)} onClose={handleClose}>
							<MenuItem
                                style={{fontSize:"14px",padding:"0px 10px",boxShadow:"none",background:"#ffffff",cursor:"pointer",borderRadius:"2px"}}
								onMouseLeave={() => {
									handleClose();
								}}
							>
								{user && (
									<Box
										onClick={() => {
                                            handleClose();
											dispatch(logout());
											dispatch(logoutUser());
											dispatch(logoutFavUser());
										}}
									>
										Logout
									</Box>
								)}
                                
							</MenuItem>
						</Component2>
						{!user && <RightDivider>|</RightDivider>}
						{!user && (
							<Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
								<RightButton>Sign In</RightButton>
							</Link>
						)}
					</Right>
				</Wrapper>
			</Component>
		</>
	);
};

export default TopNavbar;
