import Race from './Races';

export default class Dwarf extends Race {
  private static Count = 0;

  static createdRacesInstances(): number {
    this.Count += 1;  
    return this.Count;
  }

  maxLifePoints = 80;
}