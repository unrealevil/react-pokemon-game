import {random} from '../services/utils.js';
import log from './battle-log.js';

class Action {
    actionLog = [];

    constructor({name, maxCount = null}) {
        this.name = name;
        this.amount = maxCount;
    }

    isDisable() {
        return null !== this.amount && this.amount <= 0;
    }

    apply(player, enemy) {
        if (player.isDead() || enemy.isDead()) {
            return false;
        }

        if (null === this.amount) {
            return true; //бесконечное количество действий
        }
        if (!this.isDisable()) {
            --this.amount;
            return true;
        }
        return false;
    }

    pushLog(msg) {
        this.actionLog.push(msg);
    }

    popLogs() {
        const logs = this.actionLog;
        this.actionLog = [];
        return logs;
    }
}

export class DamageAction extends Action {

    constructor({minDamage, maxDamage, ...actionProps}) {
        super(actionProps);
        this.damageMin = minDamage;
        this.damageMax = maxDamage;
    }

    apply(player, enemy) {
        if (super.apply(player, enemy)) {
            const damage = random(this.damageMin, this.damageMax);
            enemy.makeDamage(damage);
            this.pushLog(log.doDamage(enemy, player));
            this.pushLog(log.damageInfo(damage, player, this, enemy));
            this.pushLog(log.hpInfo(enemy));
            return true;
        }
        return false;
    }
}

export class HealthAction extends Action {
    color = 'green';

    constructor({minHp, maxHp, ...actionProps}) {
        super(actionProps);
        this.hpMin = minHp;
        this.hpMax = maxHp;
    }

    apply(player, enemy) {
        if (super.apply(player, enemy)) {
            const hp = random(this.hpMin, this.hpMax);
            player.addHp(hp);
            this.pushLog(log.doHealing(player));
            this.pushLog(log.healingInfo(hp, this, player));
            this.pushLog(log.hpInfo(player));
            return true;
        }
        return false;
    }
}
