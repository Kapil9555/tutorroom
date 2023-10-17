import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { Button, Divider, Grid, OutlinedInput, Paper, TextareaAutosize, Typography } from '@mui/material'
import bulk from '../../../assets/maxbulk-using-gmail.png'
import bulkImg from '../../../assets/bulk_mail.png'
import { MAIN_COLOR, MOBILE } from '../../../constant'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
const BulkMailer = () => {
    const emptArr = [
        { title: 'Tell Us Your Requirments', para: 'Why Choose Email Marketing Services? It’s a Cost-Effective Way to Grow Your Business' },
        { title: 'Unrivalled Levels of Service', para: 'Generate & Close More Leads With Targeted Campaigns From Us' },
        { title: 'Creating Custom Email Content', para: 'Working with your company and target audience to write valuable content for them. Running contests and giveaways to increase engagement.Designing for engagement and conversions.' },
        { title: 'Testing Your Email Campaigns', para: 'Split-testing subject lines Split-testing send times and dates Split-testing copy and offers And more!' },
        { title: 'Advanced Email Marketing Strategies', para: 'Marketing automation Customer retention email Win-back email campaigns And more!' },
        { title: 'Tracking Your Email Campaigns', para: 'Tracking sends and delivery rates Tracking open and click-through rates Tracking web visits, leads, sales, and revenue for each email blast' },
    ]
    return (
        <>
            <Header />
            <Grid container sx={{ height:"50vh" }}>
                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundBlendMode: 'multiply', bgcolor: 'rgba(0,0,0,0.8)', backgroundImage: `url(${bulk})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                    <Typography variant='h1' sx={{ color: 'white',fontSize: { lg: '50px', xs: '40px' } , fontWeight: 800 }}>Bulk Mailer</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{p:"10px"}}>
                <Grid item xs={12} sm={12} md={5} lg={5} sx={{ display:"flex",justifyContent:"center",height:{xs:"400px",sm:"400px",md:"500px",lg:"500px"}}}>
                   <img src={bulkImg} height={"100%"} width={"100%"}/>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
                    <Typography align='left'   sx={{ width:"100%",color:MAIN_COLOR,lineHeight: 1.2, fontWeight: 900,fontSize:{lg:"33px",md:"30px",sm:"28px",xs:"22px"} }}>
                        THE BEST EMAIL MARKETING STRATEGY
                    </Typography>
  
                    <div style={{}}>
                        <Typography paragraph sx={{fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" } }}>
                            Around 95 billion emails are sent every day for business purposes worldwide, and there is no indication that this number will fall anytime soon.<br />
                            Our service is designed to kickstart a stronger sales funnel, provide sales-ready leads, build a robust sales pipeline, shorten the sales cycle, increase<br />
                            conversion rates, support inside-sales function, manage the web of channel partners and accelerate the efficacy and productivity of the sales process. We complete the sales<br />
                            journey by aligning our ‘closure specialists’ with digital marketing prowess within the sales ecosystem.<br />
                            So, yes, you should spend some time and resources trying to find the best ways to grab your potential client’s attention through email marketing. It<br />
                            usually is cheaper than other strategies and can give as much in return – and maybe a bit more, depending on your target audience.<br />

                            Email marketing campaigns are one of the best lead generation tactics for small businesses.<br />
                            Every small business wants to generate more quality leads.  So, yes, you should spend some time and resources trying to find the best ways to grab your potential client’s attention through email marketing. It<br />
                            usually is cheaper than other strategies and can give as much in return – and maybe a bit more, depending on your target audience. Every small business wants to generate more quality leads.  So, yes, you should spend some time and resources trying to find the best ways to grab your potential client’s attention through email marketing. It
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container sx={{ bgcolor: '#f3f3f3', p:"15px" }}>
                {emptArr.map((item, index) => {
                    return <Grid item key={index} lg={12}>
                        <Typography variant='h5' fontWeight={900} sx={{ color: MAIN_COLOR,fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"} }}>{item.title}</Typography>
                        <Typography paragraph sx={{fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" }}}>{item.para}</Typography>
                    </Grid>
                })}
            </Grid>
            <Grid container sx={{  height: 'fit-content',p:"15px" }}>
                <Grid item xs={12}>
                    <Typography align='center' sx={{ color:MAIN_COLOR,fontWeight: 900, fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"}}}>CONTACT US</Typography>
                    
                    <Typography align='center' sx={{ fontSize: { lg: "15px", xs: '13px', md: '15px',sm:"14px" } }}>
                        To boost your revenue, request a proposal or contact us with your questions
                    </Typography>
                </Grid>
                <Grid container sx={{ justifyContent: 'center',m:"15px" }}>
                    <Grid item lg={3.5} md={3.5} sm={6} xs={12} sx={{  p:"15px",display: 'flex', flexDirection: 'column', alignItems: 'center',p:"15px" }}>
                        <PlaceIcon sx={{color:"red"}}/>
                        <Typography sx={{ color: MAIN_COLOR,fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"}, fontWeight: 900 }}>Head Office</Typography>
                        <Typography textAlign={'center'} sx={{ fontSize: '19px' }}>
                            3rd Floor , P-27 Shivalik Malviya Nager , Delhi-110017
                        </Typography>
                    </Grid>
                   
                    <Divider orientation='vertical' sx={{ height: '90%',display:{xs:"none",sm:"none",md:"block",lg:"block"} }} />
                    
                    <Grid item lg={3.5} md={3.5} sm={6} xs={12}  sx={{   p:"15px",display: 'flex', flexDirection: 'column', alignItems: 'center',p:"15px" }}>
                        <PhoneIcon sx={{color:"green"}}/>
                        <Typography sx={{  color: MAIN_COLOR,fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"}, fontWeight: 900 }}>Phone Number</Typography>
                        <Typography sx={{ fontSize: '19px' }}>
                            {MOBILE}
                        </Typography>
                    </Grid>
                    <Divider orientation='vertical' sx={{ p:"15px", height: '90%',display:{xs:"none",sm:"none",md:"block",lg:"block"} }}/>
                    <Grid item lg={3.5} md={3.5} sm={6} xs={12} sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center',p:"15px" }}>
                        <LocalPostOfficeIcon sx={{color:"orange"}}/>
                        <Typography sx={{ color: MAIN_COLOR,fontSize:{lg:"25px",md:"25px",sm:"22px",xs:"20px"}, fontWeight: 900}}> Mail</Typography>
                        <Typography sx={{ fontSize: '19px' }}>
                            sms@adelsocial.com
                        </Typography>
                    </Grid>

                </Grid>
                <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0553500909477!2d77.21102887449014!3d28.538055988366565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fceaa6e5387%3A0x37ebbd6c60001afc!2sAdelSocial!5e0!3m2!1sen!2sin!4v1689831157113!5m2!1sen!2sin" width="100%" height="400px" style={{ border: '0', allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade", borderRadius: '10px' }}></iframe>
            </Grid>
            <Grid container component={'form'} sx={{justifyContent: 'center',mt:"10px",mb:"20px" }}>
            <Paper elevation={3} sx={{width:{xs:"95%",sm:"95%",md:"90%",lg:"90%"},p:"15px",pt:"20px",borderRadius:"10px"}}>
                <Grid container spacing={3}  sx={{}}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <OutlinedInput type="text" placeholder='First name' style={{ padding:"10px",height:"60px",width: '100%',borderRadius:"10px" }} />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <OutlinedInput type="text" placeholder='Last name' style={{ padding:"10px",height:"60px",width: '100%',borderRadius:"10px" }} />
                </Grid>
                <Grid item xs={12}>
                <OutlinedInput type="text" placeholder='Email' style={{padding:"10px", height:"60px",width: '100%',borderRadius:"10px" }} />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <OutlinedInput type="text" placeholder='Contact' style={{ padding:"10px",height:"60px",width: '100%',borderRadius:"10px" }} />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <OutlinedInput type="text" placeholder='Subject' style={{ padding:"10px",height:"60px",width: '100%',borderRadius:"10px" }} />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <textarea typeof='text' minLength={10} style={{ width: '100%',borderRadius:"10px",padding:"10px" }} rows="10" placeholder='Message' />
                </Grid>
                <Grid item xs={12} lg={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' sx={{ bgcolor: MAIN_COLOR, mb: '30px'}}>Submit</Button>
                </Grid>
                </Grid>
            </Paper>
             
            </Grid>
            <Footer />
        </>
    )
}

export default BulkMailer