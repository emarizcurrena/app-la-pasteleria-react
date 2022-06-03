import './NavBar.css'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='container-logo'>
                    <img src="/Logo1.png" />
                </div>
                <ul className='navbar'>
                    <li>
                        <Button sx={{ color: 'white' }} disableRipple style={{ backgroundColor: 'transparent' }} variante='text' className='navbar_btn' >
                            <Link to="/">Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>
                            <Link to='/products/alfajores'>Alfajores</Link>
                        </Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>
                            <Link to='/products/tortas'>Tortas</Link>
                        </Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>Eventos</Button>
                    </li>
                    <li>
                        <Button sx={{ color: 'white' }}>
                            <Link to='/contact'>Nosotros</Link>
                        </Button>
                    </li>
                </ul>
                <CartWidget />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar