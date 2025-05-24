import { Component } from '@angular/core';
@Component({
    
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css']
})

export class CounterPageComponent {
    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    resetCounter(): void {
        this.counter = 10;
    }
}