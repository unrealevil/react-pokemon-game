import React, {useContext, useState} from 'react';
import s from './index.module.css';
import HeaderBlock from "../../components/HeaderBlock";
import PokemonBlock from "../../components/PokemonBlock";
import Actions from "../../components/ActionsBlock";
import MessageBig from "../../components/MessageBig";
import Button from "../../components/Button";
import GameContext from "../../context/GameContext";
import BattleLog from "../../components/BattleLog";

const GamePage = ({history: {push}}) => {
    const {game} = useContext(GameContext);
    const [{player, enemy}, setPokemons] = useState({
            player: game.player,
            enemy: game.enemy,
        }
    );

    const onUseAction = (action) => {
        game.playerTurn(action);
        game.enemyTurn(action);
        setPokemons({
            player: game.player,
            enemy: game.enemy,
        });
    };

    return (<div className={s.body}>
        <HeaderBlock/>
        <div className={s.playground}>
            <div id="left-character"><PokemonBlock pokemon={player}/></div>
            <div className={s.action}>
                {!game.isGameOver && <Actions actions={player.actions} onUseAction={onUseAction}/>}
                {game.isPlayerWin() && <MessageBig color={'#fdf200'}>Эпическая победа!!!</MessageBig>}
                {game.isPlayerLost() && <MessageBig color={'red'}>Вы проиграли :((</MessageBig>}
                {game.isDraw() && <MessageBig color={'yellow'}>Ничья</MessageBig>}
                {game.isGameOver && <MessageBig><Button onClick={() => push('/')}>Выйти</Button></MessageBig>}
            </div>
            <div id="right-character"><PokemonBlock pokemon={enemy}/></div>
        </div>
        <BattleLog/>
    </div>);
}

export default GamePage;
