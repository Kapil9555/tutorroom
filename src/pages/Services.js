import React, { useContext } from 'react'
import hireDeveloper from '../assets/hireDeveloper.jpg'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import hireGirl from '../assets/N-career1.png'
import career1 from '../assets/career2.png'
import career2 from '../assets/career3.png'
import career3 from '../assets/career4.png'
import CoffeeIcon from '@mui/icons-material/Coffee';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import bannerNew from '../assets/footer-banner-new.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MAIN_COLOR } from '../constant'
import SendMessage from '../components/SendMessage'



const HireDevelopers = () => {
    const langauageMap = Array(18).fill(1)

    const netInfo3 = [{
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },

    ]

    const netInfo = [{
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Hire Dedicated Dot NET Developers",
        about: "Our dedicated Dot NET developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    return (

        <>


            <Header />
            <Container disableGutters maxWidth>
                <Grid container sx={{ backgroundImage: `url(${hireDeveloper})`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.5)", p: "50px", pt: '90px', }}>
                    <Grid item xs={2} sm={2} md={1} lg={1} >

                    </Grid>

                    <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ lineHeight: "10" }}>
                            <Box>
                                <Typography variant='h4' sx={{ fontWeight: "800", color: MAIN_COLOR }}>
                                    Hire Dedicated Developers
                                </Typography>
                                <Typography sx={{ color: "white", mt: "20px", fontSize: "18px" }}>

                                    Connect with us to get experts working dedicatedly on your project,<br /> just as you need!

                                </Typography>
                                <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                    <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }}>
                                        Hire .net developer
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: "15px", mt: "20px" }} spacing={3}>
                    <Grid item xs={0} sm={1} md={1} lg={1.8}></Grid>
                    <Grid item xs={12} md={5} lg={5.4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box >
                            <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Hire Expert Developers, Don’t Just Outsource
                            </Typography>
                            <Typography sx={{ mt: "10px", fontFamily: "montserratregular", lineHeight: "1.8" }}>

                                Hiring dedicated developers to work on your project can be easier than you think, as AdelSocial brings you a talented tool of professionals with expertise in different technologies. All you need to do is to get connected with us and share your requirements and we will be there to help. We have a team of 100+ professionals with rich and variant skill sets in a wide array of technologies that match the digital needs of businesses. Till date, we have catered to diverse development requirements of all sizes of businesses, from budding startups to established enterprises.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{ p: "15px" }}>
                        <Box sx={{ overflow: "hidden" }}>
                            <img src={hireGirl} alt='pic' width="100%" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: "15px" }} >
                    <Grid item xs={0} sm={0} md={1} lg={1.8}></Grid>
                    <Grid item xs={12} md={10.2} lg={10.2} >
                        <Box >
                            <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Why Hire Developers For Your Project? </Typography>
                            <Typography sx={{ mt: "10px", fontSize: "17px", fontFamily: "montserratregular", lineHeight: "1.8" }}>
                                A dedicated developer can help your business to embark on a digital transformation journey within a faster turnaround time and lesser cost. Here are the reasons to follow this approach.

                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container sx={{ mt: "20px", p: "15px", bgcolor: "#F4F4F4" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", m: "10px" }}>
                            <Box sx={{ height: "80px", width: "80px" }}>
                                <img src={career1} alt='pic' height="100%" width="100%" />
                            </Box>
                            <Typography sx={{ fontFamily: 'montserratbold', fontWeight: "800", fontSize: "30px", margin: "20px 0 0", color: MAIN_COLOR }}>
                                Flexibility
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", m: "10px" }}>
                            <Box sx={{ height: "80px", width: "80px" }}>
                                <img src={career2} alt='pic' height="100%" width="100%" />
                            </Box>
                            <Typography sx={{ fontFamily: 'montserratbold', fontWeight: "800", fontSize: "30px", margin: "20px 0 0", color: MAIN_COLOR }}>
                                Cost Savings
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", m: "10px" }}>
                            <Box sx={{ height: "80px", width: "80px" }}>
                                <img src={career3} alt='pic' height="100%" width="100%" />
                            </Box>
                            <Typography sx={{ fontFamily: 'montserratbold', fontWeight: "800", fontSize: "30px", margin: "20px 0 0", color: MAIN_COLOR }}>
                                Complete Control
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ p: "15px" }} >
                    <Grid item xs={0} sm={1} md={1} lg={1.8}></Grid>
                    <Grid item xs={12} md={10.2} lg={10.2} >
                        <Box >
                            <Typography sx={{ fontSize: "35px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Expertise – What Makes Us The Best Destination To Hire Full Stack Developers </Typography>
                            <Typography sx={{ mt: "10px", fontSize: "17px", fontFamily: "montserratregular", lineHeight: "1.8" }}>
                                We cater extensive expertise in a range of technologies to help businesses build optimal solutions that overcome their challenges and drive comprehensive growth.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container sx={{ mt: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid item container xs={12} sm={12} md={9} lg={8.1} spacing={3} p="20px">
                        {
                            langauageMap.map((_, index) => {
                                return (
                                    <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                                        <Paper sx={{ p: "15px" }} elevation={3}>
                                            <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "left", fontSize: "20px" }}><CoffeeIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "35px" }} />
                                                HIRE PROJECT MANAGER
                                            </Typography>

                                        </Paper>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Grid>


                <Grid container sx={{ bgcolor: "#002F96", mt: "20px" }}>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "68%", lg: "68%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: "white" }} >
                                AdelSocial Integrity
                            </Typography>
                        </Box>
                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "68%", lg: "68%" } }} spacing={3}>
                            {
                                netInfo3.map((ele, index) => {
                                    return (

                                        <Grid key={index} item xs={12} sm={12} md={6} lg={4} sx={{ p: "15px 10px 15px 10px", lineHeight: "2" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "white", height: "100px", width: "100px", borderRadius: "100%" }}>
                                                {ele.icon}
                                            </Box>
                                            <Typography sx={{ mt: "15px", color: "white", fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                            <Typography sx={{ wordSpacing: "2px", mt: "15px", color: "white" }}>{ele.about}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Grid>
                <Grid container>
                    <Grid item xs={1.8} mt="20px"></Grid>
                    <Grid item xs={10} mt="20px">
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "75%", lg: "75%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
                                Our Value Preposition
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                        <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "80%", lg: "75%" },justifyContent:"center" }} spacing={3}>
                            {
                                netInfo.map((ele, index) => {
                                    return (
                                        <Grid key={index} item xs={12} sm={6} md={3.4} lg={3.4} sx={{ borderLeft: `6px solid ${MAIN_COLOR}`, p: "15px 10px 15px 10px", lineHeight: "2", m: "15px" }}>
                                            <Box>
                                                {ele.icon}
                                            </Box>
                                            <Typography sx={{ fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                            <Typography sx={{ wordSpacing: "2px", mt: "10px" }}>{ele.about}</Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Box p="15px">
                    <img src={bannerNew} alt='pic' width="100%" />
                </Box>
                <SendMessage />
                <Footer />

            </Container>
        </>

    )
}

export default HireDevelopers