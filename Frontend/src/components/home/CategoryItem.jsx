import { Box, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled(Box)`
	flex: 1;
	margin: 8px;
	height: 70vh;
	position: relative;
`;

const Image = styled('img')({
	width: '100%',
	height: '100%',
	objectFit: 'cover',
});

const Info = styled(Box)`
	position: absolute;
	bottom: 47px;
	left: 60px;
`;

const Button = styled('button')({
	backgroundColor: '#ffffff',
	fontSize: '16px',
	border: 'none',
	borderRadius: '50px',
	// padding: '12px 25px',
    padding: "10px 22px",
	marginTop: '30px',
	color: '#111',
	fontWeight: '500',
	textTransform: 'capitalize',
	cursor: 'pointer',
});

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Link to={`/products/${item.category}`}>
				<Image src={item.img} alt="" />
				<Info>
					<Button>{item.buttonTitle}</Button>
				</Info>
			</Link>
		</Container>
	);
};

export default CategoryItem;
