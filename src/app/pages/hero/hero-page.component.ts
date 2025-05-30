import { ChangeDetectionStrategy, Component, signal  } from '@angular/core';
@Component({
    
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    constructor() { 
    }

    getHeroDescription(): string {
        return `${ this.name() } - ${ this.age() }`;

    }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge(): void {
        this.age.set(60);
    }

    capitalizedName(): string {
        return this.name().toUpperCase();
    }
    
    resetForm(): void {
        this.name.set("Ironman");
        this.age.set(45);
    }

}