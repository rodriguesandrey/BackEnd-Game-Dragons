import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static Count = 0;
    
  static createdArchetypeInstances(): number {
    this.Count += 1;  
    return this.Count;
  }
          
  energyType: EnergyType = 'mana';
}