import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LeftImage from '../components/LeftImage';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { publicRequest } from '../requestMethods';
import { Favorite, FavoriteBorder, FavoriteBorderSharp, FavoriteSharp } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/features/cartRedux';
import { addFavProducts, removeFavProduct } from '../redux/features/favRedux';
import { red } from '@mui/material/colors';


const Container = styled(Box)(({ theme }) => ({
	padding: '90px 260px',
	[theme.breakpoints.down('lg')]: {
		padding: '30px 30px',
	},
}));

const Wrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	
	justifyContent: 'space-between',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	},
}));

const Left = styled(Box)(({ theme }) => ({
	width: '56%',
	zIndex:"1",
	[theme.breakpoints.down('md')]: {
		width: '100%',
	},
}));

const Right = styled(Box)`
	flex: 1;
`;

const InfoContainer = styled(Box)(({ theme }) => ({
	width: '100%',
	margin: '0px 100px',
	color: '#111111',
  [theme.breakpoints.down('lg')]: {
    margin:"0px 20px"
	},
	[theme.breakpoints.down('md')]: {
		margin: '0',
	},
}));

const Heading = styled(Box)`
	margin-bottom: 5px;
	font-size: 16px;
	/* color:#b24400; */
	color: #b04400;
`;

const Title = styled(Box)`
	font-size: 24px;
`;

const Tagline = styled(Box)`
	font-size: 17px;
	font-weight: 500;
	margin-top: 5px;
`;

const Price = styled(Box)`
	font-size: 18px;
	margin-top: 20px;
`;

const MRPWrapper=styled(Box)`
    display: flex;
	font-size:18px;
    margin-top: 20px;
	align-items: center;
`

const DisPrice=styled(Box)`
    font-size: 18px;
`

const MRP=styled(Box)`
    margin-left: 12px;
    color:#696969;
`

const Text1 = styled(Box)`
	margin-top: 6px;
	font-size: 17px;
	color: #696969;
`;

const Text2 = styled(Box)`
	margin-top: 4px;
	font-size: 17px;
	color: #696969;
`;

const ImageWrapper = styled(Box)(({theme})=>({
  	marginTop: "40px",
	display: "flex",
	width: "12vw",
	flex: "1",
	flexWrap: "wrap",
  [theme.breakpoints.down('md')]:{
    width:"30vw"
  }
}))


const ImageChanger = styled('img')(({ theme }) => ({
	flex: '1',
	width: '2vw',
	// maxHeight: "12vh",
	objectFit: 'cover',
	borderRadius: '10px',
	margin: '2px',
	'&:hover': {
		border: '1px solid black',
	},
}));

const SizeText = styled(Box)`
	margin-top: 40px;
	font-size: 17px;
	font-weight: 500;
	margin-bottom: 10px;
`;

const SizeContainer = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	/* width: 90%; */
`;

// const SizeBox=styled(Box)`
//   display: flex;
//   /* align-items: center; */
//   justify-content: center;
//   width: 7.5vw;
//   text-align: center;
//   border: 0.5px solid #69696947;
//   font-size: 20px;
//   border-radius:6px;
//   padding:20px 10px;
//   margin:3px 3px;
//   &:hover{
//     border:1px solid black
//   }
// `

const SizeBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	width: '8.48vw',
	textAlign: 'center',
	border: '0.5px solid #69696947',
	fontSize: '17px',
	borderRadius: '6px',
	padding: '15px 4px',
	margin: '3px 3px',
	cursor:"pointer",
	outline:"2px",
	'&:hover': {
		border: '1px solid black',
	},
	[theme.breakpoints.down('xl')]: {
		width: '8.2vw',
	},
	[theme.breakpoints.down('lg')]: {
		width: '12.3vw',
	},
	[theme.breakpoints.down('md')]: {
		width: '24.92vw',
	},
	[theme.breakpoints.down('sm')]: {
		width: '24.8vw',
	},
}));

const InfoButton = styled('button')(({ theme }) => ({
	width: '100%',
	background: '#111111',
	fontSize: '17px',
	border: 'none',
	borderRadius: '50px',
	padding: '22px 25px',
	marginTop: '10px',
	color: 'white',
	fontWeight: '500',
	transition:"all 0.2s ease",
	cursor: 'pointer',
	"&:hover":{
		background: '#393939',
	},
  [theme.breakpoints.down('md')]: {
		width: '100%',
	},
}));

const FavButton = styled('button')(({ theme }) => ({
	width: '100%',
	background: '#ffffff',
	fontSize: '17px',
	borderRadius: '50px',
	padding: '22px 25px',
	marginTop: '14px',
	color: 'black',
	fontWeight: '500',
	cursor: 'pointer',
	border: '0.5px solid #6969696c',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
		width: '100%',
	},

	'&:hover': {
		border: '1px solid black',
	},
}));

const FavIcon = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Description = styled(Box)(({theme})=>({
  marginTop: "60px",
	lineHeight: "40px",
	width: "100%",
	fontSize: "17px",
  [theme.breakpoints.down('md')]: {
		width: '100%',
	},
}))
	

const ColorWrapper = styled(Box)`
	display: flex;
`;

const Color = styled(Box)`
	margin-top: 30px;
	font-size: 17px;
`;

const SizeError=styled(Box)`
	color:#d30005;
	font-weight: 500;
	margin-top: 10px;
	font-size: 17px;
`

