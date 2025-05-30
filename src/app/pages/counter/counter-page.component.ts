import { ChangeDetectionStrategy, Component, signal  } from '@angular/core';
@Component({
    
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterPageComponent {
    counter: number = 10;
    counterSignal = signal(0)

    constructor() { 
        setInterval(() => {  // para efecto de prueba del onPush
            // this.counter += 1;
            this.counterSignal.update((v) => v + 1);
            console.log('counterSignal', this.counterSignal());
            
        },2000);
    }

    increaseBy(value: number): void {
        this.counter += value;
        // this.counterSignal.set(this.counterSignal() + value); tambien vlaido pero no tan optimizado
        this.counterSignal.update(currency => currency + value);
    }

    resetCounter(): void {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}