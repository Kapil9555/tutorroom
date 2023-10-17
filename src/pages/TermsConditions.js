import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import React from 'react';
import termcondition from '../assets/termcondition.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import gradient from '../assets/gradientimage.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MAIN_COLOR } from '../constant';

const TermsAndCondition = () => {
    return (
        <>
            <Header />
            <Grid container >
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${termcondition})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'ceenter' }}>
                    <Typography variant='h2' sx={{ fontSize: { lg: '40px', md: '37px', sm: '30px', xs: '29px' }, color: 'white', fontWeight: '700' }}>Terms & Conditions</Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ backgroundImage: `url(${gradient})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '20px 5px' }}>
                    <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item lg={11} md={11} sm={11.5} xs={11.5}>
                            <Accordion defaultExpanded>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Project terms</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • All estimates/quotes are based on our understanding of your requirements and as per given time-frame. Any changes to the functionality including micro-improvements, may incur additional costs accordingly. Please ensure and clarify our understanding in a face to face meeting.<br />
                                        • By accepting a quote, you agree to and accept the terms and conditions of Synapse Worldwide Pty Ltd. Acceptance can be verbal, by email, payment of Initiation, signing a quote.<br />
                                        • Clients to ensure that we have included all requirements in the quotes/proposals/estimates and that we fully understand their requirements. Clients must provide us with clear guidelines along with the flow or specific details they may require. When such details are not provided, we will proceed with our understanding of the requirements and quote accordingly. At a later stage, if a discrepancy arises, it may lead to additional costs to accommodate the changes. Thus, it is essential that you clarify every aspect of your website development and ensure that you have been quoted on the right requirements.<br />
                                        • Any complexity related to specific tasks, must be advised in advance and included in the proposal for costing purposes. We operate in good faith and rely on our clients to disclose the full picture at the time of quotation. Any discrepancy arising due to unclear requirements will not be borne by Synapse Worldwide.<br />
                                        • There are limited man-hours allocated to each task including Project Management and Digital Strategist/Business Analyst. Minor changes may be included within the allocated hours. This will be analysed on a case-by-case basis.<br />
                                        • Synapse Worldwide will make every effort to complete the project/changes in the given timeframe. Reasonable delays are accepted if functionalities are redefined or modified.<br />
                                        • Any delays at client’s end, may delay the project and proposed timeframes and may incur additional costs.<br />
                                        • Any bugs (programming errors) reported during or just after the development does not attract additional charges.<br />
                                        • Any re-work on an already completed task will attract additional charges. Any changes in the design after the design approval will incur additional charges.<br />
                                        • Any modifications requested during the development or after the Go-Live approval will incur additional charges. All additional work, over and above the estimates is charged separately. Under no circumstances will Synapse Worldwide be liable for any delays caused by change in the project brief.<br />
                                        • Website/application content and all related materials need to be provided to us within the first two weeks of starting the project. Any delays thereafter may delay the project and may incur additional charges if it goes beyond reasonable timeframe.<br />
                                        • Our websites/applications are generally tested on PCs and include near recent versions of following browsers: IE, Firefox, Chrome & Safari. If you require testing to be done on any other browser, please let us know in advance.<br />
                                        • Responsive/multi-device compatible web pages are tested on iPhone and iPads. If you require testing to be done on any other device, please discuss it in advance.<br />
                                        • If your website/application is not hosted on a synapse server, any additional man-hours that may be required due to any server or network related issues are not covered in our quotes and may be charged separately.<br />
                                        • Please note that at any stage during the project, stalling of the project for over two calendar months will incur $99/week administration costs. Furthermore, it may increase the previously approved estimates. If you require the project to be put on hold, please advise us in writing in advance. To put the project on hold without incurring additional charges, we will need the account to be up to date based on the work done. Further details can be discussed if such a situation arises.<br />
                                        • Synapse Worldwide software codes (not including open source software) are copyrights of Synapse Worldwide. The codes can be handed over at an additional cost for use once all previous invoices are settled, on the condition that the codes are used only for use or modification for re-use for further development for the specified client or subsequent owners of that legal entity. Under no circumstance, the codes will be allowed to be used for re-selling or duplication purposes.<br />
                                        • Synapse CMS is a proprietary CMS of Synapse Worldwide. Synapse owns copyrights of all codes written for any client, unless arrangements are made prior to start of the project. Synapse warrants a license to use any custom built software for the client, for their use only. This license is granted while paying for the hosting. Synapse CMS cannot be transferred to any external host; this includes any access to the software codes.<br />
                                        • The website or software application will be designed to be deployed on the web, via using a commercial grade web-server or a similar setup. Based on your website traffic, the website may not perform if deployed on a generic office network environment.<br />
                                        • Depending upon the functionalities required, there may be 3rd party components such as Third Party Payment Gateways or SSL certificates involved in building a website/application. Although Synapse Worldwide does its best in recognising the suitability of any such component, any unforeseen limitations of 3rd party components are beyond our control. Any third-party component purchase costs (such as SSL, Payment gateway, Google Adwords, Plug-in licenses etc) are not included in our quotes.<br />
                                        • Synapse Worldwide takes no responsibility of any open source products such as WordPress, Open Source carts, Joomla etc. It is clients responsibility to update all components and third party softwares. We suggest you to take regular back-ups to avoid any disruptions.<br />
                                        • Synapse offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.<br />
                                        • The client must recognize that at times there may be unforeseen circumstances that will delay the development process, particularly with reference to the integration of third party software. We will try our best to complete the project as agreed in the proposal. As long as it is within a reasonable period, the client agrees not to penalize us for any genuine delay, when every effort to keep the project on the proposed schedule is taken.<br />
                                        • Domain registration/renewal etc charges are not included as a part of any project/proposal unless mentioned otherwise. If required, a quote for which will be submitted separately and approved by the client.<br />
                                        • Hosting charges are not included in the quotations unless mentioned otherwise. Synapse Worldwide can organise an appropriate hosting solution if required, a quote for which will be submitted separately and approved by the client. Where clients decide to organise their own hosting, we should be consulted before finalising the type of hosting and database, as it should meet the requirements of the technology used for the development. Please note that we’ll require full access with hosting support for testing and deploying the application. Synapse Worldwide will not be liable for any delays or errors caused by direct or indirect actions of the hosting company.<br />
                                        • Synapse Worldwide generally builds and tests the websites/applications on our own servers or hosted domains. Synapse cannot give access to their test servers and test websites to the clients or any third party. The website/application can be transferred-off to a nominated 3rd party server upon full payment of all invoices and dues.<br />
                                        • Nothwithstanding any other provision in the agreement, in consideration of the Customer entering into this agreement with Synapse, upon full payment of any outstanding invoices, Synapse will grant an unconditional license to the Customer to reproduce, publish, communicate, use, exploit, vary, or otherwise deal with 1) the graphics, 2) texts and 3) images used in the published website and associated of form and functionality. This will not include the intellectual property relating to the production of the website including the digital strategies, programming codes, database structures, scripts, forms or functionalities.<br />
                                        • All communications/correspondences are generally done via emails. It is client’s responsibility to keep us updated with their relevant email addresses.<br />

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Digital Marketing/Strategy Terms</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • All digital marketing/strategy packages are for a minimum of 6 months period. Thereafter, cancel anytime with clear one month email notice.<br />

                                        • They are billed monthly and are payable by the 1st of every month.<br />

                                        • Packages are designed with keeping in mind Digital Marketing/Strategy requirements of our clients. There are specific man-hours allocated each month and any unused man-hours are not rolled over to the next month. No third party softwares or marketing expenses are included.<br />

                                        • Synapse employs fair use policy, which means that although we don’t formally transfer over any unused time to the next month or formally accumulate unused man-hours, we do understand that your needs may change from month to month, and we allow flexibility in good faith sometimes.<br />

                                        • Any extra hours used may be billed separately. Any urgent tasks will be charged separately.<br />

                                        • Support requests need to be sent via email to&nbsp;<strong style={{ color: '#1976d2' }}>info@adelsocial.com</strong><br />

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Annual Maintenance Terms</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        <strong>Basic Annual Maintenance Package Terms:</strong><br />
                                        • All maintenance packages are for a minimum of 12 months period.<br />
                                        • Maintenance packages are billed annually, however are paid monthly via direct debit on the 1st of every month.<br />
                                        • Packages may include 12 months basic website hosting, email hosting and DNS hosting.<br />
                                        • Packages are designed to serve website maintenance tasks only. The hours may not be used for projects such as full redesign or major functionality add-ons.<br />

                                        • <strong>Does-not</strong>&nbsp;include any Digital Strategy, Business Analysis, Solution Architect, SEO and Digital Marketing work.<br />

                                        • Work-hours are tracked in 15minutes blocks. The support time is used once every month to take a full backup of your website. After that, we work on updating your CMS and plugin versions along-with any website fixes that may arise as a result of the updates. Any remaining hours can be used to make changes to the website. Any additional workhours are requested for your approval.<br />

                                        • Synapse employs fair use policy, which means that although we don’t formally transfer over any unused time to the next month or formally accumulate unused man-hours, we do understand that your needs may change from month to month, and we allow flexibility in good faith sometimes.<br />

                                        • Any extra hours used will be billed separately @ $77/hour incl GST.<br />

                                        • Any urgent tasks will be charged separately.<br />

                                        • The package is auto renewed every year on its anniversary date.<br />

                                        • <strong>Payment terms:</strong><br />Monthly maintenance package fees require credit card payment only. No other forms of payment will be accepted for monthly maintenance.<br />

                                        • Monthly maintenance package fees will be charged to the clients credit card on file on the 1st day of every month.<br />

                                        • An administrative fee of $25 will be charged to the clients account for any late payments or declined credit card charges.<br />


                                        •More than three missed payments in a year may attract termination of the package and the client will need to pay immediately the entire remaining amount on the package.<br />


                                        • There are absolutely no refunds for any fees related to the monthly maintenance package.<br />


                                        • <strong>Termination:</strong><br />In case Client need to cancel the auto annual renewal, please inform us in writing (email) at least one month prior to the renewal date.<br />


                                        • Ongoing term: For any reason if the Client decides to terminate an on-going maintenance package then they will need to pay the balance amount of the remaining months.<br />


                                        • Synapse reserves the right to terminate annual maintenance at anytime with written notice to the Client.<br />



                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>General Approach</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        For general website design &amp; development projects we employ the following steps:<br />

                                        • Upon quote acceptance/signoff, initiation payment is processed to start the project. As required by the project, we may hold a Scoping Workshop to discuss the requirements in detail.<br />

                                        • Once we have the brand details such as logo, images, branding materials etc, we will have a mock-up for your review within 5 to 10 working days.<br />

                                        • You can review the design and suggest improvements accordingly. Depending upon your project, generally up to 3 to 5 design modifications that can be done within the given estimates. Please refer to your allocated design and development hours for details.<br />

                                        • Once design is finalised &amp; approved, we’ll proceed with the HTML development. At this stage we generally need around 3 to 5 banner text and/or images for rotation.<br />

                                        • Once, HTML is done, if CMS is included in your project, we will proceed to setup your website on your selected Content Management System (CMS). Please provide all content and copy prior to the development phase.<br />

                                        • Depending upon the time and resources allocated to your project, we’ll transfer as much content as possible from the old website to the new website. Remaining content can be transferred via the CMS by your designated staff. We can provide the instructions needed to help you do this.<br />

                                        • Once the site is ready from our end, we generally hand it over to you for further review, test and/or to upload/change contents as necessary.<br />

                                        • At this stage you need to give us a Go-Live date for us to make the new website/project live.<br />

                                        • Your website can be made live within 3 to 5 working days of a Go Live approval, assuming that the accounts are clear. Kindly note that we require full payment prior to transferring the website on any external servers.<br />

                                        • Kindly note, there are limited man-hours allocated on the project. The estimates for all website under $5000 are based on an assumption that projects will to be completed over eight to twelve working weeks depending upon the size of your project. Any further delays may increase the project management costs. If you do not believe the project to be completed within this time frame, please do let us know prior to starting the project.<br />

                                        • Also, generally speaking, going-back and forth takes a lot of time. We encourage you to provide all necessary details, at the start of the project to ensure that the project team’s time is efficiently utilised on your project and you do not incur any unnecessary additional costs.<br />

                                        • You will be kept updated via emails and/or telephone calls as the project demands. However, please do not hesitate to contact us any time you require a project status. Also, please always keep us updated with your relevant email addresses/contact details.<br />

                                        • Once the website/application has been made live on the client’s domain, it is their responsibility to take regular full back-ups and to update all components and third party softwares.<br />


                                        We consider ourselves to be very flexible and adaptable and approach all requests with a ‘can do’ attitude. If you require something changed, please feel free to discuss with us. Please contact us if you require further details or have any questions. We look forward to working together with you on your project!<br />



                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Hosting</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • Hosting is an annual charge which must be paid in advance for the whole year. Except if the client is under one of our Maintenance packages.<br />

                                        • It is the client’s responsibility to renew the hosting in time ie. before the expiry date. Failure to renew in time can lead to loss of files, data, emails, backups etc. All unpaid hostings are disabled or deleted from the server.<br />
                                        • All renewals must be paid by seven working days prior to the expiry date. Synapse will not be responsible for issues relating to delayed payment.<br />
                                        • Hosting are on shared and non-shared servers hosted via third party providers. Synapse Worldwide ensures best to our ability that our systems and servers are protected from hackers, viruses, intruders and other online and offline problems, however we will not be held liable for any disruption of services if such situation arises.<br />
                                        • Client is solely responsible for the content stored on and served by the hosting service purchased and the activity of any scripts or email services created under the hosting service. The Customer must maintain the security of all account passwords and applications or scripts and ensure all scripts under the hosting service are free from malicious content that may harm any part of the Server, other client accounts hosted, or the external systems of visitors viewing the hosted content.<br />

                                        • Incase of a malware attack, Synapse reserves the right to delete files on the hosting service without giving any prior notice.<br />

                                        <strong>Cancellation/Termination:</strong><br />Hosting Cancellation requests must be sent in writing or by email one month prior to the expiry of the same. Once the hosting has been renewed, it cannot be cancelled and must be paid for the full year.<br />
                                        • If the hosting is not paid and renewed before the expiry date. We reserve the right to disable the hosting and all associated services including emails and dns records. Additional charges will be applicable to re-enable the hosting. Synapse will not be responsible for any loss of data, files, emails, backups, restoration costs etc.<br />

                                        • If a hosting has been cancelled / disabled then all files, emails, databases and backups will be deleted from the server without any notification to the client.<br />

                                        • Once all invoices are paid, it is client’s responsibility to request for the files subject to the below:<br />

                                        • – Synapse CMS is a proprietary CMS of Synapse Worldwide. Synapse owns copyrights of all codes written for any client, unless arrangements are made prior to start of the project. Synapse warrants a license to use any custom built software for the client, for their use only. This license is granted while paying for the hosting. Synapse CMS cannot be transferred to any external host; this includes any access to the software codes. FTP and Control panel access is not provided if the website is using Synapse CMS.<br />

                                        <strong>Emails:</strong><br />All emails are to be downloaded on the client’s computer periodically. Email boxes must be kept within their quota limits. Periodical maintenance may be carried out on the email box and emails older than 6 months are deleted.<br />

                                        •Client’s must not use the email hosting for inappropriate content and other undesired emails which can result in spamming or infecting the server. Under such circumstances, immediate action will be taken and the required files and data will be deleted without any prior notice.<br />

                                        • Synapse offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.<br />


                                        • Hosting are on shared and non-shared servers hosted via third party providers. Synapse Worldwide ensures best to our ability that our systems and servers are protected from hackers, viruses, intruders and other online and offline problems, however we will not be held liable for any disruption of services if such situation arises.<br />



                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Domain</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • All domain registrations and renewals are to be paid in advance.<br />
                                        • Expiration of a domain can result in service disruption and loss of domain.<br />
                                        • Synapse Worldwide will not be responsible if a domain expires due to non-payment / late payment of the charges. All payments must be made by seven working days before the expiry date.<br />
                                        • It is client’s responsibility to renew their domain names with us.<br />
                                        • All invoices and dues must be paid in full before we release the requested domain name.<br />
                                        • Synapse Worldwide has the domains in a common pool account and therefore cannot give access to its domain control panel.<br />
                                        • Synapse offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.<br />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}

                                >
                                    <Typography sx={{ fontSize: { lg: '25px', md: '24px', sm: '22px', xs: '20px' }, color: MAIN_COLOR, fontWeight: '700', }}>Refund & Cancellation</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: { lg: '19px', md: '18px', sm: '16px', xs: '15px' } }}>
                                        • All domain registrations and renewals are to be paid in advance.<br />
                                        • Expiration of a domain can result in service disruption and loss of domain.<br />
                                        • Synapse Worldwide will not be responsible if a domain expires due to non-payment / late payment of the charges. All payments must be made by seven working days before the expiry date.<br />
                                        • It is client’s responsibility to renew their domain names with us.<br />
                                        • All invoices and dues must be paid in full before we release the requested domain name.<br />

                                        • Synapse Worldwide has the domains in a common pool account and therefore cannot give access to its domain control panel.<br />
                                        • Synapse offer packages in co-ordination with third party providers. Changes to the third party provider’s rules and policies may ultimately effect the services we provide or the terms and conditions herein.<br />

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid >
            <Footer />
        </>
    )
}

export default TermsAndCondition