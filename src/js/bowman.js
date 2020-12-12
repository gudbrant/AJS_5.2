import Character from './character (2)';

export default class bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 55;
    this.defence = 25;
  }
}