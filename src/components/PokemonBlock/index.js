import React from "react";
import s from "./pokemon.module.css";
import cl from "classnames";

const PokemonBlock = (props) => {
    const {pokemon: {name, image, hp, defaultHp}} = props;
    const hpPercent = Math.round(hp / defaultHp * 100);
    const progressbarStyle = {
        width: hpPercent + '%'
    };

    return (
        <div className={s.pokemon}>
            <span className={s.lvl}>Lv. 1</span>
            <img src={image} className={s.sprite} alt={name}/>
            <div className={s.details}>
                <h2 className={s.name}>{name}</h2>
                <div className={s.hp}>
                    <div className={s.bar}>
                        <div className={cl(s.health, s['hp-progressbar'])} style={progressbarStyle}/>
                    </div>
                    <span className={cl(s.text, s['hp-text'])}>{hp} / {defaultHp}</span>
                </div>
            </div>
        </div>
    );
}

export default PokemonBlock;
