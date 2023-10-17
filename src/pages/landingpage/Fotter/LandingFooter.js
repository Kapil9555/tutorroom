import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from '../../../assets/logoMainu.png';
import { MOBILE } from '../../../constant';
import { BG_COLOR, LANDING_COLOR } from '../config';

const LandingFooter = () => {
    const lookingSec = [
        "Adwords Management Sydney",
        "Adwords Management Perth",
        "Management Melbourne",
        "Adwords Management Brisbane"
    ]

    return (

        <Grid container sx={{ pb: '30px' }}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12} sx={{ bgcolor: LANDING_COLOR, p: "20px" }}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={9} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography align='center' sx={{ fontSize: { lg: "60px", xs: '30px' }, fontWeight: "800" }}>
                            <span>create business.</span> <span style={{ color: "white" }}>better everyday. </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button disableRipple variant='contained' sx={{ width: 'fit-content', border: `1px solid black`, transition: 'all 0.2s ease', bgcolor: BG_COLOR, color: 'white', p: { lg: '12px 24px', xs: '12px 24px' }, fontWeight: 900, borderRadius: '27px', textTransform: 'unset', fontSize: { lg: '16px', xs: '12px' }, '&:hover': { bgcolor: 'transparent', color: 'black' } }}>Let's Talk</Button>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item xs={12} sm={12} md={6} lg={3} sx={{ pl: "20px", mt: "20px" }}>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>Visit Us</Typography>
                    <Typography sx={{ mt: "25px", fontSize: "15px", color: "#151515", fontWeight: "500" }}>P -27, Shivalik RD, Malviya Nagar</Typography>
                    <Typography sx={{ mt: "8px", fontSize: "15px", color: "#151515", fontWeight: "500" }}>New Delhi- 110017</Typography>
                    <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: 900, color: "#4dabf5" }}>
                        <a style={{ color: LANDING_COLOR, textDecoration: "none" }} href={`tel:${MOBILE}`}>+91{MOBILE}</a>
                    </Typography>
                    <Typography sx={{ mt: "8px", fontSize: "15px", fontWeight: "bold", color: "#4dabf5" }}><b>Contact Us</b></Typography>

                </Box>
            </Grid>


            <Grid item xs={12} sm={12} md={12} lg={9} sx={{ mt: "20px", ml: { xs: '20px', lg: 0 } }}>
                <Grid container sx={{ justifyContent: "center" }}>

                    <Grid item xs={0} sm={0} lg={12} >
                    </Grid>

                    <Grid item xs={12} >
                        <Typography sx={{ fontSize: "30px", fontWeight: "700", color: "#151515" }}>Looking For</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{}}>
                    {/* footerMap */}
                        <Box sx={{ mt: "25px" }}>

                            {
                                lookingSec.map((ele,index) => {
                                    return (
                                        <Typography key={index} sx={{ mt: "8px", display: "flex", alignItems: "center", fontSize: "15px", color: "#151515", fontWeight: "500" }}><ArrowForwardIosIcon sx={{ fontSize: "18px", fontWeight: "800", color: "#4dabf5" }} />{ele}</Typography>

                                    )
                                })
                            }

                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{}}>
                        <Box sx={{ mt: "25px" }}>


                            {
                                lookingSec.map((ele,index) => {
                                    return (
                                        <Typography key={index} sx={{ mt: "8px", display: "flex", alignItems: "center", fontSize: "15px", color: "#151515", fontWeight: "500" }}><ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#4dabf5" }} />{ele}</Typography>

                                    )
                                })
                            }

                        </Box>
                    </Grid>



                    <Grid item xs={12} sm={6} md={6} lg={4} sx={{}}>
                        <Box sx={{ mt: "25px" }}>


                            {
                                lookingSec.map((ele,index) => {
                                    return (
                                        <Typography key={index} sx={{ mt: "8px", display: "flex", alignItems: "center", fontSize: "15px", color: "#151515", fontWeight: "500" }}><ArrowForwardIosIcon sx={{ fontSize: "18px", color: "#4dabf5" }} />{ele}</Typography>

                                    )
                                })
                            }

                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ border: "1px solid gray", mt: "20px" }}></Grid>



            
                <Grid item xs={12} >

                    <Grid container >

                        <Grid item xs={12} sm={12} md={12} lg={3} sx={{display:"flex",justifyContent:"center",mt:"15px" }}>
                            <Box sx={{ width: { lg: "300px", md: "300px", sm: "40%", xs: "60%"} }}>
                                <img src={logo} alt='logo' height="70px" width="100%" />
                            </Box>
                        </Grid>



                        <Grid item xs={12} sm={12} md={6} lg={5} sx={{ mt:"15px" ,display: "flex", justifyContent:"center",alignItems: "center"}}>
                            <Typography align='center' sx={{ display: "flex", alignItems: "center", fontSize:{xs:"14px",sm:"16px",md:"18px",lg:"18px"},fontWeight: "600" }}>
                                Copyright © 2023 AdelSocial | All rights reserved
                            </Typography>
                        </Grid>


                        <Grid item xs={12} sm={5} md={6} lg={4} sx={{ display: "flex", alignItems: "center",mt:"15px" }}>
                            <Grid container>

                                <Grid item xs={12} sm={12} md={6} sx={{ display: "flex", justifyContent:"center", alignItems: "center" }}>
                                    <Typography sx={{ color: "#cfcfcf", fontSize: "16px", mr: "15px", whiteSpace: 'nowrap', '&:hover': { color: 'black', cursor: 'pointer' } }}>
                                        Term & Conditions
                                    </Typography>
                                    <Typography sx={{ color: "#cfcfcf", fontSize: "16px", mr: "15px", '&:hover': { color: 'black', cursor: 'pointer' } }}>
                                        Privacy
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} sx={{ display: "flex",justifyContent:"space-between" }}>
                                    <Typography>
                                        <FacebookOutlinedIcon sx={{ color: LANDING_COLOR, fontSize: "40px", mr: "20px" }} />
                                    </Typography>
                                    <Typography>
                                        <TwitterIcon sx={{ color: LANDING_COLOR, fontSize: "40px", mr: "20px" }} />
                                    </Typography>
                                    <Typography>
                                        <LinkedInIcon sx={{ color: LANDING_COLOR, fontSize: "40px", mr: "20px" }} />
                                    </Typography>
                                    <Typography>
                                        <InstagramIcon sx={{ color: LANDING_COLOR, fontSize: "40px", mr: "20px" }} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default LandingFooter