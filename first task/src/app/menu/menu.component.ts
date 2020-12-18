import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
openLogform(){
  console.log('this is working');
  this.router.navigate(['./logform/terms'], { relativeTo: this.activateRoute});
}
}



