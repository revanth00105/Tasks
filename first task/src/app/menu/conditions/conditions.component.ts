import { Component, OnInit } from '@angular/core';
import { CountserviceService } from 'src/app/countservice.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
 public res:any;
  constructor(private counterserv: CountserviceService) {
    this.counterserv.dispaly.subscribe(res => {
      console.log(res)
    })
   }

  ngOnInit(): void {
  }

}
