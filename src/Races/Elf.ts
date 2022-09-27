import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static instances = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }

  /*
    * Para sobrescrever o erro em Race.ts e implementar maxLifePoints
  */
  static createdRacesInstances(): number {
    return Elf.instances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
