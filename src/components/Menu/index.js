import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import './menu.css'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='OPAflix logo' />
            </a>
            
            <Button className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;
