import React from 'react'
import { categories } from '../../constants/data'
import CategoryItem from './CategoryItem'
import { Box, styled } from '@mui/material'

const Container=styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    padding:"40px 50px",
    [theme.breakpoints.down('md')]:{
        flexDirection:"column",
        padding:"40px 20px"
    }
}))

const Heading=styled(Box)(({theme})=>({
    fontSize: "24px",
    marginTop: "30px",
    display: "flex",
    padding: "0px 50px",
    [theme.breakpoints.down('md')]:{
        padding:"0px 20px"
    }
}))
    


const Categories = () => {
  return (
    <>
        <Heading>The Essential's</Heading>
        <Container>
            {
                categories.map((item)=>{
                    return(
                        <>
                            <CategoryItem item={item} key={item.id}/>
                        </>
                    )
                })
            }
        </Container>
    </>
  )
}

export default Categories