abstract class Race {
  constructor(private _name: string, private _dexterity: number) { }
  /* 
    * Para permitir acesso ao name e dexterity
  */
  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
