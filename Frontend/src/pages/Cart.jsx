import { DeleteOutline, FavoriteBorder, FavoriteBorderSharp } from '@mui/icons-material';
import { Alert, Box, Collapse, Divider, IconButton, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, changeSize, logoutUser, removeProduct } from '../redux/features/cartRedux';
import CloseIcon from '@mui/icons-material/Close';
import { publicRequest } from '../requestMethods';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addFavProducts } from '../redux/features/favRedux';
import Suggestions from '../components/Suggestions';
import StripeCheckout from 'react-stripe-checkout';
import uniqid from 'uniqid'



const KEY=import.meta.env.VITE_STRIPE;


const Container = styled(Box)(({ theme }) => ({
	padding: '50px 210px',
	[theme.breakpoints.down('xl')]: {
		padding: '60px 100px',
	},
	[theme.breakpoints.down('lg')]: {
		padding: '60px 20px',
	},
	[theme.breakpoints.down('md')]: {
		padding: '60px 20px 0px 20px',
	},
}));

const Wrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	[theme.breakpoints.down('lg')]: {
		flexDirection: 'column',
	},
}));

const Heading = styled(Box)`
	font-size: 22px;
`;

const Left = styled(Box)`
	flex: 2;
	/* border: 2px solid red; */
`;

const Card = styled(Box)`
	margin-top: 0px;
	display: flex;
	padding: 30px 0px 22px 0px;
	/* border:0.1px solid black; */
`;

const Image = styled('img')(({ theme }) => ({
	width: '210px',
	height: '160px',
	objectFit: 'cover',
	cursor: 'pointer',
	[theme.breakpoints.down('sm')]:{
		width:"140px",
		height:"120px"
	}
}));

const Info = styled(Box)`
	margin: 10px 0px 10px 30px;
	font-size: 16px;
	/* border: 1px solid red; */
	width: 100%;
`;

const TitleWrapper = styled(Box)`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
	/* min-width: 30vw; */
	/* width: 30vw; */
`;

const Title = styled(Box)`
	cursor: pointer;
	flex: 1;
	/* align-items: center; */
`;

const Price = styled(Box)`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	/* font-size: 12px; */
	/* margin-right: 20px; */
`;

const MRPWrapper=styled(Box)(({theme})=>({
	display: "flex",
	[theme.breakpoints.down('sm')]:{
		flexDirection:"column-reverse",
	}
}))

const DisPrice=styled(Box)(({theme})=>({
	fontSize: "17px",
    marginLeft:"12px",
	[theme.breakpoints.down('sm')]:{
		marginLeft:"0px",
		display:"flex",
		justifyContent:"flex-end"
	}
}))


const MRP=styled(Box)`
    color:#696969;
`

const Text = styled(Box)`
	margin-top: 10px;
	color: #696969;
`;

const SizeWrapper = styled(Box)`
	display: flex;
	margin-top: 10px;
	color: #696969;
`;

const Size = styled(Box)``;

const Select = styled('select')({});

const Option = styled('option')({});

const Quantity = styled(Box)`
	margin-left: 20px;
`;

const IconWrapper = styled(Box)`
	display: flex;
	color: #111111e2;
	cursor: pointer;
`;

const Right = styled(Box)(({ theme }) => ({
	flex: '1',
	marginLeft: '35px',
	[theme.breakpoints.down('lg')]: {
		margin: '30px 0px',
	},
}));

const RightWrapper = styled(Box)`
	font-size: 16px;
	padding: 30px 0px 22px 0px;
	/* border:1px solid red; */
	/* min-width: 30vw; */
`;

const SubWrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0px 20px 0px;
`;

const SubTotal = styled(Box)``;
const SubPrice = styled(Box)``;

const ShippingWrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px 0px 27px 0px;
`;

const ShippingText = styled(Box)``;
const ShippingCharges = styled(Box)``;

