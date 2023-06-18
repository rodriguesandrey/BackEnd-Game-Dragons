import Race from './Races';

export default class Orc extends Race {
  private static Count = 0;
    
  static createdRacesInstances(): number {
    this.Count += 1;  
    return this.Count;
  }
    
  maxLifePoints = 74;
}