import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
import PokemonChoicePage from "./pages/PokemonChoicePage";
import GameContext from "./context/GameContext";
import {GameRoute} from "./routes/GameRoute";


function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={WelcomePage}/>
            <GameContext.Provider value={{game: null}}>
                <Route path="/choice" exact component={PokemonChoicePage}/>
                <GameRoute path="/game" component={GamePage}/>
            </GameContext.Provider>
        </BrowserRouter>
    );
}

export default App;
