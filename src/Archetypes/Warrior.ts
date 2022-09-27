import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static instances = 0;

  constructor(_name: string, private _energyType: EnergyType = 'stamina') {
    super(_name);
    Warrior.instances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  /*
    * Para sobrescrever o erro em Archetype.ts
  */
  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;
