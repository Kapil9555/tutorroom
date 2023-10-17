import { Box, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import ship from '../../../assets/ship.jpg';
import landing1 from '../../../assets/landing1.jpg';
import landing2 from '../../../assets/landing2.jpg';
import landing3 from '../../../assets/landing3.jpg';
import landing4 from '../../../assets/landing4.jpg';
import hover from '../../../assets/hover.png';
import hover1 from '../../../assets/hover1.png';
import hover2 from '../../../assets/hover2.png';
import hover3 from '../../../assets/hover3.png';
import hover4 from '../../../assets/hover4.png';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { BG_COLOR, LANDING_COLOR } from '../config';
import quote from '../../../assets/quote.png'
import sr from '../../../assets/sr.jpg'
import bjp from '../../../assets/bjp.jpg'
import avtar from '../../../assets/images.png'
import svg1 from '../../../assets/svg1.png'
import svg2 from '../../../assets/svg2.png'
import svg3 from '../../../assets/svg3.png'
import svg4 from '../../../assets/svg4.png'

const imgdata = [
    {
        id: 1,
        img: landing1,
        text: 'SUBARU',
        img1: hover1
    },
    {
        id: 2,
        img: landing2,
        text: 'KUSTOM TIMBER',
        img1: hover2
    },
    {
        id: 3,
        img: landing3,
        text: 'PURE RUNNING',
        img1: hover3
    },
    {
        id: 4,
        img: landing4,
        text: 'THE JERKY CO',
        img1: hover4
    }
]

const OurWork = () => {
    const [change, setChange] = useState(false)
    const [ChangeOnHover, setChangeOnHover] = useState(false)

    const changeHandler = () => {
        setChange(true)
    }
    const changeTextHandler = () => {
        setChange(false)
    }

    const changeHandlerOnHover = (ele, index) => {
        setChangeOnHover(ele.id);

    }
    const changeTextHandlerOnHover = (ele, index) => {
        setChangeOnHover('')

    }



    return <>
        <Grid container>
            <Grid item xs={12} sx={{ bgcolor: BG_COLOR }}>
                <Grid container  >
                    <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, height: '5px', padding: '20px' }}>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: '3.5rem', padding: '0px 20px' }}>
                        <Typography variant='h2' sx={{ color: LANDING_COLOR, fontSize: '60px', fontWeight: '600' }}>Our Works</Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ padding: '0px 20px' }}>
                        <Typography variant='h2' sx={{ fontSize: '35px', color: 'white', fontWeight: "600" }}>We're here to tell your story</Typography>

                    </Grid>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px', mt: '2.5rem' }}>
                        <Grid item lg={5.5} md={5.5} sm={12} xs={12} >
                            <Typography variant='h2' sx={{ color: 'white', fontSize: { lg: '33px', md: '33px', sm: '30px', xs: '22px' }, wordSpacing: '3px', mt: '6px' }}>Your story is the essence of why people buy your product or engage your service. It’s the special little bit that takes someone from considering their options, to taking the plunge with a particular business.</Typography>

                        </Grid>
                        <Grid item lg={2.6} md={2.6} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                            <Typography sx={{ fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '15px' }, color: 'white', wordSpacing: '2px', fontFamily: 'BlinkMacSystemFont' }}>A story is how you build trust, and connect with your customers. It’s the difference between cheap and low quality, or a great deal on a great product. </Typography>
                            <Typography sx={{ fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '15px' }, color: 'white', wordSpacing: '2px', mt: '15px', fontFamily: 'BlinkMacSystemFont' }}>Our work as digital marketing consultants is telling your story. A story like that isn’t something that happens overnight, in one sitting or even in one revision. It’s not a process that can be scaled up and mass produced- it’s a journey, and an artform.</Typography>

                        </Grid>
                        <Grid item lg={2.6} md={2.6} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                            <Typography sx={{ fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '15px' }, color: 'white', wordSpacing: '2px', fontFamily: 'BlinkMacSystemFont' }}>A rich, engaging and vibrant story told with passion and vigour is what transforms your business from a place transactions occur, to something that people hold on to, and keep coming back to time and again. It’s the secret ingredient that creates loyal customers and leaves them craving more.</Typography>
                            <Typography sx={{ fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '15px' }, color: 'white', wordSpacing: '2px', mt: '2rem', fontFamily: 'BlinkMacSystemFont' }}>Let us tell your story.</Typography>

                        </Grid>

                    </Grid>




                </Grid>
                <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>
                    <Grid item lg={5.5} md={5.5} sm={12} xs={12} sx={{ backgroundImage: `url(${ship})`, backgroundSize: 'cover', backgroundPosition: 'center', height: { lg: '620px', md: '600px', sm: '450px', xs: '350px' }, display: 'flex', alignItems: 'flex-end', boxShadow: 'inset 1px 1px 49px 0px rgba(0,0,0,0.75)', cursor: 'pointer', backgroundColor: change === true ? 'rgb(90,90,90)' : 'transparent', backgroundBlendMode: change === true ? "multiply" : '' }}>
                        <Box sx={{ width: '96.5%', padding: '10px', height: '100%', }} onMouseOver={changeHandler} onMouseOut={changeTextHandler}>
                            <Box sx={{ width: '100%', height: '90%', display: change === true ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>

                                <img src={hover} alt='N' height={'60%'} width={'70%'} />

                            </Box>
                            <Box sx={{ width: '100%', height: '10%', display: change === false ? 'flex' : 'none', justifyContent: 'space-between', alignItems: 'center', mt: '10px' }}>


                                <Typography sx={{ color: 'white', fontSize: { lg: '22px', md: '20px', sm: '17px', xs: '16px' }, fontWeight: '900', fontFamily: 'sans-serif', }}>THE TRUE NORTH</Typography>
                                <TrendingFlatIcon sx={{ color: 'white', fontSize: { lg: '45px', md: '45px', sm: '40px', xs: '35px' } }} />

                            </Box>
                        </Box>


                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            {
                                imgdata.map((ele, index) => {
                                    return (
                                        <Grid item xs={5.5} sx={{ backgroundImage: `url(${ele.img})`, backgroundSize: 'cover', height: { lg: '300px', md: '280px', sm: '240px', xs: '150px' }, m: '0px 0px 18px 0px', display: 'flex', alignItems: 'flex-start', boxShadow: 'inset 1px 1px 49px 0px rgba(0,0,0,0.75)', cursor: 'pointer', backgroundColor: ChangeOnHover === imgdata[index].id ? 'rgb(90,90,90)' : 'transparent', backgroundBlendMode: ChangeOnHover === imgdata[index].id ? 'multiply' : '' }} >
                                            <Box onMouseOver={() => changeHandlerOnHover(ele, index)} onMouseOut={() => changeTextHandlerOnHover(ele, index)} sx={{ width: '100%', height: '100%', }}>



                                                <Box sx={{ display: ChangeOnHover === imgdata[index].id ? 'none' : 'flex', justifyContent: 'space-between', alignItems: 'center', width: { lg: '95%', md: '92%', sm: '90%', xs: '90%' }, padding: '10px', }}>

                                                    <Typography sx={{ color: 'white', fontSize: { lg: '17px', md: '15px', sm: '15px', xs: '13px' }, fontWeight: '900', fontFamily: 'sans-serif' }}>{ele.text}</Typography>
                                                    <TrendingFlatIcon fontSize='large' sx={{ color: 'white', }} />

                                                </Box>
                                                <Box sx={{ height: '100%', width: '100%', display: ChangeOnHover === imgdata[index].id ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                                                    <img src={ele.img1} alt='img' height={'70%'} width={'70%'} />

                                                </Box>
                                            </Box>

                                        </Grid>
                                    )
                                })
                            }

                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </Grid >
    </>
}
const Testomonials = () => {
    return (
        <>
            <Grid container sx={{ overflow: "scroll" }}>
                <Grid item xs={12} sx={{ mt: '20px' }}>
                    <Typography textAlign={'center'} variant='h1' color={LANDING_COLOR} sx={{ fontWeight: 900, fontSize: { lg: '54px', xs: '40px' }, letterSpacing: '0px', lineHeight: 1.43 }}>Happy Clients</Typography>
                    <Typography textAlign={'center'} m={'6px'} sx={{ fontSize: { lg: '20px', xs: '20px' } }} fontWeight={600}>What our clients says about us</Typography>
                </Grid>
                <Grid container sx={{ overflow: "scroll" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "80%", p: "20px", display: "flex", justifyContent: "center" }}>
                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)" } }}>
                                <Paper sx={{ height: "400px", width: "300px", p: "10px", m: "7px" }} elevation={3}>
                                    <Typography align='center' sx={{ p: "10px" }}>
                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                    </Typography>
                                    <Box sx={{ height: "43%" }}>
                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“One of the best social media agency in Delhi. They manage social media of their clients with skills. Have great knowledge on paid advertisements. Most recommended advertising agency.”</Typography>
                                    </Box>
                                    <Box >
                                        <Box sx={{ borderRadius: "50px", mt: "15px" }}>
                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                <Box><img src={sr} alt="sr" /></Box>

                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content" }}>Mr Sanjay Suleman Client</Typography>
                                            </Box>
                                            <Box sx={{ p: "10px" }}>
                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>


                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)" } }}>
                                <Paper sx={{ height: "400px", width: "300px", p: "10px", m: "7px" }} elevation={3}>
                                    <Typography align='center' sx={{ p: "10px" }}>
                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                    </Typography>
                                    <Box sx={{ height: "43%" }}>
                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“One of the best digital marketing agency. Strongly recommended adelsocial to get the things done the way you want!.”</Typography>
                                    </Box>
                                    <Box>
                                        <Box sx={{ borderRadius: "50px", mt: "15px" }}>
                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                <Box>
                                                    <img src={bjp} alt="bjp" />
                                                </Box>
                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Chandrashekhar Bawankule Client (BJP) Leader</Typography>
                                            </Box>
                                            <Box sx={{ p: "10px" }}>
                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>


                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: "scale(1.1)" } }}>
                                <Paper sx={{ height: "400px", width: "300px", p: "10px", m: "7px" }} elevation={3}>
                                    <Typography align='center' sx={{ p: "10px" }}>
                                        <img src={quote} alt="quote" height="50px" width="50px" />
                                    </Typography>
                                    <Box sx={{ height: "43%" }}>
                                        <Typography align='center' sx={{ fontSize: "18px", fontWeight: "500" }}>“one of the best digital marketing Agency in Delhi. They help with 360-degree digital solutions for every type of business. Great work by Adelsocial.”</Typography>
                                    </Box>
                                    <Box>
                                        <Box sx={{ mt: "15px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Box sx={{ height: "fit-content", width: "fit-content", borderRadius: "50px", overflow: "hidden" }}>
                                                    <img src={avtar} alt="parsal" height="45px" width="55px" />
                                                </Box>
                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Harkirat Oberoi Client</Typography>
                                            </Box>
                                            <Box sx={{ p: "10px" }}>
                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "40px" }} size='large' disabled />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
