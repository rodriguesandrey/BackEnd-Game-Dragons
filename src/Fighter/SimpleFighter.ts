import Fighter from './Fighter';

export default interface SimpleFighter extends Fighter{
  receiveDamage(attackPoints: number): number
}