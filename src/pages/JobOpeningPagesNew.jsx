import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputBase, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import React, { useContext, useEffect, useState, } from 'react';
import jobOpen from '../assets/jobopening.jpeg';
import { MAIN_COLOR } from '../constant';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SendMessage from '../components/SendMessage';
import { AdelContext } from '../store/Context';
import useBottomBar from '../utils/useBottomBar';
import BottomNavBar from '../global/BottomNavBar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import useStyles from './JobOpeningCustomHook';



export const jobFilter = [
    {
        id: 1,
        name: 'AOSP',
        checked: false,
    },
    {
        id: 2,
        name: 'Digital Marketing',
        checked: false,
    },
    {
        id: 3,
        name: 'AEM',
        checked: false,
    },
    {
        id: 4,
        name: 'Design',
        checked: false,
    },
    {
        id: 5,
        name: 'QA/Testing',
        checked: false,
    },
    {
        id: 6,
        name: 'SAP',
        checked: false,
    },
    {
        id: 7,
        name: 'Delivery',
        checked: false,
    },
    {
        id: 8,
        name: 'BA',
        checked: false,
    },
    {
        id: 9,
        name: 'Mobile',
        checked: false,
    },
    {
        id: 10,
        name: 'Sales',
        checked: false,
    }


]

export const jobDetails = [
    {

        title: 'UI/UX Designer',
        opening: '4 open positions',
        detail: 'Experience: 2-6+ years We are looking for a dynamic UI/ UX designer who will be responsible for the user experience(UX) and user interface(UI) design of our various digital assets.You will ensure that all elements ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Design'
    },
    {

        title: 'Business Analyst',
        opening: '4 open positions',
        detail: 'Experience - 4+ years Roles and Responsibilities: ○ You will have complete functional expertise of Orange Mantra’s services & amp; solutions, and knowledge of technical architecture of the technology and services.& nbsp; ○ Document analysis, requirements workshops, surveys, business process ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'BA',
    },
    {

        title: 'Lead QA Engineer',
        opening: '4 open positions',
        detail: 'Strategic responsibilities Establish and evolve a formal QA/ Testing practice, establishing test processes, methodology, standards, and hygiene for Agile development. Lead development of the QA strategy, test design / plan, test automation, and drive test execution. ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'QA/Testing',
    },
    {

        title: 'Senior iOS Developer',
        opening: '2 open positions',
        detail: '- Should have a strong understanding of Computer Science fundamentals.- Must have 4+ years of software design and development experience, preferably in a product development environment.- Strong Knowledge of Objective- C / Swift, iOS, OO design / design patterns, ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Mobile',
    },
    {

        title: 'Technical Project Manager',
        opening: '2 open positions',
        detail: 'Exp: 8+ years Work as Technical Project Manager to plan and execute projects, ensure that teams have appropriate technical specifications, direction, and resources to deliver assigned project effectively by establishing realistic estimates for timelines while ensuring ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Delivery',
    },
    {

        title: 'Business Development Manager (IT & Secvices)',
        opening: '2 open positions',
        detail: 'The primary function of this role is to accelerate the growth of sales in Staff augmentation/Solution Model Generating leads through various platforms(DM, Upwork, LinkedIn etc.) for new projects and also penetrate existing account.Assigning ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Sales',
    },
    {

        title: 'Sales Operation Analyst',
        opening: '2 open positions',
        detail: 'Experience: 8+ years Job Responsibilities: The role is responsible for the development, project leadership, quality, and timely delivery of the project.Client based projects, client liaison, pre- sales, and cross - functional development will fall within the ambit of responsibilities. ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Sales',
    },
    {

        title: 'Delivery Manager/Delivery Lead ',
        opening: '2 open positions',
        detail: 'Experience: 10+ years This role is responsible for leading an account with high complexity involving managed services, large program delivery, represent us and deal with CXO / SVP of the client organization.Also accountable for delivery excellence, customer ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Delivery',
    },
    {

        title: 'AEM Deveeloper',
        opening: '2 open positions',
        detail: 'Roles and Responsibilities: Significant experience in AEM(AEM 6.x versions are a must) Strong hands- on experience of Components, Templates, Taxonomy, metadata management, Forward and Reverse Replication, Workflows, Content Publishing and unpublishing, Tagging, Analytics, Deployment(Maven) ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'AEM',
    },
    {

        title: 'AOSP Enginner',
        opening: '2 open positions',
        detail: '· Design and Development of firmware/OS of the product.· Designing complete system, processes, methodologies as well as every component to enhance the overall performance for the customer.· Design, Develop, Integrate, Test, and maintain embedded software The ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'AOSP',

    },
    {

        title: 'SAP FICO Consultant',
        opening: '2 open positions',
        detail: 'Experience 6-10 Years andidate should have knowledge of SAP Controlling Cost Center Accounting, Profit Center Accounting, Product Costing, Profitability Analysis, Project Costing, Results Analysis, Unsettled Costs, Month End Close, Overhead assessment and settlement. · Configuration knowledge CO ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'SAP',

    },

    {

        title: 'SAP Analystics Cloud Consultant',
        opening: '0 open positions',
        detail: 'Experience 6-10 Years You will be responsible for designing, developing, and delivering data visualization, planning, and predictive analytics solutions using SAP Analytics Cloud(SAC), a cloud- based software as a service(SaaS) enterprise analytics solution.· SAP Certification ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'SAP',

    },

    {

        title: 'Content Writer',
        opening: '0 open positions',
        detail: 'Experience 6-10 Years You will be responsible for designing, developing, and delivering data visualization, planning, and predictive analytics solutions using SAP Analytics Cloud(SAC), a cloud- based software as a service(SaaS) enterprise analytics solution.· SAP Certification ...',
        timeDate: '21/07/2023 17:10:24',
        key: 'Digital Marketing',

    },


]



