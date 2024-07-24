import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import { Avatar, Badge, Box, Chip, IconButton } from '@mui/material';
import Flag from '../../assets/Flag_of_Australia.svg'
import '../../App.css'
const Header = () => {
    return (
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <SearchIcon color='action' />
                <Chip label="K" sx={{ borderRadius: 2, marginLeft: '15px', color: 'GrayText', alignItems: 'center' }} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <IconButton>
               <img src={Flag} alt='flag' style={{width:30 , height : 50}} /> 
            </IconButton>
                <IconButton>
                    <Badge badgeContent={4} color="error" sx={{ marginRight: '15px' }}>
                        <NotificationsIcon color='action' />
                    </Badge>
                </IconButton>
                <IconButton>
                    <GroupIcon color='action' />
                </IconButton>
                <IconButton>
                    <Box sx={{
                        display: 'inline-block', borderRadius: 15, border: '2px solid #b9bdba', padding: '2px'
                    }}>
                        <Avatar
                            sx={{ backgroundColor: 'lightgrey', width: 30, height: 30, }}
                            alt="profile"
                        >
                            J
                        </Avatar>
                    </Box>
                </IconButton>
            </Box>
        </header>
    )
}

export default Header
