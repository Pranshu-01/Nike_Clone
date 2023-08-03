import { Alert, Box, Checkbox, Collapse, Divider, Select, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, InputLabel, MenuItem, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCat from './ProductsCat';
import CloseIcon from '@mui/icons-material/Close';
import { TuneSharp } from '@mui/icons-material';

const Container = styled(Box)(({ theme }) => ({
	padding: '70px 0px',
	[theme.breakpoints.down('md')]: {
		padding: '70px 0px',
	},
}));

const Wrapper = styled(Box)``;

const Top = styled(Box)(({ theme }) => ({
	display: 'flex',
	padding: '0px 50px',
	justifyContent: 'space-between',
	[theme.breakpoints.down('sm')]: {
		padding:"0px 20px"
		// justifyContent: 'space-around',
	},
}));

const Title = styled(Box)`
	font-size: 24px;
	display: flex;
	align-items: center;
`;

const FilterContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	// [theme.breakpoints.down('sm')]: {
	// 	display: 'grid',
	// 	marginLeft: '6px',
	// 	gridTemplateColumns: 'repeat(3,1fr)',
	// },
}));

/* align-items: center; */

const FilterGender = styled(Box)(({ theme }) => ({
	// minWidth: "6vw",
	marginRight: '6px',
	[theme.breakpoints.down('xl')]: {
		marginRight: '6px',
	},
	[theme.breakpoints.down('sm')]: {
		marginBottom: '6px',
	},
}));

const FilterSize = styled(Box)(({ theme }) => ({
	// minWidth: "6vw",
	marginRight: '6px',
	[theme.breakpoints.down('xl')]: {
		marginRight: '6px',
	},
}));

const FilterColor = styled(Box)(({ theme }) => ({
	// minWidth: "6vw",
	marginRight: '6px',
	[theme.breakpoints.down('xl')]: {
		marginRight: '6px',
	},
}));

const FilterSort = styled(Box)`
	/* min-width: 6vw; */
	display: flex;
	align-items: center;
	font-size: 16px;
	margin-left: 12px;
`;

const Bottom = styled(Box)`
	/* display: grid;
	grid-template-columns: repeat(2,1fr); */
	display: flex;
	/* flex-direction: column; */
	/* flex-direction: row; */
	/* justify-content: space-between; */
`;

const MenuColor = styled(MenuItem)`
	margin: 8px;
	font-size: 14px;
	font-weight: 500;
`;

const MenuItemContainer = styled(MenuItem)`
	font-size: 14px;
	color: #111111;
	font-weight: 500;
`;

const BottomCollapse = styled(Box)`
	padding: 20px 0px;
	/* flex: 2; */
`;
const BottomProduct = styled(Box)(({theme})=>({
	padding: "0px 50px",
	width: "100%",
	[theme.breakpoints.down('md')]:{
		padding:"0px 20px"
	}
}))
	

const CollapseInfo = styled(Box)(({theme})=>({
	padding: "0px 0px 0px 50px",
	[theme.breakpoints.down('md')]:{
		padding:"0px 0px 0px 20px"
	}
}))

const GenderRadio=styled(Box)`
	font-size: 16px;
	margin-bottom: 30px;
`

const RadioText=styled(Box)`
	margin: 0px 0px 10px 0px;
`

const RadioInfo=styled(Box)`
	display: flex;
`

const SizeContainer = styled(Box)(({theme})=>({
	display: "grid",
	gridTemplateColumns: "repeat(3,1fr)",
	[theme.breakpoints.down('sm')]:{
		gridTemplateColumns:"repeat(2,1fr)"
	}
}))

const SizeBox = styled(Box)(({ theme }) => ({
	display:"flex",
	justifyContent: 'center',
	width: '4vw',
	textAlign: 'center',
	border: '0.5px solid #69696947',
	fontSize: '15px',
	borderRadius: '6px',
	padding: '8px 4px',
	margin: '3px 3px',
	cursor:"pointer",
	outline:"2px",
	'&:hover': {
		border: '1px solid black',
	},
	[theme.breakpoints.down('md')]:{
		width: '4vw',
		padding: '4px 12px',

	}
}));

const ColorWrapper=styled(Box)`
	display: flex;
	flex-direction: column;
	margin-bottom:10px;
	cursor: pointer;
`

const ColorBox=styled(Box)`
	width: 30px;
	height: 30px;
	border-radius: 50px;
`

const ColorText=styled(Box)`
	font-size: 14px;
	margin: 4px 0px;
	display: flex;
	&:hover{
		color:#696969;
	}
`


// const Select = styled('select')({
// 	border:"none",
// 	fontSize:"16px",
// });

const Option = styled('option')({
});

const CollapseIcon=styled(Box)(({theme})=>({
	[theme.breakpoints.down('sm')]:{
		display:"none",
		marginLeft:"0px"
	}
}))


