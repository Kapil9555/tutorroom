import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { AdelContext } from '../store/Context';
import { Typography } from '@mui/material';
import './SideDrawer.css'
import { useNavigate } from 'react-router-dom';


const data = [
    { title: 'Services', list: [{ service: 'Whatsapp API', path: 'ADEL' }, { service: 'Bulk Whatsapp',  path: 'ADEL' }, { service: 'Bulk Mailer',  path: 'ADEL' }, { service: 'Bulk SMS', path: 'ADEL' }] },
    { title: 'Products', list: [{ service: 'Whatsapp Web Panel',  path: 'ADEL' }] },
    { title: 'Expertise', list: [{ service: 'Backend', path: '/dotnet' }, { service: 'Frontend', path: '/angular' }, { service: 'App Development', path: '/mobile' }, { service: 'Web Development', path: '/wordpress' }, { service: 'Digital Marketing', path: '/digital' }, { service: 'E-Commerce', path: '/ecommerce' }] }
]

export default function SideDrawer() {
   const navigate=useNavigate()
    const { state, dispatch } = React.useContext(AdelContext)


    const handleNavigate=(ele)=>{
        if(ele=='ADEL'){
            window.location.href="https://sms.adelsocial.com/pricing"
        }
        else{
            navigate(ele)
            window.scrollTo({
                top:0,
                behavior:"smooth"
                
            })
        }
      
        dispatch({
            type:"DRAWER_CLOSED"
        })
    }
    const list = () => {
        return <Box
            sx={{ width: 250, height: '100%', bgcolor: 'white', color: 'white' }} role="presentation" >
            {data.map((item) => {
                return <div key={item.title}>
                    <Box sx={{ p: '5px', bgcolor: '#0b0536', }}>
                        <Typography textAlign={'center'} variant='h1' sx={{ fontWeight: 900, letterSpacing: '2px', fontSize: '17px' }}>
                            {item.title}
                        </Typography>
                    </Box>
                    {item.list.map((list) => {
                        return <Box onClick={()=>{handleNavigate(list.path)} } key={list.service} className="controlHoverServicesParent" sx={{ mb: '3px', mt: '3px', cursor: 'pointer' }}>
                            <Box className="controlHoverServices">
                                <Typography className='controlHoverServicesText' variant='h1' sx={{ ml: '10px', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                                    {list.service}
                                </Typography>
                            </Box>
                        </Box>
                    })}

                </div>
            })}
        </Box>

    };

    return (
        <div>
            <Drawer
                anchor={'left'}
                open={state.drawer_opened}
                onClose={() => dispatch({ type: 'DRAWER_CLICKED', payload: false })}>
                {list()}
            </Drawer>
        </div>
    );
}