const JobOpeningPagesNew = () => {
    const classes = useStyles();
    const [filter, setFilter] = useState(false)
    const [searchSkills, setSearchSkills] = useState('')
    const [api, setApi] = useState(jobDetails)
    const [filterSec, setFilterSec] = useState(jobFilter)
    const { state } = useBottomBar()

    const changeCheckBox = (e, id, name) => {
        const newData = [...jobFilter]
        newData[id] = { ...newData[id], checked: e.target.checked }
        setFilterSec(newData)

        setApi(jobDetails.filter((item) => {
            if (e.target.checked) {
                return (
                    item.key === name
                )
            } else {
                return jobDetails
            }
        }))
    }


    useEffect(() => {
        setApi(jobDetails.filter((item) => {
            return item.title.toLocaleLowerCase().includes(searchSkills.toLocaleLowerCase())
        }))

    }, [searchSkills]);

    return (
        <>
            {state.currentScreenSize < 918 && <BottomNavBar />}
            <Header />
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ height: '400px', backgroundImage: `url(${jobOpen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgb(90,90,90)', backgroundBlendMode: 'multiply' }}>
                    <Grid container sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '20px' }}>
                            <Typography sx={{ fontSize: { lg: '35px', md: '33px', sm: '31px', xs: '31px' }, color: 'white', fontWeight: '600', textAlign: 'center' }}>Open Position <span>@</span> <span style={{ color: MAIN_COLOR }}>Adel</span><span>Social</span></Typography>
                            <Typography sx={{ fontSize: { lg: '20px', md: '19px', sm: '19px', xs: '19px' }, color: 'white', textAlign: 'center' }}>Join us to accelerate your professional development and career growth.</Typography>
                        </Grid>
                        <Grid item lg={5} md={7} sm={9} xs={10} sx={{ height: '50px', }}>
                            <Box sx={{ height: '100%', borderRadius: '10px', display: 'flex', border: '2px solid white' }}>
                                <OutlinedInput value={searchSkills} onChange={(e) => setSearchSkills(() => e.target.value)} placeholder='Enter Skills / designation' size='large' fullWidth sx={{ color: 'white', border: '1px solid white', height: '100%', borderRadius: '9px 0px 0px 9px' }} />
                                <SearchIcon fontSize='large' sx={{ color: 'white', height: '100%', cursor: 'pointer', padding: '0px 7px' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={11} >
                    <Grid container sx={{ border: "1px solid red" }}>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ display: "flex", p: "10px", width: "80%", border: "1px solid red" }}>


                                <Box sx={{ display: "flex", alignItems: "center", borderRight: "1.5px solid #bdbdbd", width: "33.3%" }}>
                                    <SearchIcon sx={{ fontSize: "25px", color: "#757575", mr: "10px" }} /> <InputBase placeholder='Job title, keyword' sx={{ p: "10px" }} />
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", width: "33.3%", borderRight: "1.5px solid #bdbdbd" }}>
                                    <LocationOnIcon sx={{ fontSize: "25px", color: "#757575", mr: "5px" }} /> <InputBase placeholder='Job type' sx={{ p: "10px" }} />
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", width: "33.3%", borderRight: "1.5px solid #bdbdbd" }}>
                                    {/* <BusinessCenterIcon sx={{fontSize:"25px",color:"#757575",mr:"5px",mt:"-3px"}}/> <InputBase placeholder='Job title, keyword' sx={{p:"10px"}}/> */}
                                    <FormControl className={classes.formControl}>
                                        <InputLabel className={classes.inputLabel}>Select Option</InputLabel>
                                        <Select
                                            className={classes.select}
                                            variant="outlined"
                                        >
                                            <MenuItem value={1}>Option 1</MenuItem>
                                            <MenuItem value={2}>Option 2</MenuItem>
                                            <MenuItem value={3}>Option 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                            </Box>

                        </Grid>
                    </Grid>
                </Grid >
                <SendMessage />
                <Footer />
            </Grid >
        </>


    )
}

export default JobOpeningPagesNew