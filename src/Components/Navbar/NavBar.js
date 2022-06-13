import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const categories = [
        { route: "/products/tortas", label: "Tortas" },
        { route: "/products/alfajores", label: "Alfajores" },
        { route: "/products", label: "Todos" }
    ]

    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="/Logo1.png" />
                </div>
                <ul className='navbar'>
                    <li>
                        <Button sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar_btn' >
                            <Link to="/">Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar_btn'
                        >
                            <Link to='/products'>Productos</Link>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {categories.map(({ route, label }) => {
                                return (
                                    <MenuItem onClick={handleClose}>
                                        <Link to={route}>{label}</Link>
                                    </MenuItem>)
                            })}
                        </Menu>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar_btn' >
                            <Link to='/Eventos'>Eventos</Link>
                        </Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar_btn' >
                            <Link to='/Nosotros'>Nosotros</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar