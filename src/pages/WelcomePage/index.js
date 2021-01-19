import React from 'react';
import s from './index.module.css';
import logo from './logo.svg';
import HeaderBlock from "../../components/HeaderBlock";
import Button from "../../components/Button";

const Welcome = (props) => {
    const {history: {push}} = props;
    return (
        <div className={s.welcome}>
            <header className={s.header}>
                <HeaderBlock/>
                <img src={logo} className={s.logo} alt="logo"/>
                <p>
                    <Button onClick={() => push('/choice')}>
                        Start Game
                    </Button>
                </p>
            </header>
        </div>
    );
}

export default Welcome;