const ProductList = () => {
	const { category } = useParams();
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('');
	const [bottomStyle,setBottomStyle]=useState({});
	// console.log(size + color + sort);

	const handleChange = (e) => {
		const value = e.target.value;
		console.log(value);
		setFilters({ ...filters, [e.target.name]: value });
		setFilters({...filters,[size]:setSize});
	};

	const handleSize=(value)=>{
		setFilters({...filters,size:value});
	}

	const handleColor=(value)=>{
		setFilters({...filters,color:value});
	}


	useEffect(() => {
		setFilters({});
		setSort('');
	}, [category]);

	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		if (open === false) {
			setOpen(true);
			// setBottomStyle({display:"flex"})
			// setcollapseOpientation("horizontal")
		} else {
			setBottomStyle({})
			setOpen(false);
			// setcollapseOpientation("vertical")
		}
	};

	return (
		<>
			<Container>
				<Wrapper>
					<Top>
						{category === 'Men' || category === 'Women' || category === 'Kid' || category === 'Tennis Shoe' ? (
							<Title>{category + "'s"}</Title>
						) : (
							<Title>{category}</Title>
						)}

						<FilterContainer>
							<Box style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize:"18px" }} onClick={handleToggle}>
								<Box>
									Show Filters
								</Box>
								<CollapseIcon>
									<TuneSharp  onClick={handleToggle} style={{display:"flex", alignItems: 'center', fontSize:"22px",marginLeft:"6px"}}/>
								</CollapseIcon>
							</Box>

							<FilterSort>
								<FormControl sx={{ m: 0, minWidth: 80 }} size="small">
									<InputLabel style={{ fontSize: '16px' }}>Sort</InputLabel>
									<Select value={sort} label="Sort" onChange={(e) => setSort(e.target.value)}>
										<MenuItemContainer value="newest">Newest</MenuItemContainer>
										<MenuItemContainer value="desc">Price: High-Low</MenuItemContainer>
										<MenuItemContainer value="asc">Price: Low-High</MenuItemContainer>
									</Select>
								</FormControl>
							</FilterSort>
							{/* <FilterSort>
								<Select name="sort" id="sort" onChange={(e)=>setSort(e.target.value)}>
									<Option id='sort'>Sort By</Option>
									<Option value="Newest" id='sort'>Newest</Option>
									<Option value="desc" id='sort'>Price: High-Low</Option>
									<Option value="asc" id='sort'>Price: Low-High</Option>
								</Select>
							</FilterSort> */}
						</FilterContainer>
					</Top>
					<Bottom style={bottomStyle}>
						 {(<BottomCollapse>
							<Collapse in={open} orientation="horizontal">
								<Box
								>
									<CollapseInfo>
										{!(category === 'Men' || category === 'Women' || category === 'Kid') && (<GenderRadio>
											<RadioText>Gender</RadioText>
											<RadioInfo>
											<input type="radio" id='men' name='categories' value="Men" onChange={handleChange}/>
											<label htmlFor="Men" id='men' value="Men" style={{margin:"0px 4px"}}>Men</label>
											</RadioInfo>
											<RadioInfo>
											<input type="radio" id='women' name='categories' value="Women" onChange={handleChange} />
											<label htmlFor="Women" id='women' value="Women" style={{margin:"0px 4px"}}>Women</label>
											</RadioInfo>
										</GenderRadio>)}
										

										{(<GenderRadio>
											<RadioText>Size</RadioText>
											<SizeContainer>
												<SizeBox onClick={()=>{handleSize("UK 3")}}>UK 3</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 3.5")}}>UK 3.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 4")}}>UK 4</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 4.5")}}>UK 4.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 5")}}>UK 5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 5.5")}}>UK 5.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 6")}}>UK 6</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 6.5")}}>UK 6.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 7")}}>UK 7</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 7.5")}}>UK 7.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 8")}}>UK 8</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 8.5")}}>UK 8.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 9")}}>UK 9</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 9.5")}}>UK 9.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 10")}}>UK 10</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 10.5")}}>UK 10.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 11")}}>UK 11</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 11.5")}}>UK 11.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 12")}}>UK 12</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 12.5")}}>UK 12.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 13")}}>UK 13</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 13.5")}}>UK 13.5</SizeBox>
												<SizeBox onClick={()=>{handleSize("UK 14")}}>UK 14</SizeBox>
											</SizeContainer>
										</GenderRadio>)}
											
										{/* <Divider style={{margin:"40px 0px 20px 0px"}}/> */}

										{(<GenderRadio>
											<RadioText>Colour</RadioText>
											<SizeContainer>
												<ColorWrapper onClick={()=>{handleColor("Black")}}>
													<ColorBox style={{background:"black"}}/>
													<ColorText>Black</ColorText>
												</ColorWrapper>

												<ColorWrapper onClick={()=>{handleColor("White")}}>
													<ColorBox style={{background:"#ffffff",border:"0.5px solid #69696947"}}/>
													<ColorText>White</ColorText>
												</ColorWrapper>
												<ColorWrapper onClick={()=>{handleColor("Blue")}}>
													<ColorBox style={{background:"darkblue"}}/>
													<ColorText>Blue</ColorText>
												</ColorWrapper>
												<ColorWrapper onClick={()=>{handleColor("Pink")}}>
													<ColorBox style={{background:"#f0728f"}}/>
													<ColorText>Pink</ColorText>
												</ColorWrapper>

												<ColorWrapper onClick={()=>{handleColor("Red")}}>
													<ColorBox style={{background:"red"}}/>
													<ColorText>Red</ColorText>
												</ColorWrapper>

												<ColorWrapper onClick={()=>{handleColor("Lime")}}>
													<ColorBox style={{background:"lime"}}/>
													<ColorText>Lime</ColorText>
												</ColorWrapper>

												<ColorWrapper onClick={()=>{handleColor("Teal")}}>
													<ColorBox style={{background:"teal"}}/>
													<ColorText>Teal</ColorText>
												</ColorWrapper>
											</SizeContainer>
										</GenderRadio>)}
									</CollapseInfo>
								</Box>
							</Collapse>
						</BottomCollapse>)}
						<BottomProduct>
							<ProductsCat category={category} filters={filters} sort={sort} open={open}/>
						</BottomProduct>
					</Bottom>
				</Wrapper>
			</Container>
		</>
	);
};

export default ProductList;
