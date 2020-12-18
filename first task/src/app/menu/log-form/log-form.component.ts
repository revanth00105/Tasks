import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountserviceService } from '../../countservice.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  

  constructor(private router:Router,
    private countServ: CountserviceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
 openTerms(){

  //  this.router.navigate(['./terms'])
 }
 openConditions(route: any){
   this.countServ.eventAction(1)
   
    this.router.navigate(['../logform/' + route], { relativeTo: this.activatedRoute })
 }
}
