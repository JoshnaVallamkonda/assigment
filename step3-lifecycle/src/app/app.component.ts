import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Main App Component</h1>
  <input #ti type="number">
  <button (click)="increasePower(ti.value)">Set Power</button>
  <hr>
  <app-child [childPower]="power"></app-child>
  
  `,
  styles: []
})
export class AppComponent {
  title = 'step3-lifecycle';
  power:number = 0;
  increasePower (val:any){
    this.power  = Number(val)
  }
 
  
}

