import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  /*
    * Para sobrescrever o erro em Race.ts e implementar maxLifePoints
  */
  static createdRacesInstances(): number {
    return Orc.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
