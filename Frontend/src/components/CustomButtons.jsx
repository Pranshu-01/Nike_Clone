import React, { useEffect, useState } from 'react'
import {Box, InputBase, List, ListItem, styled} from '@mui/material'
import {FavoriteBorderOutlined, FavoriteBorderSharp, Search, SearchSharp, WorkOutline, WorkOutlineSharp} from '@mui/icons-material';
import { Link, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProducts } from '../services/api';
import shuffle from 'shuffle-array';


const Right=styled(Box)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const SearchContainer=styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // position:"relative",
    /* padding: 5px 10px; */
    padding: "6px 56px 6px 0px",
    borderRadius: "50px",
    backgroundColor: "#f5f5f5",
    width: "9vw",
    "&:hover":{
        backgroundColor: "#eae7e7"
    },
    [theme.breakpoints.down('lg')]:{
        width:"11vw"
    },
    [theme.breakpoints.down('md')]:{
        width:"17vw"
    },
    [theme.breakpoints.down('sm')]:{
        width:"22vw"
    }
}))
    

const SearchIcon=styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    padding: "0px 10px",
    [theme.breakpoints.down('sm')]:{
        marginRight: "0px",
        padding: "0px 10px",
    }
}))


const StyledInputBase=styled(InputBase)(({theme})=>({
    fontSize: "15px",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]:{
        fontSize: "12.5px",
    }
}))
    


const MenuItem=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const MenuItemIcon=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25px;
    position: relative;
`

const MenuItemQuantity=styled(Box)`
    position: absolute;
    text-align: center;
    top:7px;
    font-size: 12px;
    font-weight: bolder;
`

const ListContainer=styled(Box)(({theme})=>({
    position: "absolute",
    left:"0px",
    top:"100px",
    zIndex: "2",
    background: "#ffffff",
    color:"#111111",
    width: "100%",
    [theme.breakpoints.down('lg')]:{
        top:"60px",
    }
}))


const ListWrapper=styled(Box)(({theme})=>({
    display: "flex",
    padding:"40px 50px 100px 50px",
    [theme.breakpoints.down('lg')]:{
        flexDirection:"column",
    },
    [theme.breakpoints.down('md')]:{
        flexDirection:"column",
        padding:"40px 20px 100px 20px",
    }
}))
   
    

const ListHeader=styled(Box)`
    font-size: 17px;
    margin-bottom: 15px;
    color:#696969;
`

const ListTitle=styled(Box)`
    font-size: 18px;
    padding: 8px 0px;
`

const ListWrapperLeft=styled(Box)`
    flex:1;
`



const ListWrapperRight=styled(Box)(({theme})=>({
    /* display: flex; */
    display:"grid",
    gridTemplateColumns: "repeat(5,1fr)",
    flex:"4",
    [theme.breakpoints.down('lg')]:{
        paddingTop:"50px"
    },
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns: "repeat(2,1fr)",
        flex:"1",
    }
}))
    


const ListRight=styled(Box)(({theme})=>({
    margin: "6px",
    [theme.breakpoints.down('lg')]:{
        margin:"10px 12px 10px 0px",
    }
}))



const Image=styled('img')(({theme})=>({
    width:"100%",
    height:"17vw",
    objectFit:"cover",
    [theme.breakpoints.down('md')]:{
        height:"34vw"
    }
    // height:"40vw",
}))

const Info=styled(Box)`
    width: 100%;
    margin-top: 10px;
    color:#111;
    font-weight: 500;
`

const Title=styled(Box)`
    margin-top: 10px;
    font-size: 15px;
`

const Tagline=styled(Box)`
    color:#696969;
    font-size: 14px;
    margin-top: 5px;
`


const Price=styled(Box)`
    font-size: 15px;
    margin-top: 15px;
`

const MRP=styled(Box)`
    font-size: 15px;
    color:#696969;
    margin-top: 6px;
`


const CustomButtons = () => {
    
    const cart=useSelector((state)=>state.cart);

    const [products,setProducts]=useState([]);

    const [searchText,setSearchText]=useState("");


    useEffect(()=>{
        getAllProducts();
      },[]);
    
      const getAllProducts=async()=>{
        const response=await getProducts();
        setProducts(response.data);
      }

      useEffect(()=>{
        shuffle(products);
      },[products]);

    //   const navigate=useNavigate();

    //   const handleSearch=(e)=>{
    //     e.preventDefault();
    //     searchText && navigate(`/products/${searchText}`)
    //   }


    //   console.log(products);
  return (
    <>
        <Right>
                    <SearchContainer>
                        <SearchIcon>
                            <SearchSharp style={{fontSize:"25px"}}/>
                        </SearchIcon>
                        {/* <form onSubmit={handleSearch}> */}
                        <StyledInputBase placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                        {/* </form> */}
                        </SearchContainer>
                        {searchText && (
                            <ListContainer>
                            <ListWrapper onClick={()=>setSearchText("")}>
                                <ListWrapperLeft>
                                <ListHeader>Top Suggestions</ListHeader>
                               {
                                products.filter((product)=>product.title.toLowerCase().includes(searchText.toLowerCase())).slice(0,5).map((product)=>{
                                    return(
                                        <>
                                            <Link to={`/product/${product._id}`} style={{color:"#111111",textDecoration:"none"}}>
                                                <ListTitle>{product.title}</ListTitle>
                                            </Link>
                                        </>
                                    )
                                })
                               }
                               
                            </ListWrapperLeft>
                                
                               <ListWrapperRight>
                            {                               
                                products.filter((product)=>product.title.toLowerCase().includes(searchText.toLowerCase())).slice(0,5).map((product)=>{
                                    return(
                                        <>
                                            <ListRight>
                                                <Link to={`/product/${product._id}`} style={{color:"#111111",textDecoration:"none"}}>
                                                    <Image src={product.img.color1[0]}/>
                                                    <Info >
                                                        <Title>{product.title}</Title>
                                                        <Tagline>{product.tagline}</Tagline>
                                                        {
                                                            product.mrp
                                                            ?
                                                            <>
                                                                <Price>₹ {product.price}</Price>
                                                                <MRP>MRP : ₹ {product.mrp}</MRP>
                                                            </>
                                                            :
                                                                <Price>MRP : ₹ {product.price}</Price>
                                                        }
                                                    </Info>
                                                </Link>
                                            </ListRight>
                                        </>
                                    )
                                    
                                })
                               }
                               
                                </ListWrapperRight>
                            </ListWrapper>
                            
                            </ListContainer>
                        )}
                        
                   
                    <MenuItem>
                    <Link to="/favourites" style={{color:"inherit",textDecoration:"none"}}>
                            <MenuItemIcon>
                                <FavoriteBorderSharp style={{color:"#111111",fontSize:"25px"}}/>
                            </MenuItemIcon>
                        </Link>

                        <Link to="/cart" style={{color:"inherit",textDecoration:"none"}}>
                            <MenuItemIcon>
                                <WorkOutline style={{color:"#111111",fontSize:"25px"}}/>
                                <MenuItemQuantity>{cart.quantity>0 && cart.quantity}</MenuItemQuantity>
                            </MenuItemIcon>
                        </Link>
                        
                    </MenuItem>
                </Right>
    </>
  )
}

export default CustomButtons