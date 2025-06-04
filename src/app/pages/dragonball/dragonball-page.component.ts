import { Component , signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  // selector: 'app-dragonball',
  // imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Gohan', power: 7500 },
    { id: 4, name: 'Piccolo', power: 7000 },
  ])
}
