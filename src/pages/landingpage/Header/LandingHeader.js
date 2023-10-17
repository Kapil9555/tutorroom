import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material'
import React, { useContext, } from 'react'
import CallIcon from '@mui/icons-material/Call';
import { BG_COLOR, LANDING_COLOR } from '../config';

import logo from '../../../assets/logoMain2Up.png'
import logo2 from '../../../assets/logoMain2Up.png'
import '../Master.css'
import CstBtn from '../letsTalk';
import { MOBILE } from '../../../constant';
import useBottomBar from '../../../utils/useBottomBar';
import { AdelContext } from '../../../store/Context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { state } = useBottomBar()
    const navigate = useNavigate()
    return <>
        <AppBar elevation={0}>
            <Toolbar sx={{ height: { lg: '120px', xs: '80px' }, bgcolor: BG_COLOR }}>
                {state.currentScreenSize < 700 && <div style={{ flexGrow: 1 }}><img src={logo} alt='pic' height={'60px'} width={'70px'} /></div>}
                {state.currentScreenSize > 700 && <div style={{ flexGrow: 1 }}><img src={logo} height={'50px'} width={'60px'} alt='pic' /></div>}
                {state.currentScreenSize < 700 && state.currentScreenSize > 374 && <a style={{ color: LANDING_COLOR, textDecoration: "none" }} href={`tel:${MOBILE}`}><CallIcon sx={{ color: LANDING_COLOR, mr: '10px', fontSize: '40px' }} /></a>}
                {state.currentScreenSize > 700 && <a style={{ color: LANDING_COLOR, textDecoration: "none" }} href={`tel:${MOBILE}`}><Button disableRipple sx={{ m: '0px 10px', fontSize: '18px', color: 'white' }} ><CallIcon sx={{ color: LANDING_COLOR, mr: '10px' }} />{MOBILE}</Button></a>}
                {state.currentScreenSize > 200 && <Button onClick={() => navigate('/')} variant='outlined' sx={{ textTransform: 'unset', fontSize: '17px' }}>View website</Button>}
            </Toolbar>
        </AppBar>

        <Toolbar />
    </>
}
const HeroPage = () => {
    return <Grid container sx={{ padding: { lg: '150px 20px', xs: '50px 20px' }, bgcolor: BG_COLOR }}>
        <Grid item lg={6} xs={12} sx={{ padding: '0px 0px', display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-start', xs: 'center' }, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography className='ok' sx={{ fontFamily: 'cursive !important', color: 'white', fontSize: { lg: '35px', xs: '17px' }, fontWeight: 500, }}>
                #1 Give Your Business A Digital Presence
            </Typography>
            <Typography sx={{ color: 'white', fontWeight: 900, fontSize: { lg: '70px', xs: '40px' }, mt: { lg: '-30px', xs: '-10px' } }}>
                code your dreams.
            </Typography>
            <Typography sx={{ color: LANDING_COLOR, fontSize: { lg: '70px', xs: '40px' }, fontWeight: 800, mt: { lg: '-30px', xs: '-20px' } }}>online.</Typography>
            <CstBtn text="Let's Talk" p="15px 50px" m="30px 0px" borderColor={LANDING_COLOR} textColor={LANDING_COLOR} />
        </Grid>
        <Grid item lg={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', height: '300px' }}>
            <Box sx={{ width: '90%', height: '90%', bgcolor: BG_COLOR, display: 'flex', justifyContent: 'center', p: '30px' }}>
                <img className="rotateIconHeroPage" width={'200px'} height={'200px'} src={logo2} alt="pic" />
            </Box>
        </Grid>
    </Grid >
}

const LandingHeader = () => {
    const { state, dispatch } = useContext(AdelContext)
    return (
        <>
            <Navbar state={state} dispatch={dispatch} />
            <HeroPage state={state} dispatch={dispatch} />
        </>
    )
}

export default LandingHeader