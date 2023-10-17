import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import '../pages/Homepage.css'
import DoneIcon from '@mui/icons-material/Done';
import cust from '../assets/cust.png'
import money from '../assets/money.png'
import prize from '../assets/prize.png'
import offer from '../assets/offer.png'
import webbg from '../assets/pricingbg.png'
import { MAIN_COLOR, SECONDARY_COLOR } from '../constant';
import SectionHead from '../global/SectionHead';
import { useContext, useState } from 'react';
import { Add } from '@mui/icons-material';
import '../pages/Homepage.css'
import { AdelContext } from '../store/Context';



const WebHosting = () => {
    const { state } = useContext(AdelContext)
    const [planTime, setPlanTime] = useState(true)
    const [plansAmt, setPlansAmt] = useState(false)
    const handlePlan = (plan) => {
        if (plan === 'annual') {
            setPlanTime(prev => { return !prev })
            setPlansAmt(prev => { return !prev })
        }
        else {
            setPlanTime(prev => { return !prev })
            setPlansAmt(prev => { return !prev })
        }
    }
    const handleHostingPlan = (planName) => {
        switch (planName) {
            case 'Single Domain Hosting':
                window.open('https://domain.adelsocial.com/hosting.php')
            case 'Multiple Domain Hosting':
                window.open('https://domain.adelsocial.com/multidomain_hosting.php')
            case 'C-panel Hosting':
                window.open('https://domain.adelsocial.com/cpanel-hosting.php')
        }
    }
    const plans = [{ animate:"fade-right",logo: cust, title: "Connect with pre-qualified customers", renew_price: 159, new_price: !plansAmt ? 190 : 210, planName: 'Single Domain Hosting', planSubName: 'Low-cost affordable hosting to get you started.', old_price: !plansAmt ? 'Rs.299' : 'Rs.399', percent: !plansAmt ? '83%' : '40%', features: ['1 Website', '10GB + 20G SSD/NVMe Disk Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] },
    { animate:"fade-up",logo: money, title: "Save time and money", renew_price: 159, new_price: !plansAmt ? 848 : 999, planName: 'Multiple Domain Hosting', planSubName: 'Everything you need to create your website', old_price: !plansAmt ? 'Rs.999' : 'Rs.1299', percent: !plansAmt ? '63%' : '20%', features: ['10 Websites', '20GB+80GB SSD/NVMe Disk Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] },
    { animate:"fade-left",logo: prize, title: "Rely on an experienced and knowledgeable team", renew_price: 159, new_price: !plansAmt ? 634 : 799, planName: 'C-panel Hosting', planSubName: 'Level-up with more power and enhanced features', old_price: !plansAmt ? 'Rs.799' : 'Rs.999', percent: !plansAmt ? '73%' : '30%', features: ['5 Websites', '10 GB SSD Storage', 'Unlimited Data Transfer', 'Unlimited Subdomain', 'Unlimited Databases', 'Unlimited Email Accounts', 'Lifetime FREE SSL', '1-Click WordPress Installer'] }].map((plan, index) => {
        return <Grid item key={plan.planName} sx={{ mr: { lg: '40px', md: '40px', sm: '10px' }, mb: { xs: '20px' }, borderRadius: '20px', bgcolor: 'white', scale: index === 1 && { xs: '1', lg: '1.1', md: '1.1' }, boxShadow: index === 1 && '-1px 3px 14px 0px rgba(0, 0, 0, 0.75)', transition: 'all 0.70s ease', border: '1px solid lightgray', height: '78%', width: { lg: '24%', xs: '80%', md: '27%', sm: '30%' } }}  data-aos={`${plan.animate}`}>
            <Typography variant='h1' fontSize={'16px'} fontWeight={900} textAlign={'center'} sx={{ p: '10px', color: SECONDARY_COLOR, bgcolor: MAIN_COLOR, borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>{plan.planName}</Typography>
            <Typography textAlign={'center'} fontWeight={900} variant='subtitle1' fontSize={'13px'} >{plan.planSubName}</Typography>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item fontSize={'12px'} sx={{ opacity: 0.5 }}><del>{plan.old_price}</del></Grid>
                <Grid item><span style={{ fontSize: '12px', backgroundColor: '#ebe4ff', color: '#5025d1', padding: '4px 13px', borderRadius: '20px', marginLeft: '10px' }}><b >SAVE {plan.percent}</b></span></Grid>
            </Grid>
            <Typography paragraph textAlign={'center'} sx={{ letterSpacing: '1px', color: '#2f1c6a', fontWeight: 900, fontSize: '27px' }}>₹{plan.new_price}<span style={{ fontWeight: 100, fontSize: '18px' }}>/mo</span></Typography>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size='small' onClick={() => handleHostingPlan(plan.planName)} startIcon={<Add />} variant='contained' sx={{ textTransform: 'unset', fontWeight: 900 }}>Add to cart</Button>
            </Grid>
            <Grid item>
                <Typography paragraph m={'8px'} fontSize={'10px'} textAlign={'center'}><span style={{ color: "red" }}>*</span>₹{plan.renew_price}/m when you renew</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '80%' }} />
            </Grid>
            {state.currentScreenSize > 775 && <>
                <Typography paragraph textAlign={'center'} color={SECONDARY_COLOR} fontWeight={900} m={'20px'} sx={{ bgcolor: MAIN_COLOR, borderRadius: '20px' }}>Top Features</Typography>
                <Grid container flexDirection={'column'} pl="10px">
                    {plan.features.map((item, index) => {
                        return <Grid key={index} item sx={{ display: 'flex', mb: '0px' }}>
                            <DoneIcon sx={{ color: '#ffcd35', fontWeight: 900, fontSize: '16px' }} />
                            <Typography paragraph color={MAIN_COLOR} sx={{ fontSize: { lg: '13px', sm: '10px' } }} fontWeight={900} ml="5px"   >{item}</Typography>
                        </Grid>
                    })}
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img width={'30px'} height={'30px'} src={plan.logo} alt='pic' />
                    <Typography mt="18px" sx={{ color: 'black' }} textAlign={'center'} fontSize={'12px'} fontWeight={900} whiteSpace={'wrap'}>{plan.title}</Typography>
                </Grid>
            </>}

        </Grid>
    })

    return (
        <>
            <Grid container sx={{ padding: '60px 20px', justifyContent: 'center',overflow:"hidden" }}  data-aos="fade-up">
                <SectionHead title={"AFFORDABLE DOMAIN & HOSTING"} tagline={"Make a customer, not a sale."} />
                <Grid container className='webHostingBox' alignItems={'flex-start'} height={'fit-content'} sx={{ pb: '40px', borderRadius: { lg: '90px', xs: '20px' }, backgroundImage: `url(${webbg})`, backgroundPosition: 'top', backgroundSize: '100% 60%', backgroundRepeat: 'no-repeat', border: '1px solid lightgray' }}>
                    <Grid item xs={12} lg={12} sx={{ p: '40px', display: 'flex', justifyContent: 'center', borderRadius: '90px' }}>
                        <Typography variant='h3' sx={{ fontSize: { lg: '3rem', xs: '30px' }, width: { lg: '50%', xs: '100%', sm: '50%', md: '50%' } }} textAlign={'center'} fontWeight={900}>Pick the plan that supports your goal</Typography>
                    </Grid>
                    <Grid item xs={12} lg={12} sx={{ p: '40px', display: 'flex', justifyContent: 'center', borderRadius: '100px' }}>
                        <Box sx={{ mr: '-20px', zIndex: 999, mt: '-10px' }}><img width={'40px'} height={'40px'} src={offer} alt="pic" /></Box>
                        <Box className="planSelectBox" sx={{ position: 'relative', border: `1px solid ${MAIN_COLOR}`, width: '200px', display: 'flex', justifyContent: 'space-between', borderRadius: '100px' }}>
                            <span onClick={() => handlePlan('annual')} style={{ fontWeight: 900, color: planTime ? SECONDARY_COLOR : 'black', backgroundColor: planTime && MAIN_COLOR, padding: '8px', width: '50%', borderRadius: '100px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                                Annually
                            </span>
                            <span onClick={() => handlePlan('month')} style={{ fontWeight: 900, color: !planTime ? SECONDARY_COLOR : 'black', backgroundColor: !planTime && MAIN_COLOR, padding: '8px', width: '50%', borderRadius: '100px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                                Monthly
                            </span>
                        </Box>
                    </Grid>
                    <Grid item lg={12} style={{ height: '100%', width: '100%' }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >
                        <Grid container sx={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                            <Container disableGutters sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                                {plans}
                            </Container>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid >

        </>

    )
}

export default WebHosting