const Product = () => {

	const dispatch=useDispatch();
	const user=useSelector((state)=>state.user.currentUser);
	const navigate=useNavigate();

	const [color,setColor]=useState("");
	const [size,setSize]=useState("");
	const [cartImage,setCartImage]=useState("");

	const [product, setProduct] = useState({});

	const { id } = useParams();
	const [image, setImage] = useState([]);

	const [fav,setFav]=useState("nFav");
	const [favSize,setFavSize]=useState("");

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await getProductById(id);
				setProduct(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProduct();
	}, [id]);

	useEffect(() => {
		product && Object.keys(product).length > 0 && setImage(product.img.color1);
		product && Object.keys(product).length > 0 && setColor(product.color[0]);
		product && Object.keys(product).length > 0 && setCartImage(product.img.color1[0]);
	}, [product]);

	console.log(cartImage);
	// console.log(product);
	// console.log(image);
	console.log(color);
	console.log(size);

	const [styleSize,setStyleSize]=useState({});
	const [styleSizeText,setStyleSizeText]=useState("");
	const [styleSizeBox,setStyleSizeBox]=useState({});
	const [quantity]=useState(1);

	const handleClick=()=>{
		if(size.length>0){
			setStyleSizeText("");
			setStyleSize({border:"none"});
			dispatch(addProduct({product,color,size,cartImage,quantity}));
		}
		else{
			setStyleSize({border:"1px solid #d30005",borderRadius:"6px"});
			setStyleSizeText("Please select a size.");
		}
	}


	
	const handleFav=()=>{
		if(!user){
			navigate('/login');
		}

		if(size.length>0 && user && fav=="nFav"){
			setStyleSize({border:"none"});
			setStyleSizeText("");
			dispatch(addFavProducts({product,color,size,cartImage,quantity}));
			setFav("fav");
		}
		else if(size.length>0 && user && fav==="fav"){
			setStyleSize({border:"none"});
			setStyleSizeText("");
			dispatch(removeFavProduct({product,color,size,cartImage,quantity}));
			setFav("nFav");
		}
		else{
			setStyleSizeText("Please select a size.");
			setStyleSize({border:"1px solid #d30005",borderRadius:"6px"});
		}
	}

	const favProduct=useSelector((state)=>state.fav.products);

	useEffect(()=>{
		getFavProduct();
	},[product,size,color])

	const getFavProduct=()=>{
		favProduct.map((val)=>{
			if(val.product._id===product._id && val.size===size && val.color===color){
				setFav("fav");
			}
		})
	}

	return (
		product &&
		Object.keys(product).length > 0 && (
			<>
				<Container>
					<Wrapper>
						<Left>
							{/* <ImageContainer>
              <Image src={product.img.color1[0]} alt="" />
          </ImageContainer> */}
							<LeftImage product={product} image={image} />
						</Left>
						<Right>
							<InfoContainer>
								{product.heading && <Heading>{product.heading}</Heading>}
								<Title>{product.title}</Title>
								<Tagline>{product.tagline}</Tagline>
								{product.mrp?
								<MRPWrapper>
									<DisPrice>₹ {product.price}</DisPrice>
									<MRP>MRP : ₹ {product.mrp}</MRP>
								</MRPWrapper>
                				:
                				<Price>MRP : ₹ {product.price}</Price>}
								<Text1>incl. of taxes</Text1>
								<Text2>(Also includes all applicable duties)</Text2>

								{/* {colorLength=product.color.length} */}

								{product.color.length > 1 && (
									<ImageWrapper sx={{ cursor: 'pointer' }}>
										<ImageChanger onClick={() => {setImage(product.img.color1); setColor(product.color[0]); setCartImage(product.img.color1[0])}} src={product.img.color1[0]} />
										<ImageChanger onClick={() => {setImage(product.img.color2); setColor(product.color[1]); setCartImage(product.img.color2[0])}} src={product.img.color2[0]} />
									</ImageWrapper>
								)}

								{styleSizeText!=="" && size.length===0 ? <SizeText style={{color:"#d30005"}}>Select Size</SizeText> : <SizeText>Select Size</SizeText>}
								<SizeContainer style={styleSize}>
									{product.size.map((val) => {
										return (
											<>
												<SizeBox component="span" onClick={()=>{setSize(val); setFav("nFav"); setStyleSizeBox({border:"1px solid black"}); setStyleSize({})}}>{val}</SizeBox>
											</>
										);
									})}
								</SizeContainer>
								{size.length===0 && styleSizeText!=="" && <SizeError>{styleSizeText}</SizeError>}

								<InfoButton onClick={handleClick}>Add to Bag</InfoButton>
								<FavButton onClick={handleFav}>
									Favourite
									<FavIcon>
										{fav==="nFav"?<FavoriteBorderSharp style={{ fontSize: '20px', marginLeft: '12px', color: '#111111cc' }} />:<FavoriteSharp style={{ fontSize: '20px', marginLeft: '12px', color: '#111111' }}/>}
									</FavIcon>
								</FavButton>

								<Description>{product.description}</Description>
								<ColorWrapper>
									<Color>&bull; Colour Shown:&nbsp;</Color>
									{product.color.map((c, index) => (
										<Color>
											{c}
											{index < product.color.length - 1 && '/'}
										</Color>
									))}
								</ColorWrapper>
							</InfoContainer>
						</Right>
					</Wrapper>
				</Container>
			</>
		)
	);
};

export default Product;
