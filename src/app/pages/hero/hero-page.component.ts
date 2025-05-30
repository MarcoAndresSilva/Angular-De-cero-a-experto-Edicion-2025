import { Component, signal , computed  } from '@angular/core';
@Component({
    
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css']
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    heroDescription = computed(() => `${ this.name() } - ${ this.age() }`);

    capitalizedName = computed(() => this.name().toUpperCase());

    constructor() { 
    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge(): void {
        this.age.set(60);
    }
    
    resetForm(): void {
        this.name.set("Ironman");
        this.age.set(45);
    }

}