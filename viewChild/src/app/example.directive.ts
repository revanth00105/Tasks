import { Directive ,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {

  constructor() { }
 @HostBinding('class.active')activeVariable: any;
 @HostListener('click')
 myfunction(){
   this.activeVariable=true;
 }
}
