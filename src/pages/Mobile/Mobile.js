import { Grid, Typography } from '@mui/material'
import awspic from '../../assets/androidpage.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import aws2 from '../../assets/andro1.jpg'
import androidstudio from '../../assets/androidstudio.png'
import aws3 from '../../assets/andro2.jpg'
import { MAIN_COLOR } from '../../constant'
import SendMessage from '../../components/SendMessage'
import BottomNavBar from '../../global/BottomNavBar'
import useBottomBar from '../../utils/useBottomBar'

const MobileDevelopment = () => {
    const { state } = useBottomBar()
    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Grid container sx={{ width: '100%', backgroundPosition: 'center', bgcolor: '#595959 ', backgroundBlendMode: 'multiply', p: '150px', pl: '50px', backgroundImage: `url(${awspic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Grid item>
                    <Typography variant='h4' sx={{ color: 'white', fontWeight: 900 }}>App Development</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', m: '50px 50px', pr: '30px' }}>
                <Grid item lg={6} xs={12}>
                    <img width={'300px'} height={'300px'} src={aws2} alt='pic' style={{ borderRadius: '100px' }} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Typography paragraph textAlign={'left'}>
                        <span style={{ fontSize: '40px', color: MAIN_COLOR }}>App Development Content Analysis</span> <br />
                        Though there are numerous app  development services available, as responsible citizens, you should select the most dependable. Adel social was established with a focus on digital transformation through the adoption of technologies and new trends. offer a variety of business solutions to help small, medium-sized, and large businesses reach their target market and increase sales
                        Adel social worked as an outside App application development team for a digital firm. They primarily assisted with internal application development initiatives.
                        We work with discipline and are committed to producing good results. Although developing an app is difficult, using the right techniques and scheduling calls or meetings, it is possible to determine the client's objectives and establish the project's parameters. The app development company provides a price after the initial conversation. deciding on a course of action, defining project parameters, and dealing with financial issues After a formal contract or agreement is signed, the development process begins.
                        A timeline, a project plan, and the start of the wireframing procedure are all part of project planning. During the technology review phase, decisions about the technologies, platforms, and construction methods that will be used to build the website must be made.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', m: '50px 50px', pr: '100px' }}>
                <Grid item lg={6} xs={12}>
                    <Typography paragraph textAlign={'left'}>
                        <span style={{ fontSize: '40px', color: MAIN_COLOR }}>Why is Adel social? </span> <br />
                        <li style={{ fontWeight: 900 }}>Expert technical knowledge </li>
                        You will be able to manage business activities while preparing for app automation if you choose Adel social as a App app development company. It is critical to hire a dedicated developer with certified knowledge.
                        a dependable source with superior technical knowledge
                        The team will oversee app development at every stage and will be able to meet all of the application's requirements.
                        It will uncover novel strategies for your company's expansion. You will have access to the most recent tools, certifications, and licences, all of which are critical in application development. These experts can easily understand codes and are well-versed in programming languages.
                        <li style={{ fontWeight: 900 }}>Low-instance f legal issues  </li>
                        The handling of duties and the operation of any online business is extremely delicate. There is a high level of risk involved, and there may be isolated incidents of fraud and hacking that necessitate legal intervention.
                        Hiring us as a reputable App app development company will help you reduce such legal concerns. Because they are a legally recognized company, they will create an application while maintaining legality.
                        If such legal issues arise, the iPhone app development company will handle them directly. As a result, working with a App app development company saves you time and money.
                    </Typography>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <img width={'96%'} height={'100%'} src={aws3} alt='pic' style={{ borderRadius: '100px' }} />
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', m: '50px 50px', pr: '100px' }}>
                <Grid item lg={6} xs={12}>
                    <img width={'96%'} height={'100%'} src={androidstudio} alt='pic' style={{ borderRadius: '100px' }} />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Typography paragraph textAlign={'left'}>
                        <span style={{ fontSize: '40px', color: MAIN_COLOR }}>What do we consider in App application development?  </span> <br />
                        <li style={{ fontWeight: 900 }}>Android Studio </li>
                        Android Studio is an effective tool used for modifying apps for Android devices. It is the best assistance for developers in areas of creating applications for App phones and tablets using the Java programming language.

                        <li style={{ fontWeight: 900 }}>Phone gap  </li>
                        An online service that works for creating APK files using HTML, CSS, and javascript code. Don't know existing web content? No issues, with Pho,netop it will be easy for the program to deploy to different platforms.
                        <li style={{ fontWeight: 900 }}>Firebase  </li>
                        Firebase is crucial in developing high-quality apps, growing user base, integrity, and earning good money. It also acts as security preventing illegitimate access to information.
                        <li style={{ fontWeight: 900 }}>GIT   </li>
                        It is an effective system to store everything perfectly with efficiency. It stores all types of each file and folder.
                    </Typography>
                </Grid>

            </Grid>
            <Typography textAlign={'center'} fontWeight={900} fontSize={'20px'} m="20px">App development is a significant aspect of any business which is done after proper planning, analysis, and monitoring of our services well. </Typography>
            <SendMessage />
            <Footer />
        </>
    )
}

export default MobileDevelopment
