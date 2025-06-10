import { Component , signal} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({

  templateUrl: './dragonball-super-page.component.html',
  styleUrls: ['./dragonball-super.component.scss'],
  imports: [CharacterListComponent]
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Gohan', power: 7500 },   
  ]);


  addCharacter(): void {
    if(!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }

}
