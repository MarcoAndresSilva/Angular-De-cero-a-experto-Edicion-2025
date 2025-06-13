import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent { 
    name = signal('')
    power = signal(0);
    // characters: Character[] = [];

    
   addCharacter(): void {
    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: 10, //id de ejemplo 
      name: this.name(),
      power: this.power(),
    };

    // this.characters.push(newCharacter);
    console.log({newCharacter});
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
