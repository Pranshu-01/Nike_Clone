import { Box, styled } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel';

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

const ImageContainer=styled(Box)`
  flex:1;
`

const Image=styled('img')(({theme})=>({
    width: "100%",
    height:"90%",
    // maxHeight: "90vh",
    objectFit:"cover",
    borderRadius:"10px",
}))



const LeftImage = ({product,image}) => {
    
  return (
    <>
        <ImageContainer>
        <Carousel responsive={responsive}
          swipeable={true}
          draggable={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            {
              image.map((img)=>{
                // console.log(img);
                return (
                  <>
                    <Image src={img} alt="img" />
                  </>
                )
              })
            }
        </Carousel>
        </ImageContainer>
    </>
  )
}

export default LeftImage