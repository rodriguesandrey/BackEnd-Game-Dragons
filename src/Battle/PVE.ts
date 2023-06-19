import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private legions: (SimpleFighter | Fighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    this.legions.forEach((legion) => {
      while (this._player.lifePoints > 0 && legion.lifePoints > 0) {
        this._player.attack(legion);
        legion.attack(this._player);
      }
    });
    return super.fight();
  }
}