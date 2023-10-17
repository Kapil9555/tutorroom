import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import WorkIcon from '@mui/icons-material/Work';
import { MAIN_COLOR } from '../constant';
import { useNavigate } from 'react-router-dom';

export default function BottomNavBar() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()
    return (
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 9999 }}>
            <BottomNavigation
                style={{ backgroundColor: MAIN_COLOR, color: 'white' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}>
                <BottomNavigationAction onClick={() => navigate('/')} style={{ fontWeight: 900, color: 'white' }} label="Home" icon={<HomeIcon sx={{ color: 'white' }} />} />
                <BottomNavigationAction onClick={() => navigate('/about')} style={{ fontWeight: 900, color: 'white' }} label="About" icon={<EmailIcon sx={{ color: 'white' }} />} />
                <BottomNavigationAction onClick={() => navigate('/jobopenings')} style={{ fontWeight: 900, color: 'white' }} label="Job Openings" icon={<WorkIcon sx={{ color: 'white' }} />} />
                <BottomNavigationAction onClick={() => navigate('/contact')} style={{ fontWeight: 900, color: 'white' }} label="Contact" icon={<WifiCalling3Icon sx={{ color: 'white' }} />} />
            </BottomNavigation>
        </Box>
    );
}