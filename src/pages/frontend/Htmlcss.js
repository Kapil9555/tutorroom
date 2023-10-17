import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Paper, Typography } from '@mui/material'

import TopBanner from '../../assets/TopBanner.jpg'
import web from '../../assets/web-design.jpg'
import core from '../../assets/corestrenth.jpg'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import hiring from '../../assets/hiring-modal-one.jpg'
import hiring2 from '../../assets/hiring-modal-two.png'
import hiring3 from '../../assets/hiring-modal-three.jpg'
import HubIcon from '@mui/icons-material/Hub';
import background8 from '../../assets/background-8.png'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import vector from '../../assets/vacter_right.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MAIN_COLOR } from '../../constant'
import useBottomBar from '../../utils/useBottomBar';
import BottomNavBar from '../../global/BottomNavBar';


const Htmlcss = () => {
    const { state } = useBottomBar();
    {state.currentScreenSize < 918 && <BottomNavBar />}
    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Container disableGutters maxWidth="xl">
                <Grid container sx={{ height: "400px", backgroundImage: `url(${TopBanner})`, bgcolor: 'rgb(90,90,90)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundBlendMode: "multiply", backgroundPosition: 'center' }}>
                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} sm={10} md={8} lg={7} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:'50px' }}>
                        <Box sx={{ width: "100%", lineHeight: "7", p: "10px" }}>
                            <Typography sx={{fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "900", color: "white" }}>
                                Hire HtmlCss Developer
                            </Typography>
                            <Typography sx={{ color: "white", fontSize:{lg:'16px', md:'15px', sm:'13px', xs:'13px'}, mt:'10px' }}>
                                Our HtmlCss developers streamline your business with next-gen web app development services.
                                Take your business to new heights with our HtmlCss app development services.
                            </Typography>
                            <Button variant='contained' sx={{ borderRadius: "25px", p: '10px 30px' }}>
                                Talk to Us
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ p: {lg:"10px", md:'10px', sm:'10px', xs:'2px'} , display:'flex', justifyContent:'space-around', alignItems:'center',overflow:"hidden"}}>
                   
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={7} sx={{display:'flex', justifyContent:'center', flexDirection:'column',p:'0px 40px' }}>
                        <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                            Hire HtmlCss developer rather than building an in-house team
                        </Typography>
                        <Typography sx={{ mt: "10px", fontSize:{ lg:"16px", xs:'15px'} }}>
                            If you desire to strengthen your business with a robust ecosystem that is light-weight, modern, and extensive, hire Angular JS developers with a stronghold on this platform. Many businesses are struggling to decide whether to choose an in-house team or hire a dedicated team. We suggest the latter option for businesses looking for a platform to avail the right skills and experience in a cost-effective way.
                        </Typography>
                        

                    </Grid>
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={4} sx={{ p: "15px", display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <Box sx={{  width:'400px ',height: "300px", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={web} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ bgcolor: "#002F96", p: "20px", display:'flex', justifyContent:'space-around', alignItems:'center',overflow:"hidden" }}>
                    
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={7} sx={{mt: "15px", display: "flex", justifyContent: "center"  }}>
                        <Box sx={{ lineHeight: "2.5" }}>
                            <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Our Core Strength
                            </Typography>
                            <Typography sx={{ mt: "10px", fontSize:{ lg:"17px", xs:'15px'}, color: "white", fontWeight: "500" }}>
                                Our tech-driven HtmlCss development team consist of :
                            </Typography>
                            <ul>
                                <li style={{ color: "white",fontSize:{ lg:"16px", xs:'14px'} }}>Skilled professionals with extensive knowledge and cross-domain experience.</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'} }}>Successful track record with hundreds of HtmlCss applications.</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'} }}>Varied engagement models to provide hourly, part-time, and full-time options.</li>
                                <li style={{ color: "white", fontSize:{ lg:"16px", xs:'14px'}}}>Committed to deliver quality solutions within expected time frame.</li>

                            </ul>
                            <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                                Talk to us
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-up' xs={12} md={5} lg={4} sx={{ mt: "15px", display: "flex", justifyContent: "center",alignItems:'center', p: "15px",overflow:"hidden" }}>
                        <Box sx={{  width:'400px ',height: "300px", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={core} height="100%" width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: '20px',overflow:"hidden" }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "60%" }}>
                            <Typography align='center' sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Key Differentiators
                            </Typography>
                            <Typography align='center' sx={{ fontSize: {lg:"16px", md:'16px',sm:'15px', xs:'15px'}, fontWeight: "400",  }}>
                                We are a leading HtmlCss development company in India that caters services for small to large business enterprises. What makes us stand apart is our competence, commitment, expertise, and experience.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} data-aos='fade-up'  sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <ImportantDevicesIcon sx={{ fontSize: "40px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: {lg:"19px", md:'19px', sm:'17px', xs:'17px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px", fontSize: {lg:"16px", xs:'15px'}, fontWeight: "400", }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
                <Grid container spacing={2} sx={{ bgcolor: "#002F96", p: "20px", mt: "20px",overflow:"hidden" }}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "70%", lg: "60%" } }}>
                            <Typography align='center' sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Hiring Models
                            </Typography>
                            <Typography align='center' sx={{ color: "white", fontSize: {lg:"16px", xs:'16px'}, fontWeight: "400", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                Explore the engagement models we offer to hire Angular JS developer for your project         </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: {lg:"20px", md:'20px', sx:'10px', xs:'0px'} }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Hourly-Basis
                            </Typography>
                            <Typography sx={{  fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers HtmlCss development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-left' xs={12} md={5} lg={2.9} sx={{ mt: {lg:"15px", xs:'22px'}, display: "flex", p: "15px", }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring} height="100%" width="100%" />
                        </Box>
                    </Grid>




                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item data-aos='fade-right' xs={12} md={5} lg={2.9} sx={{ mt: "15px", display: "flex", }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring2} height="100%" width="100%" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} lg={6} sx={{ mt: {lg:"15px", xs:'1px'}, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Part-Time Hiring
                            </Typography>
                            <Typography sx={{ fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers HtmlCss development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={0} sm={1} md={1.5} lg={2}></Grid>
                    <Grid item xs={12} md={5} lg={6} sx={{ mt: {lg:"15px", xs:'1px'}, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "2.5", height: "70%", pt: "20px" }}>
                            <Typography sx={{ fontSize: {lg:"25px", md:'24px', sm:'23px', xs:'22px'}, fontWeight: "800", color: "white" }}>
                                Full-Time Hiring
                            </Typography>
                            <Typography sx={{  fontSize: {lg:"17px", xs:'15px'}, lineHeight: "25px", textAlign: "left", color: "#fff" }}>
                                As the name suggests, the hourly-basis or pay-as-you-go model offers HtmlCss development services on an hourly basis. Billing is done per hour but you have to pay on a monthly basis while you can communicate via phone, email or Skype.
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item data-aos='fade-left' xs={12} md={5} lg={2.9} sx={{ mt: {lg:"15px", xs:'22px'}, display: "flex", p: "15px" }}>
                        <Box sx={{ height: "250px", width: "100%", borderRadius: "25px", overflow: "hidden" }}>
                            <img src={hiring3} height="100%" width="100%" />
                        </Box>
                    </Grid>




                </Grid>
                <Grid container sx={{overflow:"hidden"}}>
                    <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "60%" }}>
                            <Typography align='center' sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Hiring Process
                            </Typography>
                            <Typography align='center' sx={{ fontSize: {lg:"17px", xs:'15px'}, fontWeight: "400", }}>
                                Hire Angular Native Developer And/Or HtmlCss Developer In A Few Simple Steps. Discover How Our Process Works.
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "15px" }}>
                        <Grid container xs={12} sm={12} md={10} lg={8} spacing={3}>
                            {
                                [1, 1, 1, 1].map(() => {
                                    return (
                                        <Grid item data-aos='fade-up' xs={12} sm={6} md={6} sx={{ mt: "30px" }}>
                                            <Paper sx={{ borderRadius: "35px 10px 35px 10px", p: "15px" }} elevation={3}>
                                                <Box sx={{ bgcolor: "#f4f4f4", p: "13px", borderRadius: "100%", width: "fit-content", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <HubIcon sx={{ fontSize: "45px" }} />
                                                </Box>
                                                <Typography sx={{ fontSize: {lg:"19px", md:'19px', sm:'17px', xs:'17px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                                    Comprehensive skillset
                                                </Typography>
                                                <Typography sx={{ mt: "10px",  fontSize: {lg:"16px", xs:'15px'}, fontWeight: "400",  }}>
                                                    Get flawless, high-quality, and optimized codes which are written by expert PHP professionals to ensure that your application runs seamlessly.
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>
                </Grid>
                <Grid container sx={{ mt: "20px",overflow:"hidden", backgroundImage: `url(${background8})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", p: "20px" }}>
                   
                    <Grid  item xs={12} sm={12} md={11} lg={12} sx={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                        <Box sx={{ width: { xs: "100%", sm: "100%", md: "80%", lg: "70%" } }}>
                            <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Why Choose Us
                            </Typography>
                            <Typography sx={{ fontSize: {lg:"16px", xs:'15px'}, fontWeight: "400",  }}>
                                AdelSocial is the best destination to avail Angular web development and mobile development services. Here are a few reasons why you should hire HtmlCss developers from us:
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={0} sm={0} md={1} lg={2}></Grid>
                    <Grid item container xs={12} sm={12} md={10} lg={12} pl={"20px"} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}  >

                        {
                            [1, 1, 1, 1, 1, 1].map(() => {
                                return (
                                    <Grid container xs={12} sm={12} md={6} lg={5} sx={{ mt: "25px", }}>

                                        <Box>
                                            <Diversity1Icon sx={{ fontSize: "35px", mr: '10px' }} />
                                        </Box>

                                        <Grid item xs={8} >
                                            <Typography sx={{ color: MAIN_COLOR, fontWeight: "800", fontSize: "19px", lineHeight: "24px", marginBottom: "8px", fontFamily: "Tisa Sans Pro sans-serif !important" }}>
                                                Skill and experience:
                                            </Typography>
                                            <Typography sx={{ fontSize: {lg:"16px",xs:'15px'}, fontWeight: "400",  }}>
                                                Our HtmlCss team includes seasoned developers with extensive skills and rich experience in the entire JS frameworks.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Grid>

                <Grid container sx={{ backgroundImage: `url(${vector})`, p: "20px",overflow:"hidden" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography align='center' sx={{ fontSize: {lg:"29px", md:'27px', sm:'25px', xs:'20px'}, fontWeight: "800", color: "white" }} >
                            Planning to hire HtmlCss developers for your upcoming web development project?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button variant='contained' sx={{ mt: "10px", bgcolor: MAIN_COLOR, height: "50px", borderRadius: "25px", fontWeight: "800", p: '10px 30px' }}>
                            Let,s Talk
                        </Button>
                    </Grid>


                </Grid>
                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center",overflow:"hidden" }}>
                    <Box sx={{ width: { xs: "90%", sm: "90%", md: "67%", lg: "67%" } }}>
                        <Box>
                            <Typography sx={{ fontSize:{lg:'33px', md:'30px', sm:'30px', xs:'22px'}, fontWeight: "800", color: MAIN_COLOR }} >
                                Frequently Asked Questions
                            </Typography>
                        </Box>
                        <Box>
                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black", fontSize: "17px", fontWeight: {lg:"700", md:'700', sm:'700', xs:'700'} }}>
                                        How can I hire a HtmlCss developer?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{fontSize:{lg:'16px', xs:'15px'}}}>

                                        <ul>
                                            <li>Tell us the skills you are looking for your project. </li>
                                            <li>We will schedule a call with our top developer who can understand your requirements and concerns </li>
                                            <li>We assign a dedicated team or individual developer (considering the project demands)  </li>
                                            <li>Get started with your project development in no time.  </li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black",fontSize: "17px", fontWeight: {lg:"700", md:'700', sm:'700', xs:'700'} }}>
                                        What if I’m not satisfied with your Angular solution?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{fontSize:{lg:'16px', xs:'15px'}}}>

                                        You have the full right to report any kind of dissatisfaction with our solution. Our developers will do their best to resolve the issues to make the solution meet your requirements precisely.

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion elevation={0}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                    sx={{ p: "0px" }}
                                >
                                    <Typography sx={{ color: "black",fontSize: "17px", fontWeight: {lg:"700", md:'700', sm:'700', xs:'700'} }}>
                                        How can I receive updates on my project?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{fontSize:{lg:'16px', xs:'15px'}}}>

                                        We are available on all communication channels such as Microsoft Teams, Google Meet, Zoom Call, Phone, Live Chats, and Emails to keep you informed of the current status of your .NET development project.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Box>
                </Grid>
                <Footer />
            </Container>

        </>
    )
}
export default Htmlcss