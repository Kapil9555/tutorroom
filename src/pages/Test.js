// import { Box, Grid, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import testingImg from '../assets/testingImage.png'
// import { MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import { Box, Button, Grid, Typography } from '@mui/material'
import './Homepage.css'

const Test = () => {
    // const data = ["Welcome", "To", "AdelSocial", "We", "Serve", "Apllications"]
    // const [topText, settopText] = useState(0);
    // const [bottomText, setbottomText] = useState(1);

    // useEffect(() => {
    //     const textTime = setInterval(() => {
    //         settopText((prev) => (prev + 2) % data.length);
    //         setbottomText((prev) => (prev + 2) % data.length);
    //     }, 1000);

    //     return () => clearInterval(textTime);
    // }, []);

    return (
        // <Box sx={{ position: 'relative', border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

        //     <Box className="shape" >
        //         <Box className="shapeleft" ></Box>
        //     </Box>
        // </Box>
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box className="loginContainer">
                <Typography fontSize={'30px'} textAlign={'center'}>
                    Login Page
                </Typography>
                <Box className="loginInnerContainer">
                    <Typography className='credentialsBox' fontSize={'20px'}>
                        Credentials
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: '20px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="login" style={{ fontSize: '18px', fontWeight: 900 }}>Login</label>
                            <input id='login' type="text" placeholder='Email' />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="pass" style={{ fontSize: '18px', fontWeight: 900 }}>Pass</label>
                            <input id='pass' type="password" placeholder='Password' />
                        </Box>
                        <Button variant='contained' sx={{ textTransform: 'unset', fontSize: '20px', p: '0px 30px', mt: '10px' }}>Login</Button>
                    </Box>
                    {/* designs */}
                    <Box className="shapeOfDesigns">
                        <Box className="parentDesign">
                            <Box className="parentDesign1">

                            </Box>
                            <Typography className='textDesigns' fontWeight={900} letterSpacing={'0px'}>
                                Help
                            </Typography>
                            <Box className="parentDesign2">


                            </Box>
                            <Typography className='textDesigns2' fontWeight={900} letterSpacing={'0px'}>
                                <span>Forgotten</span>
                                &nbsp;
                                <span>Passoword</span>
                            </Typography>
                            <Box className="parentDesign3">

                            </Box>
                            <Typography className='textDesigns3' fontWeight={900} letterSpacing={'0px'}>
                                Register
                            </Typography>
                        </Box>

                    </Box>

                </Box >
            </Box >
        </Box >
    )
}

export default Test


// < Grid item sx = {{ pt: '90px', pl: '40px', width: '50%', height: '100%', background: 'linear-gradient(180deg,#1f27a3,#31319a)', justifyContent: 'center', alignItems: 'center' }}>
//             <Typography textAlign={'center'} sx={{ width: { lg: '30rem', sm: '30rem', xs: '25rem', md: '30rem' }, color: 'white', fontSize: { lg: '40px', sm: '30px', xs: '20px' } }}>Building Tomorrow's Digital <span style={{ textAlign: 'center', paddingLeft: '10px', color: MAIN_COLOR, fontWeight: 900 }}>Solutions </span>Today</Typography>
//             <Typography textAlign={'center'} sx={{ width: { lg: '30rem', sm: '30rem', xs: '20rem', md: '50rem' }, color: 'white', fontSize: { lg: '17px', sm: '14px', xs: '12px' } }}>Welcome to AdelSocial,Empower your digital journey with us. We craft captivating apps and websites, combining cutting-edge technology and creative design. From dynamic mobile apps to sleek websites, we turn your vision into reality. Join us in shaping the future of digital innovation.</Typography>
//             <Grid item sx={{ position: 'relative', width: '100%' }}>
//                 <Grid item sx={{ overflow: 'hidden', height: '190px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//                     {data.map((item, index) => {
//                         return <Typography className='testingText' key={index} sx={{ transition: 'all 1s ease', color: 'white', fontWeight: 900, fontSize: '60px' }}>{item}</Typography>
//                     })}
//                 </Grid>
//                 <Box sx={{ bgcolor: '#1f27a3', pb: '10px', position: 'absolute', top: '4.5rem', width: data[topText].length * 29, left: '0', height: '4px' }}>
//                     <Box sx={{ backgroundColor: SECONDARY_COLOR, transition: 'width .30s', height: '4px' }} />
//                 </Box>
//                 <Box sx={{ bgcolor: '#1f27a3', pb: '10px', position: 'absolute', top: '10rem', width: data[bottomText].length * 28, left: '0', height: '4px', }}>
//                     <Box sx={{ backgroundColor: SECONDARY_COLOR, transition: 'width .30s', height: '4px' }} />
//                 </Box>
//             </Grid>

//         </ >
// <Grid item sx={{ width: '50%', bgcolor: '#1f27a3', backgroundImage: `url(${testingImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '200px 200px' }}>
// </Grid>