const HowWeDo = () => {

    return <>
        <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, height: '10px', padding: '10px' }}>
        </Grid>
        <Grid container sx={{ padding: '50px 20px' }}>
            <Grid item sx={{ mb: '40px' }}>
                <Typography color={LANDING_COLOR} sx={{ fontSize: { lg: '67px', xs: '40px' }, fontWeight: 900 }}>this is how we do it</Typography>
                <Typography sx={{ fontWeight: 900, fontSize: { lg: '67px', xs: '25px' }, mt: '-15px' }}>our web development services</Typography>
            </Grid>
            <Grid container >
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px' }}>
                    <img src={svg1} alt="Seo" />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>SEO</Typography>
                    <Typography paragraph>
                        Be found online by using our smart and Google friendly SEO tactics. If you found us by searching “digital marketing Perth” or “digital marketing services” rest assured that we could do the same for your business. Our team of SEO experts guarantees qualified rankings and increased site traffic.
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '80px' } }}>
                        <Box sx={{ width: '100px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Seo Services</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px' }}>
                    <img src={svg2} alt="app development" />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>App Development</Typography>
                    <Typography paragraph>
                        Whether you are looking to test the viability of a product or want to push your existing Google Ads to another level, our Google AdWords Agency In Perth will guide your business to what really matters, increased leads, more sales and sustained growth.
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '180px' } }}>
                        <Box sx={{ width: '200px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>App Development Projects</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px', mr: '30px' }}>
                    <img src={svg3} alt="web design" />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Web Design</Typography>
                    <Typography paragraph>
                        Beautifully designed and built with the end in mind. A Dilate website will drive leads and generate sales. Whether you are looking to build your brand or wanting to increase your leads and generate more sales the team at Dilate can help.
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '140px' } }}>
                        <Box sx={{ width: '150px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Web Design Services</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={2.7} sx={{ p: '10px' }}>
                    <img src={svg4} alt="hosting" />
                    <Typography sx={{ fontWeight: 900, mt: '10px', mb: '20px' }}>Hosting</Typography>
                    <Typography paragraph>
                        Launching a new product? Find traditional marketing too expensive? Digital marketing is the way to go and build your brand! Facebook, GDN and Video Advertising solutions that reach millions online for a very affordable cost!
                    </Typography>
                    <Box sx={{ borderBottom: `4px solid ${LANDING_COLOR}`, width: '30px', pb: '6px', cursor: 'pointer', transition: 'all 0.37s ease', '&:hover': { width: '120px' } }}>
                        <Box sx={{ width: '120px' }}>
                            <Typography sx={{ fontWeight: 900, color: LANDING_COLOR }}>Hosting Services</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, height: '0px', padding: 'px' }}>
        </Grid>
    </>
}

const MainContent = () => {
    return (<>
        <HowWeDo />
        <OurWork />
        <Testomonials />
    </>
    )
}

export default MainContent