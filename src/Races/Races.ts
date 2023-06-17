export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
    
  abstract get maxLifePoints(): number;
    
  static createdRacesInstances(valor: number): number {
    if (!valor) {
      throw new Error('Not implemented');
    }
    return valor;
  }
    
  public get name(): string { return this._name; }
  // public setName(value: string) { this._name = value; }

  public get dexterity(): number { return this._dexterity; }
  // public setDexterity(value: number) { this._dexterity = value; }
}
