import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import GameContext from "../context/GameContext";

export const GameRoute = ({component: Component, ...rest}) => {
    const gameContext = useContext(GameContext);
    return (
        <Route {...rest}
               render={props => gameContext?.game
                   ? <Component {...props}/>
                   : <Redirect to="/"/>
               }
        />
    );
}



