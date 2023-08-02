import { Box,styled } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Container=styled(Box)`
    background:#f5f5f5;
    color:#111;
    font-weight: 500;
    /* height: 70px; */
  `

  const Wrapper=styled(Box)(({theme})=>({
    padding: "10px 50px",
    [theme.breakpoints.down('md')]:{
      padding:"10px 20px"
    }
  }))
   
  

  const TextWrapper=styled(Box)`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  `

  const TopText=styled(Box)`
    /* padding: 5px; */
    font-size: 16px;
    padding: 2px;
  `

  const BottomText=styled(Box)`
    margin-top: 4px;
    font-size: 12px;
    padding: 2px;
    /* text-decoration: underline; */
  `

const BottomNavbar = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <Carousel responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    arrows={false}
                    // infinite={true}
                    rewind={true}
                    rewindWithAnimation={true}
                    autoPlay={true}
                    // customTransition="transform 500ms ease-in-out"
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                >
                    <TextWrapper>
                        <TopText>New Styles on Sale: Up to 40% Off</TopText>
                        <BottomText>Shop All Our New Markdowns</BottomText>
                    </TextWrapper>
                    <TextWrapper>
                        <TopText>Hello Nike App</TopText>
                        <BottomText>Download the app to access everything Nike</BottomText>
                    </TextWrapper>
                    <TextWrapper>
                        <TopText>Free Deleivery</TopText>
                        <BottomText>Applies to orders of ₹ 14 000.00 or more</BottomText>
                    </TextWrapper>
                </Carousel>
            </Wrapper>
        </Container>
    </>
  )
}

export default BottomNavbar