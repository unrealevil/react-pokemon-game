import {DamageAction, HealthAction} from "./action";

export class Pokemon {

    constructor({id, name, hp, img, attacks, drugs = []}) {
        this.id = id;
        this.name = name;
        this.hp = this.defaultHp = hp;
        this.image = img;
        this.level = 1;//@todo
        this.actions = [
            ...attacks.map(data => new DamageAction(data)),
            ...drugs.map(data => new HealthAction(data)),
        ];
    }

    isDead() {
        return 0 === this.hp;
    }

    makeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    addHp(amount) {
        this.hp += amount;
        if (this.hp > this.defaultHp) {
            this.hp = this.defaultHp;
        }
    }
}
