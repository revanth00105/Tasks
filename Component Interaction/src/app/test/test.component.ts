import { Component, OnInit ,Input, Output , EventEmitter , OnChanges} from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h1>
    {{"hello " +parentData}}
    <button (click)="fireEvent()" > click</button>
    </h1>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit, OnChanges {
 @Input() public  parentData : any ;
 @Output() public childEven=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log('some thing is changed');
  }
fireEvent(){
  this.childEven.emit('Hey Hello');
}
}
