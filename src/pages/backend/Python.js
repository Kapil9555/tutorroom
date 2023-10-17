import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, OutlinedInput, Paper, Typography } from '@mui/material'
// import orange from '../../assets/orange.jpg'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import orangenet from '../../assets/orangeDotNet.jpg';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LuggageIcon from '@mui/icons-material/Luggage';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DomainIcon from '@mui/icons-material/Domain';
import card1 from '../../assets/dotnetcard1.jpg'
import card2 from '../../assets/dotnetcard2.jpg'
import card3 from '../../assets/dotnetcard3.jpg'
import PsychologyIcon from '@mui/icons-material/Psychology';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { MAIN_COLOR } from '../../constant';
import SendMessage from '../../components/SendMessage';
import '../Homepage.css'
import BottomNavBar from '../../global/BottomNavBar';
import useBottomBar from '../../utils/useBottomBar';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';





const Python = () => {
    
    const { state } = useBottomBar()
    const netInfo = [{
        icon: <PeopleOutlineIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <AssignmentIndIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <SettingsSuggestIcon sx={{ color: 'white', fontSize: "50px" }} />,
        title: "Hire Dedicated Python Developers",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    const CheckBoxData = [
        "Shorter Development Time",
        "Higher Level of Security",
        "Simple Integration",
        "Enhanced scalability",
        "Supported by Microsoft",
        "Easy Deployment",
        "Cross-platform Compatibility",
        "Multilingual Support",
        "Huge Developer Community",
        "Simplicity of development",
    ]

    const Technologies1 = ["ASPPython MVC", " Python Core", " Python Core Rest API", "C#", " Python Framework 4.8", " Python Framework 4.7", " Python Framework 4.6", " Python Framework 4.5", " Python Framework 4.0", "  VBPython", "  Microservices", "  VS Add-ins", "  Azure Development", "  WinForms", "  WPF", "  WCF Services", "  WCF Data Services", "  JSON", "  SOAP", "  REST API", "  Kendo UI", "  SQL Server 2019", "  2017", "2016", "2014", "2012"]

    const Technologies3 = ["AuthorizePython ", " Stripe", " PayPal", "CareConnect", "Adyen", "FirstData", "MiGS", "DocuSign ", " Chart (amChart", " Google", "D3.js ", "Echarts", "AWS &amp; Azure Services ", "Google Map Services", " Live Streaming Services "]

    const Technologies2 = [" MS Test ", " Selenium", " nUnit Test", " xUnit Test"]

    const AllBuisness = [{
        icon: <ApartmentIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Healthcare"
    },
    {
        icon: <ChairAltIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Education & E-Learning"
    },
    {
        icon: <AddShoppingCartIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Retail & E-Commerce"
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Banking & Finance"
    },
    {
        icon: <LuggageIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Travel & Tourism"
    },
    {
        icon: <LiveTvIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Media & Entertainment"
    },

    {
        icon: <LocalShippingIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Transport & Logistics"
    },

    {
        icon: <DomainIcon sx={{ fontSize: "60px", color: MAIN_COLOR }} />,
        name: "Real Estate"
    },

    ]

    const netInfo2 = [{
        icon: <PeopleOutlineIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: MAIN_COLOR, fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },]

    const netInfo3 = [{
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PeopleOutlineIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Team Selection",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <PsychologyIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Interview",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <BackupTableIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Agreement",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    {
        icon: <DescriptionIcon sx={{ color: "black", fontSize: "50px" }} />,
        title: "Project Kick-off",
        about: "Our dedicated Python developers build robust, scalable, and secure web portals, desktop apps, and CMS for enterprises that are built to meet their business objectives."
    },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
        {state.currentScreenSize < 918 && <BottomNavBar />}
        <Header />

        <Container disableGutters maxWidth={'xl'}>
            <Grid container>
                <Grid item xs={12} sx={{ backgroundImage: `url('https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dot-net-developer.jpg')`, backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "cover", bgcolor: "rgba(0, 0, 0, 0.8)", p:{lg:"50px",md:"50px",sm:"30px 15px",xs:"30px 10px"} }}>

                    <Grid container sx={{ p: "10px" }}>
                        <Grid item xs={2} sm={2} md={1} lg={1} >

                        </Grid>

                        <Grid item xs={12} sm={12} md={10} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ lineHeight: "10", pt: '40px' }}>
                                <Box>
                                    <Typography variant='h3' sx={{ fontWeight: "800", color: "white", fontSize: { lg: '50px', xs: '30px' } }}>
                                        Hire Python <Box style={{ color: MAIN_COLOR, fontWeight: 900, fontSize: { lg: '80px', xs: '40px' }, backgroundColor: 'black', padding: '0px 0px', borderRadius: '10px', width: 'fit-content' }}>Developers</Box>
                                    </Typography>
                                    <Typography sx={{ color: "white", mt: "20px", fontSize: { lg: "15px", xs: '13px', md: '18px' } }}>
                                        Get Zero Headache Python Developers who are ready to take your project within 24 hours and carry out project development efficiently by following the best Python development practices. We, at AdelSocial, leave no stone unturned in delivering bug-free and high-performance Python solutions.
                                    </Typography>
                                    <Box sx={{ mt: "40px", display: "flex", justifyContent: { xs: "center", sm: "center", md: "center", lg: "left" } }}>
                                        <Button variant='contained' sx={{ textTransform: 'unset', bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "16px", fontWeight: "800", p: "10px 40px", "&:hover": { bgcolor: MAIN_COLOR } }}>
                                            Hire Now
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={5} sx={{ mt: { xs: "70px", sm: "70px", md: "70px", lg: "35px" }, display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                                <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "65%", lg: "65%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                                    <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                            <Typography align='center' sx={{ color: "white",whiteSpace:"nowrap", fontSize:{xs:"13px"}, bgcolor: MAIN_COLOR }}>
                                                Request a free quote
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                                    <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                                    <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                        submit
                                    </Button>

                                </Paper>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid item xs={12} lg={5} sx={{ mb: "20px", mt: { xs: "30px", sm: "30px", md: "30px", lg: "35px" }, display: { xs: "block", sm: "block", md: "block", lg: "none" } }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <Paper sx={{ height: "fit-content", width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, lineHeight: "4.5", p: "0px 14px 14px 14px " }}>
                            <Box sx={{ mt: "-20px", borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box sx={{ p: "20px", borderRadius: "15px", bgcolor: MAIN_COLOR, width: "60%" }}>
                                    <Typography align='center' sx={{ color: "white",whiteSpace:"nowrap", fontSize:"15px", bgcolor: MAIN_COLOR }}>
                                        Request a free quote
                                    </Typography>
                                </Box>
                            </Box>
                            <OutlinedInput placeholder='Full Name' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Buisness Email Address' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Phone Number' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Oragnisation/Institution' fullWidth sx={{ height: "40px" }} />
                            <OutlinedInput placeholder='Message' fullWidth sx={{ height: "40px" }} />

                            <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, fontSize: "17px", borderRadius: "25px", fontWeight: "800", p: "10px 15px 10px 15px", "&:hover": { bgcolor: MAIN_COLOR } }} fullWidth>
                                submit
                            </Button>

                        </Paper>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant='h3'></Typography>
                </Grid>
            </Grid>


            <Grid item xs={12} sx={{ pb: "40px", bgcolor: "#f1f1f1", display: "flex", justifyContent: "center" }}>
                <Box sx={{ borderRadius: '60px', boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', bgcolor: 'white', width: { xs: "95%", sm: "95%", md: "95%", lg: "80%" }, mt: "50px", p: '30px' }}>
                    <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                        Looking to Hire Python Developers? You’re at the Right Spot
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '12px', lg: '16px', }, color: '#212121',mt:"10px" }}>
                        Are you in pursuit of a dedicated Python developer for your project? Our highly-qualified Python developers are just a click away. We have a pool of talented, proactive, and competent Python developers who have great expertise in Python development and can deliver tailored solutions to meet your unique business requirements. Our dedicated Python Developers follow a neatly refined and up-to-the-mark technical approach. You can hire highly skilled Python developers at AdelSocial as we have built proficiency in Python development over years with our extensive web development experiences. All these years, we have focused on accumulating the best Python developers from different regions to offer you to hire Python developers to meet your project goals using vast knowledge and skills.
                        <br />
                        <br />
                        With our first-rate hire Python developer services, you are given the liberty to choose a Python developer from our team of Python programmers with different levels of expertise and experience. We can help you fulfill all your business requirements and objectives by letting you hire Python programmers, in the best equations of time and cost. Hiring Python developers, at AdelSocial, means you are relieved from unnecessary cost-bills, stress, and solutions with superior quality and performance.
                    </Typography>
                </Box>
            </Grid>
            <Box sx={{ p: "20px 10px", display:'flex', justifyContent:'center',alignItems:'center' }}>
                <Grid className='dotnetPage'  container sx={{ borderRadius: "60px", pb: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: { xs: "100%", sm: "99.2%", md: "99%", lg: "83%" } }}>
                    <Grid item xs={12} sx={{  mb: "20px", display: "flex", justifyContent: "center" ,borderRadius:'20px' }}>
                        <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                            <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Complete Suite of Python Development Services
                            </Typography>
                            <Typography sx={{ color: 'white', fontSize: { xs: '12px', lg: '18px' } }}>
                                Our Python development services include everything from Python web app development to Python CMS development to desktop app development and much more. Dedicated Python developers at AdelSocial are highly skilled and capable of building high-end Python solutions that will take your business a few notches higher.
                            </Typography>

                        </Box>
                    </Grid>

                    <Grid container sx={{ width: '100%', display:'flex', justifyContent:'center', alignItems:'center' }} spacing={2}>
                        {
                            netInfo.map((ele) => {
                                return (

                                    <Grid item xs={12} sm={6} md={3} lg={3} data-aos='fade-up' sx={{ borderLeft: `6px solid ${MAIN_COLOR}`, p: "15px 10px 15px 10px", lineHeight: "2", m: "15px" }}>
                                        <Box>
                                            {ele.icon}
                                        </Box>
                                        <Typography sx={{ fontWeight: "800", fontSize: "20px", wordSpacing: "2px", letterSpacing: "px", color: MAIN_COLOR }}>{ele.title}</Typography>
                                        <Typography sx={{ wordSpacing: "2px", mt: "10px", color: 'white', fontSize: { xs: '12px', lg: '15px' } }}>{ele.about}</Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Box>

            <Grid item xs={12} sx={{ pb: "40px", bgcolor: "#f1f1f1", display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt:"15px",textAlign:{xs:"",sm:"",md:"center",lg:"center"} }}>
                    <Typography sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "900", color: MAIN_COLOR }} >
                        Why Hire Python Programmers for Your Web Development Project?
                    </Typography>
                    <Typography sx={{ mt: "14px",fontSize: { xs: '12px', lg: '16px'} }}>
                        The Python software framework, developed by Microsoft, has gained popularity in the web development industry as it allows the creation of feature-rich web applications in a quick time. Here are a few reasons why you should opt for Python development for your web development project.
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        <Box data-aos='fade-up' sx={{ mt: "20px", height: { xs: "300px", sm: "300px", md: "380px", lg: "420px" } }}>
                            <img src={orangenet} style={{ borderRadius: '90px', boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', }} alt='pic' height="100%" width="100%" />
                        </Box>
                        <Box sx={{ml:'30px'}}>
                            {
                                CheckBoxData.map((ele) => {
                                    return (
                                        <Typography data-aos='fade-up' sx={{ ml: { xs: "0px", sm: "0px", md: "20px", lg: "20px" }, display: "flex", alignItems: "center", mt: "13px", color: '#212121', fontWeight: 900 }}>
                                            <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "17px" }} />
                                            {ele}
                                        </Typography>
                                    )
                                })
                            }

                        </Box>
                    </Box>
                </Box>
            </Grid>
            

            <Grid className='dotnetPage' item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center", mt: '0px', pt: '30px' }}>
                <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }}>
                    <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                        Python Technologies We Use
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '12px', lg: '16px'},color: 'white'  }}>Our Python developers have an iron grip of core and advanced Python technologies to facilitate the agile development of quality-oriented web apps for your business. Some of the cutting-edge Python technologies and tools we work on include:</Typography>

                    <Box>
                        <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, color: MAIN_COLOR, m: "30px 0px" }} >
                            Python Technologies
                        </Typography>
                        <Grid container spacing={2}>
                            {
                                Technologies1.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ borderRadius: '10px', boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)',p:'0px 10px 10px 0px ' }}>
                                            <Paper sx={{ display: 'flex', justifyContent: 'center', border: "2px solid #e0e0e0", height: "75px", borderRadius: "18px" }} elevation={7}>
                                                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: 900, color: MAIN_COLOR }}>
                                                    <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid> 
                    </Box>

                </Box>

            </Grid>

            <Grid className='dotnetPage' item xs={12} sx={{ pb: "15px",display:'flex', justifyContent:'center'  }}>
                <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, }}>
                    <Box>
                        <Typography sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, m: '30px 0px', fontWeight: "900", color: MAIN_COLOR }} >
                            Application Testing Tools
                        </Typography>
                        <Grid container spacing={2} >
                            {
                                Technologies2.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={6} lg={3} sx={{ borderRadius: '10px', boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)',p:'0px 14px 15px 0px'  }}>
                                        <Paper sx={{ display: 'flex', justifyContent: 'center', border: "2px solid #e0e0e0",  height: "75px", borderRadius: "18px" , }} elevation={2}>
                                            <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: 900, color: MAIN_COLOR }}>
                                                <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Box>

                </Box>
            </Grid>


            <Grid className='dotnetPage' item xs={12} sx={{ pb: "15px", display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, }}>
                    <Box>
                        <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, m: '30px 0px', fontWeight: "800", color: MAIN_COLOR }} >
                            Payment Gateway Integrations
                        </Typography>
                        <Grid container spacing={2}>
                            {
                                Technologies3.map((ele) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ borderRadius: '10px', boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)',p:'0px 10px 10px 0px' }}>
                                            <Paper sx={{ display: 'flex', justifyContent: 'center', border: "2px solid #e0e0e0", p: "10px", height: "75px", borderRadius: "18px" }} elevation={2}>
                                                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: 900, color: MAIN_COLOR }}>
                                                    <CheckBoxIcon sx={{ mr: "8px", color: MAIN_COLOR, fontSize: "25px" }} />{ele}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ pb: "15px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: '80px' }}>
                    <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "20px" }}>
                        <Typography sx={{fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                            We Build Scalable Python Solutions for All Business Verticals
                        </Typography>
                        <Typography sx={{ textAlign: { xs: "", sm: "", md: "center", lg: "center" },fontSize: { xs: '12px', lg: '16px'}, mt: "20px" }}>
                            When you hirePython app developers from AdelSocial, you hire a team ofPython specialists that holds expertise in developingPython solutions for a diverse range of industry verticals.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
                    <Grid container sx={{ width: { xs: "99%", sm: "99%", md: "70%", lg: "80%" }, display:'flex', justifyContent:'space-between', alignItems:'center', bgcolor:'black', borderRadius:'10px'}} >
                        {
                            AllBuisness.map((ele) => {
                                return (
                                    <Grid item xs={12} sm={12} md={6} lg={2.8} sx={{ boxShadow: '1px 1px 5px 0px rgba(65,100,240,1)',m:'5px', m:'10px 9px' ,borderRadius:'10px'}} >
                                        <Box data-aos='fade-up' sx={{height:'210px', bgcolor:'black',borderRadius:'10px', border:'1px solid #0277bd'}}>
                                            <Box sx={{ p: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                {ele.icon}
                                                <Typography align='center' sx={{ fontSize: "28px", fontWeight: "800", color: 'white' }}>{ele.name}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: { xs: "100%", sm: "90%", md: "70%", lg: "70%" }, mt: "10px" }}>
                    <Grid item container>
                        <Grid item xs={12}>
                            <Typography align='center' sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: MAIN_COLOR }} >
                                Our Flexible Engagement Models
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ maxWidth: 400, p: "15px", m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', }} elevation={5}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        width="300"
                                        image={card1}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                            FullTime/PartTime Hiring
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>



                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ maxWidth: 400, p: "15px", m: "15px" , boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)'}} elevation={5}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        width="300"
                                        image={card2}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                            FullTime/PartTime Hiring
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Card sx={{ maxWidth: 400, p: "15px", m: "15px", boxShadow: '3px 4px 21px 1px rgba(0,0,0,0.75)', }} elevation={5}  >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        width="300"
                                        image={card3}
                                        alt="green iguana"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom sx={{ fontSize: "25px", fontWeight: "800", color: MAIN_COLOR }} >
                                            Hire Python Developer by Hour
                                        </Typography>
                                        <Typography sx={{ fontSize: '14px' }}>
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ bgcolor: "#002F96" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" }, mt: "50px" }}>
                        <Typography sx={{ fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"}, fontWeight: "800", color: "white" }} >
                            Hire Python Developers at AdelSocial in 4 Easy Steps
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
                    <Grid container sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }} spacing={3}>
                        {
                            netInfo3.map((ele) => {
                                return (

                                    <Grid item xs={12} sm={12} md={6} lg={3} sx={{ p: "15px 10px 15px 10px", lineHeight: "2" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "white", height: "100px", width: "100px", borderRadius: "100%" }}>
                                            {ele.icon}
                                        </Box>
                                        <Typography sx={{ mt: "15px", color: "white", fontWeight: "800",wordSpacing: "2px", letterSpacing: "px" }}>{ele.title}</Typography>
                                        <Typography sx={{ wordSpacing: "2px", mt: "15px", color: "white",fontSize: { xs: '12px', lg: '16px'}, }}>{ele.about}</Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Grid>


            <SendMessage />
            <Grid item xs={12} sx={{ pb: "40px", display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: { xs: "90%", sm: "90%", md: "70%", lg: "80%" } }}>



                    <Box>
                        <Typography sx={{ fontSize: "40px", fontWeight: "800", color: MAIN_COLOR }} >
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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    How do you protect my app idea or business details?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                    At AdelSocial, we give high importance to the complete confidentiality and security of our client’s data. We sign an NDA at the time of project initiation to protect your business-critical data or app idea.

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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    What if I’m not satisfied with your Python solution?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    How can I receive updates on my project?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                    We are available on all communication channels such as Microsoft Teams, Google Meet, Zoom Call, Phone, Live Chats, and Emails to keep you informed of the current status of your Python development project.
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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    How much does it cost to develop a Python project?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The development cost of a Python-based project depends on the industry type, industry compliance, design complexity, the number of features and integrations you want within your app, the experience level of the Python developer, location, and many more. You may get in touch with us to request a free no-obligation quote for your project.
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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    How do I find the best Python development company?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>

                                    Before finalizing the Python development company, you need to look out for certain factors that wll help you make the right decision for your project. Some of the factors you need to look for are the company’s experience, work portfolio, clientele, client testimonials, technology stack, awards and recognitions, and many others.
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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    What are types of software can I develop using Python?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Python can be used for developing websites, web applications, web portals, CRMs, CMS, and many more.

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
                                <Typography sx={{ color: "black", fontSize: "18px", fontWeight: "800" }}>
                                    How do you charge for hiring a Python developer
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The estimated cost for hiring a Python developer will depend on the number of years of experience a developer has and the complexity and size of the project.
                                    Have More Questions? Please Feel Free to Ask Our Team of Python Experts.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Grid>



            <Footer />

        </Container >

    </>
    )
}

export default Python