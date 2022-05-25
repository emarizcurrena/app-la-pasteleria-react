import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="./Logo1.png" />
                </div>
                <ul className='navbar'>
                    <li>
                        <Button sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variante='text' className='navbar_btn' >Home</Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>Productos</Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>Eventos</Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>Nosotros</Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar