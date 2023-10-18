import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHead from '../global/SectionHead'
import angular from '../assets/angular2.png'
import flutter from '../assets/flutter2.png'
import python from '../assets/python.png'
import node from '../assets/node.png'
import wordpress from '../assets/wordpress.png'
import shopify from '../assets/shopify.png'
import reactjs from '../assets/reactjs.png'
import laravel from '../assets/laravel.png'
import fullstack from '../assets/full-stack.png'

import '../pages/Homepage.css'
import { Box, Container } from "@mui/material";
import { useContext, useState } from "react";
import { AdelContext } from "../store/Context";
import { useNavigate } from "react-router-dom";

const OurExpertise = () => {
    const [isMouseDown, setIsMouseDown] = useState(true)
    const navigate = useNavigate()
    const { state } = useContext(AdelContext)
    const services = [
        { title: '1:1 Live Tutoring', icon: wordpress, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Group Tutoring',  icon: python, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: '  k-12 Academic', icon: flutter, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'College/University', icon: shopify, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Professional Development Courses',  icon: reactjs, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Foreign Language',icon: laravel, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Test/Exam Prep', icon: angular, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        { title: 'Homework Help', icon: fullstack, desc: 'Drive your online business with robust capabilities of Shopify solutions.' },
        ].map((item) => {
            return <div  onMouseDown={() => (setIsMouseDown(false))} onMouseOut={() => (setIsMouseDown(true))} key={item.title} className="card-container">
                <div className="card">
                    <h2><strong>{item.title.length>18?item.title.slice(0, 17) + '...':item.title}</strong></h2>
                    <p>{item.desc}</p>
                    <div className="layers">
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                    </div>
                </div>
            </div>

        })
    return (

        <Box component={'div'} sx={{ padding: { lg: '20px', xs: '10px' }, width: '100%' }}>
            <SectionHead title={"OUR TUTORING EXPERTISE"} tagline={"Building Your Future with Expertise and Excellence"} />

            <Box component='div' className='scrollTechParent' sx={{ p: { lg: '40px', md: '40px', sm: '40px', xs: "30px 10px" }, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap', borderRadius: { lg: '100px', xs: '20px', sm: '100px', md: '100px' } }}>
                <Container disableGutters sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="scrollTech" style={{ width: state.currentScreenSize < 1000 && state.currentScreenSize > 800 ? '50%' : '100%', padding: '0px' }}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={state.currentScreenSize < 600 ? false : true}
                            autoPlay={isMouseDown}
                            autoPlaySpeed={2000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            customTransition="all 1s linear"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover={true}
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1,
                                    partialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                }
                            }}
                            rewind={true}
                            rewindWithAnimation={true}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            transitionDuration={1000}
                        >
                            {services}
                        </Carousel>
                    </div>
                </Container>


            </Box>


        </Box >

    )
}

export default OurExpertise