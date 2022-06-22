import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h2>Child Component</h2>
 <h3>Power set by parent is : {{ childPower }}</h3>
  `,
  styles: []
})
export class ChildComp {
  title = 'child component';

  
  @Input() childPower:any =0;
  constructor(){
    console.log("Child Component's constructor was called")
  }
  ngOnChanges(){
    console.log("Child Component's ngOnChanges was called")
  }
  ngOnInit(){
    console.log("Child Component's ngOnInit was called")
  }
  ngDoCheck(){
    console.log("Child Component's ngDoCheck was called")
  }
  ngAfterContentInit(){
    console.log("Child Component's ngAfterContentInit was called")
  }
  ngAfterContentChecked(){
    console.log("Child Component's ngAfterContentChecked was called")
  }
  ngAfterViewInit(){
    console.log("Child Component's ngAfterViewInit was called")
  }
  ngAfterViewChecked(){
    console.log("Child Component's ngAfterViewChecked was called")
  }
  ngOnDestroy(){
    console.log("Child Component's ngOnDestroys was called")
  }
}
