import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static instances = 0;

  constructor(_name: string, private _energyType: EnergyType = 'stamina') {
    super(_name);
    Ranger.instances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  /*
    * Para sobrescrever o erro em Archetype.ts
  */
  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}

export default Ranger;
