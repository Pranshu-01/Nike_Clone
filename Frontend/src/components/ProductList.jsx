import { Box, FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCat from './ProductsCat';

const Container = styled(Box)(({theme})=>({
	padding: "70px 50px",
	[theme.breakpoints.down('md')]:{
		padding:"70px 20px"
	}
}))

const Wrapper = styled(Box)``;

const Top = styled(Box)`
	display: flex;
	justify-content: space-between;
`;

const Title = styled(Box)`
	font-size: 24px;
	display: flex;
	align-items: center;
`;

const FilterContainer = styled(Box)`
	display: flex;
	/* align-items: center; */
`;

const FilterGender = styled(Box)(({theme})=>({
	// minWidth: "6vw",
    marginRight: "6px",
	[theme.breakpoints.down('xl')]:{
		marginRight:"6px"
	}
}))

const FilterSize = styled(Box)(({theme})=>({
	// minWidth: "6vw",
    marginRight: "6px",
	[theme.breakpoints.down('xl')]:{
		marginRight:"6px"
	}
}))
	


const FilterColor = styled(Box)(({theme})=>({
	// minWidth: "6vw",
    marginRight: "6px",
	[theme.breakpoints.down('xl')]:{
		marginRight:"6px"
	}
}))

const FilterSort=styled(Box)`
	/* min-width: 6vw; */
`

const Bottom = styled(Box)``;

const MenuColor = styled(MenuItem)`
	margin: 8px;
	font-size: 14px;
	font-weight: 500;
`;

const MenuItemContainer=styled(MenuItem)`
	font-size: 14px;
	color:#111111;
	font-weight: 500;
`

const ProductList = () => {
	const { category } = useParams();
	const [filters,setFilters]=useState({});
	const [sort,setSort]=useState("");

	
	// console.log(size + color + sort);

	const handleChange=(e)=>{
		const value=e.target.value;
		setFilters({...filters,[e.target.name]:value});
	}

	useEffect(()=>{
		setFilters({});
		setSort("");
	},[category])

	return (
		<>
			<Container>
				<Wrapper>
					<Top>
						{(category==="Men" || category==="Women" || category==="Kid" || category==="Tennis Shoe") ? <Title>{category + "'s"}</Title>: <Title>{category}</Title>}
						<FilterContainer>

						{!(category==="Men" || category==="Women" || category==="Kid") && (<FilterGender>
								<FormControl sx={{ m: 0, minWidth: 90}} size="small" >
									<InputLabel style={{fontSize:"14px"}}>Gender</InputLabel>
									<Select
										label="Gender"
										name="categories"
										onChange={handleChange}
									>	
										<MenuItemContainer value="Men">Men</MenuItemContainer>
										<MenuItemContainer value="Women">Women</MenuItemContainer>
									</Select>
								</FormControl>
							</FilterGender>)}

							<FilterSize>
								<FormControl sx={{ m: 0, minWidth: 74}} size="small" >
									<InputLabel style={{fontSize:"14px"}}>Size</InputLabel>
									<Select
										label="Size"
										name="size"
										onChange={handleChange}
									>					
										<MenuItemContainer value="UK 3">UK 3</MenuItemContainer>
										<MenuItemContainer value="UK 3.5">UK 3.5</MenuItemContainer>
										<MenuItemContainer value="UK 4">UK 4</MenuItemContainer>

										<MenuItemContainer value="UK 4.5">UK 4.5</MenuItemContainer>
										<MenuItemContainer value="UK 5">UK 5</MenuItemContainer>
										<MenuItemContainer value="UK 5.5">UK 5.5</MenuItemContainer>
										<MenuItemContainer value="UK 6">UK 6</MenuItemContainer>
										<MenuItemContainer value="UK 6.5">UK 6.5</MenuItemContainer>
										<MenuItemContainer value="UK 7">UK 7</MenuItemContainer>
										<MenuItemContainer value="UK 7.5">UK 7.5</MenuItemContainer>
										<MenuItemContainer value="UK 8">UK 8</MenuItemContainer>
										<MenuItemContainer value="UK 8.5">UK 8.5</MenuItemContainer>
										<MenuItemContainer value="UK 9.5">UK 9</MenuItemContainer>
										<MenuItemContainer value="UK 10">UK 10</MenuItemContainer>
										<MenuItemContainer value="UK 10.5">UK 10.5</MenuItemContainer>
										<MenuItemContainer value="UK 11">UK 11</MenuItemContainer>
										<MenuItemContainer value="UK 11">UK 11.5</MenuItemContainer>
										<MenuItemContainer value="UK 12">UK 12</MenuItemContainer>
									</Select>
								</FormControl>
							</FilterSize>

							<FilterColor>
								<FormControl sx={{ m: 0, minWidth: 80 }} size="small">
									<InputLabel style={{fontSize:"14px"}}>Color</InputLabel>
									<Select
										
										label="Color"
										name="color"
										onChange={handleChange}
									>
										<MenuColor value="White" style={{background:"white",color:"black"}}>White</MenuColor>
										<MenuColor value="Black" style={{background:"black",color:"white"}}>Black</MenuColor>
										<MenuColor value="Blue" style={{background:"blue",color:"white"}}>Blue</MenuColor>
										<MenuColor value="Lime" style={{background:"lime",color:"black"}}>Lime</MenuColor>
										<MenuColor value="Red" style={{background:"red",color:"white"}}>Red</MenuColor>
										<MenuColor value="Pink" style={{background:"pink",color:"black"}}>Pink</MenuColor>
										<MenuColor value="Teal" style={{background:"teal",color:"white"}}>Teal</MenuColor>
									</Select>
								</FormControl>
							</FilterColor>

							<FilterSort>
								<FormControl sx={{ m: 0, minWidth: 74 }} size="small">
									<InputLabel style={{fontSize:"14px"}}>Sort</InputLabel>
									<Select
										value={sort}
										label="Sort"
										onChange={(e)=>setSort(e.target.value)}
									>
										<MenuItemContainer value="newest">Newest</MenuItemContainer>
										<MenuItemContainer value="desc">Price: High-Low</MenuItemContainer>
										<MenuItemContainer value="asc">Price: Low-High</MenuItemContainer>
									</Select>
								</FormControl>
							</FilterSort>
						</FilterContainer>
					</Top>
					<Bottom>
						<ProductsCat category={category} filters={filters} sort={sort} />
					</Bottom>
				</Wrapper>
			</Container>
		</>
	);
};

export default ProductList;
