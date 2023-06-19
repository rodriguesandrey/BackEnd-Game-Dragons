import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private playOne: Fighter, private playTwo: Fighter) {
    super(playOne);
  }

  fight(): number {
    while (this.playOne.lifePoints > 0 && this.playTwo.lifePoints > 0) {
      this.playOne.attack(this.playTwo);
      this.playTwo.attack(this.playOne);
    }
    return super.fight();
  }
}