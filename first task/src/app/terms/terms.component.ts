import { Component, OnInit } from '@angular/core';
import { CountserviceService } from './../countservice.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  test: any;
  constructor(private counterserv: CountserviceService) { }

  ngOnInit(): void {
  }


  submitdata(heroForm: any){
    console.log(heroForm.value)
     this.counterserv.displayText(heroForm.value)
  }

}
