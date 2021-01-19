import React from 'react';
import s from './HeaderBlock.module.css';
import logo from './Pokemon_logo.png';

const HeaderBlock = () => {
    return (
        <header>
            <img className={s.logo}
                 title="Pokemon Game"
                 src={logo}
                 alt="Pokemon"/>
        </header>
    );
}

export default HeaderBlock;

