import { Box,InputBase,Typography,styled } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/api'

const Container=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper=styled(Box)`
    color:#111;
    margin: 25px 0px 70px 0px;
    /* border:2px solid black; */
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Info=styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Logo=styled('img')({
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    width:"6.5vh",
})

const Title=styled(Box)`
    margin-top: 35px;
    font-size: 30px;
    /* font-weight: 700; */
    margin-bottom: 20px;
    line-height: 24px;
    font-family: 'Bebas Neue', sans-serif;
`

const Text=styled(Typography)`
    font-weight: 500;
    font-size: 15px;
    color:#696969;
    display: flex;
    justify-content: center;
    align-items: center;
    /* line-height: 24px; */
`

const Form=styled('form')`
    display: flex;
    padding:0px 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`

const Input=styled(InputBase)(({theme})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    border:"0.5px solid lightgray",
    fontWeight:"700",
    fontSize:"14px",
    padding:"5px 10px",
    borderRadius:"4px",
    width:"100%",
    margin:"10px 0px",
    color:"#111111"
}))

const FormButton=styled('button')({
    background:"#000000",
    fontFamily: "'Bebas Neue', sans-serif",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    color:"#ffffff",
    width:"100%",
    padding:"10px 10px",
    margin:"20px 0px",
    letterSpacing:"0.5px",    
    // fontWeight:"600",
    fontSize:"17px",
    border:"none",
    borderRadius:"4px",
    cursor:"pointer"
})

const Error=styled(Box)`
    width: 100%;
    color:#fe0000;
    font-size: 12px;
    font-weight: 500;
`


const Login = () => {
    const dispatch=useDispatch();

    const {error}=useSelector((state)=>state.user);

    const [data,setData]=useState({
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(dispatch,data);
    }

  return (
    <>
        <Container>
            <Wrapper>
                <Info>
                    <Link to="/">
                        <Logo src="https://pngimg.com/uploads/nike/nike_PNG11.png" alt="" />
                    </Link>
                    <Title>YOUR ACCOUNT FOR</Title>
                    <Title style={{marginTop:"0",lineHeight:"0"}}>EVERYTHING NIKE</Title>

                </Info>
                <Form onSubmit={handleSubmit}>
                    {error && <Error>Your email or password was entered incorrectly.</Error>}

                    <Input placeholder='Email address' type='email' name='email' onChange={handleChange} required/>
                    <Input placeholder='Password' type='password' name='password' onChange={handleChange} required/>
                    
                    {/* {error && <Error>Something went wrong</Error>} */}
                    
                    <Text style={{fontSize:"12px",marginTop:"10px"}}>By creating an account, you agree to Nike's Privacy Policy</Text>
                    <Text style={{fontSize:"12px"}}>and Terms of Use.</Text>
                    <FormButton>SIGN IN</FormButton>
                    <Text style={{fontSize:"12px"}}>Not a Member? <Link to="/register" style={{marginLeft:"5px",color:"#111"}}>Join Us.</Link></Text>
                </Form>
            </Wrapper>
        </Container>
    </>
  )
}

export default Login