import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static instances = 0;

  constructor(_name: string, private _energyType: EnergyType = 'mana') {
    super(_name);
    Mage.instances += 1;
  }
  
  public get energyType(): EnergyType {
    return this._energyType;
  }

  /*
    * Para sobrescrever o erro em Archetype.ts
  */
  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;
