import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }

  /*
    * Para sobrescrever o erro em Race.ts e implementar maxLifePoints
  */
  static createdRacesInstances(): number {
    return Halfling.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
