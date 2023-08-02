import { Box,styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FavProducts from '../components/FavProducts';
import { removeNotFavProducts } from '../redux/features/favRedux';
import Suggestions from '../components/Suggestions';

const Container = styled(Box)(({theme})=>({
	padding: "70px 50px 0px 50px",
	[theme.breakpoints.down('md')]:{
		padding:"70px 20px 0px 20px"
	}
}))

const Wrapper = styled(Box)``

const Top = styled(Box)`
	display: flex;
	justify-content: space-between;   
`

const Title = styled(Box)`
	font-size: 24px;
	display: flex;
	align-items: center;
`;




const Edit=styled('button')(({theme})=>({
    // backgroundColor: "#ffffff",
    // fontSize: "16px",
    // border:"1px solid #696969c3",
    // borderRadius: "20px",
    // padding: "12px 25px",
    // color:'#111',
    // fontWeight: "500",
    // textTransform: "capitalize",
    // cursor: "pointer",
}))

const Bottom=styled(Box)`
`

const SuggestionHeading=styled(Box)(({theme})=>({
    fontSize: "20px",
    // marginTop: "30px",
    display: "flex",
    padding: "0px 50px",
    [theme.breakpoints.down('md')]:{
    padding: "0px 20px",
    }
  }))

  const SuggestionWrapper=styled(Box)(({theme})=>({
    padding:"0px 0px 0px 30px",
    [theme.breakpoints.down('md')]:{
        padding:"0px"
    }
  }))
  

  const NoItems=styled(Box)(({theme})=>({
    paddingTop: "110px",
    fontSize: "17px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('md')]:{
        paddingTop:"50px"
    }
  }))
    

const Fav = () => {
    const dispatch=useDispatch();
    const [edit,setEdit]=useState("edit");

    const [styledButton,setStyledButton]=useState({
        backgroundColor: "#ffffff",
        fontSize: "16px",
        border:"1px solid #6969696c",
        borderRadius: "20px",
        padding: "12px 25px",
        color:'#111',
        fontWeight: "500",
        textTransform: "capitalize",
        cursor: "pointer",
    })

    const [title,setTitle]=useState("Favourites");

    const handleEdit=()=>{
        console.log(edit);
        // if(edit=="" || edit=="done"){
        //     setEdit("edit");
        // }
        // else if(edit=="edit"){
        //     setEdit("done")
        // }
        if(edit==="edit"){
            setEdit("done");
            setStyledButton({
                backgroundColor: "#111111",
                fontSize: "16px",
                border:"1px solid #6969696c",
                borderRadius: "20px",
                padding: "12px 25px",
                color:'#fff',
                fontWeight: "500",
                textTransform: "capitalize",
                cursor: "pointer",
            })
            setTitle("Manage Your Favourites");
        }
        else if(edit==="done"){
            setStyledButton({
                backgroundColor: "#ffffff",
                fontSize: "16px",
                border:"1px solid #6969696c",
                borderRadius: "20px",
                padding: "12px 25px",
                color:'#111',
                fontWeight: "500",
                textTransform: "capitalize",
                cursor: "pointer",
            })
            setTitle("Favourites");
            dispatch(removeNotFavProducts());
            setEdit("edit");
        }
        
    }

    const favProducts=useSelector((state)=>state.fav.products);

  return (
    <>
        <Container>
            <Wrapper>
                <Top>
                    <Title>{title}</Title>
                    {favProducts.length!==0 && <button style={styledButton} onClick={handleEdit}>{edit}</button>}
                </Top>
                <Bottom>
                    {favProducts.length===0 && <NoItems>Items added to your Favourites will be saved here.</NoItems>}
                    <FavProducts edit={edit}/>
                </Bottom>
            </Wrapper>
        </Container>
        <SuggestionWrapper>
            <SuggestionHeading>Find Your Next Favourite</SuggestionHeading>
            <Suggestions/>
        </SuggestionWrapper>
    </>
  )
}

export default Fav