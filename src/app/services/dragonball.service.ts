import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DragonballService {

characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9500 },
    { id: 3, name: 'Gohan', power: 7500 },   
  ]);

  saveToLocalStorage = effect(() => {
    console.log(`Characters count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters())) 
  })

  addCharacter(character: Character): void {  
    this.characters.update((list) => [...list, character])
  }
    
}

// Inyección de dependencias DI