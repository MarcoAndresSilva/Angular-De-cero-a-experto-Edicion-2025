import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DragonballService {

characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Gohan', power: 7500 },   
  ]);

  addCharacter(character: Character): void {  
    this.characters.update((list) => [...list, character])
  }
    
}

// Inyección de dependencias DI