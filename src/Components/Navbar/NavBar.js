import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget';

const NavBar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <div className='container-logo'>
                    <img src="./Logo1.png" />
                </div>
                <ul>
                    <li>
                        <Button sx={{ color: 'white' }}>Home</Button>
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
            </Toolbar>
            <CartWidget />
        </AppBar>
    )
}

export default NavBar