const TotalWrapper = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 22px 0px 22px 0px;
`;

const Subtotal = styled(Box)``;
const TotalPrice = styled(Box)``;

const CheckoutButton = styled('button')(({ theme }) => ({
	width: '100%',
	background: '#111111',
	fontSize: '16px',
	border: 'none',
	borderRadius: '50px',
	padding: '22px 22px',
	marginTop: '30px',
	color: 'white',
	fontWeight: '500',
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	'&:hover': {
		background: '#393939',
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
}));

const CheckoutButtonDummy = styled('button')(({ theme }) => ({
	width: '100%',
	background: '#111111',
	fontSize: '16px',
	border: 'none',
	borderRadius: '50px',
	padding: '22px 22px',
	marginTop: '30px',
	color: 'white',
	fontWeight: '500',
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	'&:hover': {
		background: '#393939',
	},
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
}));


const CheckoutButtonDummyLength = styled('button')(({ theme }) => ({
	width: '100%',
	background: '#f5f5f5',
	fontSize: '16px',
	border: 'none',
	borderRadius: '50px',
	padding: '22px 22px',
	marginTop: '30px',
	color: '#d0d0d0',
	fontWeight: '600',
	transition: 'all 0.2s ease',
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
}));

const Hr = styled('hr')({
	backgroundColor: '#eee',
	border: 'none',
	height: '2px',
});

const NoItems = styled(Box)`
	font-size: 16px;
	padding: 10px 8px;
`;

const AlertWrapper = styled(Box)`
	/* padding:2px 0px; */
`;

const Text1 = styled(Box)`
	font-size: 16px;
`;
const Text2 = styled(Box)`
	font-size: 13px;
`;

const SuggestionHeading = styled(Box)(({ theme }) => ({
	fontSize: '20px',
	marginTop: '30px',
	display: 'flex',
	padding: '0px 50px',
	[theme.breakpoints.down('md')]: {
		padding: '0px 20px',
	},
}));

const Cart = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	const CartData=cart;

	const [shippingCharges, setShippingCharges] = useState(750);

	const handleDispatch = (updatedQuantity, item) => {
		dispatch(changeQuantity({ item, updatedQuantity }));
	};

	const handleSize = (updatedSize, item) => {
		dispatch(changeSize({ item, updatedSize }));
	};

	useEffect(() => {
		if (cart.total >= 14000) {
			setShippingCharges(0);
		} else if (cart.total < 14000) {
			setShippingCharges(750);
		}
	}, [cart.total]);

	const user = useSelector((state) => state.user);

	const [open, setOpen] = useState(true);

	const handleFav = (item) => {
		dispatch(addFavProducts(item));
		dispatch(removeProduct(item));
	};

	const [stripeToken,setStripeToken]=useState(null);

    const onToken=(token)=>{
        setStripeToken(token);
    }

	useEffect(()=>{
		const makeRequest=async()=>{
			try{
				const res=await publicRequest.post("/checkout/payment",{
					amount:(cart.total+shippingCharges)*100,
					token:stripeToken.id
				});
				navigate("/success",{
					state: {data:res.data,products:CartData,id:uniqid.process(),date:Date(),shipping:shippingCharges}
				});
			}
			catch(err){
				console.log(err);
			}
		}
		const deleteCartData=()=>{
			dispatch(logoutUser());
		}
		stripeToken && makeRequest() && deleteCartData();
	},[stripeToken]);

	return (
		<>
			{
				<Container>
					<Wrapper>
						<Left>
							<Box sx={{ width: '100%' }}>
								<Collapse in={open}>
									<Alert
										icon={false}
										action={
											<IconButton
												aria-label="close"
												color="#eee"
												size="large"
												onClick={() => {
													setOpen(false);
												}}
											>
												<CloseIcon fontSize="inherit" />
											</IconButton>
										}
										sx={{ mb: 3, background: '#f5f5f5', color: '#111111', borderRadius: '0px' }}
									>
										<AlertWrapper>
											<Text1>Free Delivery</Text1>
											<Text2>Applies to orders of ₹ 14 000.00 or more.</Text2>
										</AlertWrapper>
									</Alert>
								</Collapse>
							</Box>

							<Heading>Bag</Heading>
							{cart.products.length == 0 && <NoItems>There are no items in your bag.</NoItems>}

							{cart.products.map((item) => {
								return (
									<>
										<Card>
											<Image onClick={() => navigate(`/product/${item.product._id}`)} src={item.cartImage} />
											<Info>
												<TitleWrapper>
													<Title onClick={() => navigate(`/product/${item.product._id}`)}>{item.product.title}</Title>
													{item.product.mrp?
														<MRPWrapper>
															<MRP>MRP: ₹ {item.product.mrp}</MRP>
															<DisPrice>₹ {item.product.price * item.quantity}.00</DisPrice>
														</MRPWrapper>
                										:
													<Price>MRP: ₹ {item.product.price * item.quantity}.00</Price>}
												</TitleWrapper>
												<Text>{item.product.tagline}</Text>
												<Text>{item.color}</Text>
												<SizeWrapper>
													<Size>
														Size:
														<Select
															value={item.size}
															onChange={(e) => handleSize(e.target.value, item)}
															style={{
																border: 'none',
																fontSize: '14px',
																color: '#696969',
																fontWeight: '500',
																padding: '0px 4px',
															}}
														>
															{item.product.size.map((val) => (
																<Option value={val} key={val}>
																	{val}
																</Option>
															))}
														</Select>
													</Size>
													<Quantity>
														Quantity :
														<Select
															name="quantity"
															value={item.quantity}
															onChange={(e) => handleDispatch(e.target.value, item)}
															style={{
																border: 'none',
																fontSize: '14px',
																color: '#696969',
																fontWeight: '500',
																padding: '0px 4px',
															}}
														>
															{arr.map((val) => (
																<Option value={val} key={val}>
																	{val}
																</Option>
															))}
														</Select>
													</Quantity>
												</SizeWrapper>
												<IconWrapper>
													<FavoriteBorderSharp
														onClick={() => handleFav(item)}
														style={{ color: '#111111', fontSize: '26px', marginTop: '30px' }}
													/>
													<DeleteOutline
														onClick={() => dispatch(removeProduct(item))}
														style={{ fontSize: '26px', marginTop: '30px', marginLeft: '12px' }}
													/>
												</IconWrapper>
											</Info>
										</Card>
										{/* <Hr/> */}
										<Divider />
									</>
								);
							})}
						</Left>
						<Right>
							<Heading>Summary</Heading>
							<RightWrapper>
								<SubWrapper>
									<SubTotal>Subtotal</SubTotal>
									<SubPrice>{cart.total > 0 ? '₹' + cart.total + '.00' : '—'}</SubPrice>
								</SubWrapper>

								<ShippingWrapper>
									<ShippingText>Estimated Delivery & Handling</ShippingText>
									<ShippingCharges>
										{shippingCharges == 0 || cart.total == 0 ? 'Free' : '₹' + shippingCharges + '.00'}
									</ShippingCharges>
								</ShippingWrapper>
								{/* <Hr/> */}
								<Divider />

								<TotalWrapper>
									<Subtotal>Total</Subtotal>
									<TotalPrice>{cart.total > 0 ? '₹' + (cart.total + shippingCharges) + '.00' : '—'}</TotalPrice>
								</TotalWrapper>
								{/* <Hr/> */}
								<Divider />

								{user.currentUser && cart.products.length>0 && (<StripeCheckout
									name="Nike"
									image="https://www.glamourmagazine.co.uk/discountcodes/image/eyJrZXkiOiJnbG0vdXBsb2Fkcy9sb2dvcy9uaWtlLmpwZyIsIm91dHB1dEZvcm1hdCI6IiIsImVkaXRzIjp7fX0=?1607456672"
									billingAddress
									shippingAddress
									description={`Your total is ₹${cart.total + shippingCharges}`}
									currency='INR'
									amount={(cart.total + shippingCharges) * 100}
									token={onToken}
									stripeKey={KEY}
									
								>
									
									<CheckoutButton>Checkout</CheckoutButton>
								</StripeCheckout>)}
								{!user.currentUser && cart.products.length!==0 && <CheckoutButtonDummy onClick={()=>navigate('/login')}>Checkout</CheckoutButtonDummy>}
								{cart.products.length===0 && <CheckoutButtonDummyLength>Checkout</CheckoutButtonDummyLength>}
							</RightWrapper>
						</Right>
					</Wrapper>
				</Container>
			}
			<SuggestionHeading>You Might Also Like</SuggestionHeading>
			<Suggestions />
		</>
	);
};

export default Cart;
