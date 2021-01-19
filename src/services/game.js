import {random} from "./utils";
import battleLog from "../models/battle-log";

export default class Game {

    isGameOver = false;

    log = [];

    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.addLogMessage(battleLog.startGame(this.player, this.enemy));
    }

    playerTurn(action) {
        if (this.isGameOver) {
            return;
        }
        action.apply(this.player, this.enemy);
        this.addLogMessage(action.popLogs().join('<br/>'));
        this.checkEndGameCondition();
    }

    enemyTurn() {
        if (this.isGameOver) {
            return;
        }
        const availableActions = this.enemy.actions.filter(action => !action.isDisable());
        if (availableActions) {
            const action = availableActions[[random(0, availableActions.length)]];
            action.apply(this.enemy, this.player);
            this.addLogMessage(action.popLogs().join('<br/>'));
        }
        this.checkEndGameCondition();
    }

    checkEndGameCondition() {
        if (this.player.isDead()) {
            this.addLogMessage(battleLog.playerLost(this.player, this.enemy));
            this.isGameOver = true;
        }
        if (this.enemy.isDead()) {
            this.addLogMessage(battleLog.playerWin(this.player, this.enemy));
            this.isGameOver = true;
        }
    }

    isPlayerWin() {
        return this.isGameOver && this.enemy.isDead() && !this.player.isDead();
    }

    isPlayerLost() {
        return this.isGameOver && !this.enemy.isDead() && this.player.isDead();
    }

    isDraw() {
        return this.isGameOver && this.enemy.isDead() && this.player.isDead();
    }

    addLogMessage(message) {
        this.log.push({id: this.log.length, message});
    }
}
