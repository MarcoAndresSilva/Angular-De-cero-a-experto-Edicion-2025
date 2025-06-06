import { NgClass } from '@angular/common';
import { Component , signal} from '@angular/core';
import { computed } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  // selector: 'app-dragonball',
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('Goten');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Gohan', power: 7500 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Krillin', power: 5000 },
    { id: 6, name: 'Yamcha', power: 4000 },
    { id: 7, name: 'Trunks', power: 3000 },
    // { id: 8, name: 'Nappa', power: 2000 },
    // { id: 9, name: 'Broly', power: 1000 },
    // { id: 10, name: 'Goten', power: 100 },
    
  ]);

  // powerClasses = computed(() => {
  //   return{
  //     'text-danger': true,
  //   };
  // });

  addCharacter(): void {
    this.characters.set([
      ...this.characters(),
      {
        id: this.characters().length + 1,
        name: this.name(),
        power: this.power(),
      },
    ]);
    this.name.set('');
    this.power.set(0);
  }
}
