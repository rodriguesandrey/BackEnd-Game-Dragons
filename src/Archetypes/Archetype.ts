import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name;
  private _special;
  private _cost;

  constructor(name: string, special = 0, cost = 0) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract energyType: EnergyType;

  get name(): string { return this._name; }
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }
}