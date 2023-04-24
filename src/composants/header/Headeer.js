import React, { useEffect } from 'react';
import Medicine from "../../assets/images/Medicine.svg"
//import from MUI 
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import Drawer from '@mui/material/Drawer';
import { Link } from "react-router-dom"


import { useState } from 'react';
import Panier from "./Panier"


//import from REACT-ICONS
import {IoSettingsOutline} from  "react-icons/io5"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../redux/cartSlice';





const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function Headeer(props) {

  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(getTotals());
})
const {cartTotalQuantity}=useSelector((state)=>state.storeCart)
  const [side, setSide] =useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSide({ ...side, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'right' ? 500 : 100 }}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div > <Panier/>  </div>
           
    </Box>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  //User Setting 
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
 {/* user */}
 <MenuItem onClick={handleMenuClose}>     
                            <Link to='/account' >          
                              <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" />
                            </Link>
                            <span>
                              <MenuItem onClick={handleMenuClose}>   
                              <Link to='/account' style={{textDecoration: 'none'}}> 
			                        <div>
                                <h5 className='userh5'> nom </h5>
                                <h6>From Los Angelos</h6>
                              </div>
			                        </Link>
                              </MenuItem>
                            </span>
                          </MenuItem>


                    {/* Settings*/}
                          <MenuItem onClick={handleMenuClose} >
                            <Link to='/account' style={{textDecoration: 'none'}}> 
                            <button className='box'>
                              <IoSettingsOutline/>
                              <MenuItem onClick={handleMenuClose}   >My account</MenuItem>
                            </button></Link>

                          </MenuItem>


                    {/* orders*/}
                          <MenuItem onClick={handleMenuClose}>
                            <button className='box'>
                              <IoSettingsOutline/>
                              <MenuItem onClick={handleMenuClose}>My Order</MenuItem>
                            </button>
                          </MenuItem>

                    {/* Wishlist*/}
                          <MenuItem onClick={handleMenuClose}>
                            <button className='box'>
                              <AiOutlineHeart/>
                              <MenuItem onClick={handleMenuClose}>Wishlist</MenuItem>
                            </button>
                          </MenuItem>


                    {/* Help*/}
                        <MenuItem onClick={handleMenuClose}>
                            <button className='box'>
                              <GrHelp/>
                              <MenuItem onClick={handleMenuClose}>Help</MenuItem>
                            </button>
                          </MenuItem>
                    {/* Log Out*/}
                        <MenuItem onClick={handleMenuClose}>
                        <Link to='/register' style={{textDecoration: 'none'}}> 
                            <button className='box'>
                              <BiLogOut />
                              <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
                            </button>
			                  </Link>

                          </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menu encore non fonctionnel */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/'> <img src={Medicine} alt='Medicine' /> </Link>
            
          </Typography>

          {/* Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


            {/* panier */}
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={cartTotalQuantity} color="error">
              <React.Fragment>
              <ShoppingBasketIcon  onClick={toggleDrawer('right', true)}/>
              <Drawer
            anchor={'right'}
            open={side['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
              </React.Fragment>
              </Badge>
            </IconButton>

            {/* Notification */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* user */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
               <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png" />
            </IconButton>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    
  );
}
