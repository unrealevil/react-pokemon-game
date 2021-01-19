import React, {useContext} from 'react';
import GameContext from "../../context/GameContext";
import s from './battle-log.module.css';

const BattleLog = () => {
    const {game} = useContext(GameContext);
    const log = game.log.slice().reverse();
    return (
        <div className={s['battle-log']}>
            {log.map(({id, message}, index) => <p key={id} dangerouslySetInnerHTML={{__html: message}}/>)}
        </div>
    );
}

export default BattleLog;
