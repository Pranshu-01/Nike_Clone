import { Box, ImageList, ImageListItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct, addUserCart } from '../redux/features/cartRedux'
import { editFavProducts, removeEditedProducts, removeFavProduct } from '../redux/features/favRedux'
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material'


const Container=styled(Box)`
     margin-bottom:8%;
`

const Wrapper=styled(Container)(({theme})=>({
    /* min-width: 500px; */
    /* max-width:500px; */
    /* height: 760px; */
    // margin: "8px 15px 8px 0px",
    margin:"8px 8px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down('lg')]:{
        margin: "8px 10px 8px 0px",
    },
    [theme.breakpoints.down('md')]:{
        margin: "8px 0px",
    }
}))
    

const ImageWrapper=styled(Box)`
    width: 100%;
    /* height: 32vw; */
    position: relative;
`


const Image=styled('img')(({theme})=>({
    width:"100%",
    height:"32vw",
    objectFit:"cover",
    [theme.breakpoints.down('md')]:{
        height:"60vh"
    }
}))

const FavWrapper=styled(Box)`
        position: absolute;
        top:0;
        width: 100%;
        height: 100%;
        transition: all 0.4s ease;
`

const FavIcon=styled(Box)`
    position: absolute;
    top:20px;
    right:20px;
    color:#111;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    padding: 5px;
    background: #ffffff;
    cursor: pointer;
`
    


const Info=styled(Box)`
    width: 100%;
    margin-top: 10px;
    color:#111;
    font-weight: 500;
`

const Heading=styled(Box)`
    margin-top: 10px;
    font-size: 15.8px;
    /* color:#b24400; */
    color:#b04400;
`




const Tagline=styled(Box)`
    color:#696969;
    font-size: 15.8px;
    margin-top: 8px;
`

const Color=styled(Box)`
    color:#696969;
    margin-top: 8px;
    font-size: 15.8px;
`

const TitleWrapper=styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Title=styled(Box)`
    font-size: 17px;
    flex: 1;
`

const Price=styled(Box)`
    font-size: 17px;
    flex:1;
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;
`

const Size=styled(Box)`
    font-size: 15px;
    margin-top: 5px;
    color:#696969;
`


const InfoButton=styled('button')(({theme})=>({
    backgroundColor: "#ffffff",
    fontSize: "16px",
    border:"1px solid #696969c3",
    borderRadius: "50px",
    padding: "12px 25px",
    marginTop: "25px",
    color:'#111',
    fontWeight: "500",
    textTransform: "capitalize",
    cursor: "pointer",
}))

const MRPWrapper=styled(Box)`
    display: flex;
    /* flex-wrap: wrap; */
    /* flex-direction: row-reverse; */
    /* align-items: center; */
    justify-content: flex-end;
    font-size: 17px;
`

const MRP=styled(Box)`
    margin-right:10px;
    color:#696969;
`

const FavProduct = ({item,edit}) => {

    const dispatch=useDispatch();
    
    const [fav,setFav]=useState("fav");

    const [blur,setBlur]=useState({
    })

    const handleFav=(item)=>{
        // console.log(item);
        if(fav==="fav"){
            dispatch(editFavProducts(item));
            setFav("nFav");
            setBlur({backgroundColor:"#ffffff4c"})
        }
        else{
            dispatch(removeEditedProducts(item));
            setFav("fav");
            setBlur({background:"none"})
        }
    }

    console.log(edit);

    const handleClick=()=>{
        const product=item;
        dispatch(addUserCart(product));
        dispatch(removeFavProduct(product));
    }
   
  return (
    <>
        <Container>
            {/* <Link to={`/product/${item.product._id}`} style={{textDecoration:"none"}}> */}
            <Wrapper>
                <ImageWrapper>
                        <Image src={item.cartImage} alt={item.product.title}/> 
                    <FavWrapper style={blur}>
                    {edit==="done" && (<FavIcon onClick={()=>handleFav(item)}>
                        {fav==="fav"?<Favorite/>:<FavoriteBorderOutlined/>}
                    </FavIcon>)}
                    </FavWrapper>
                </ImageWrapper> 
            <Info>
                
                <TitleWrapper>
                    <Title>
                        {item.product.title}
                    </Title>
                    {item.product.mrp?<MRPWrapper>
                        <MRP>MRP : ₹ {item.product.mrp}</MRP>
                        <Price>₹ {item.product.price}</Price>
                    </MRPWrapper>
                    :
                    <Price>MRP : ₹ {item.product.price}</Price>
                    }
                </TitleWrapper>
                <Tagline>{item.product.tagline}</Tagline>
                <Size>{item.size}</Size>
                <InfoButton onClick={handleClick}>Add to Bag</InfoButton>
            </Info>
            
            </Wrapper>
            {/* </Link> */}
        </Container>
    </>
  )
}

export default FavProduct