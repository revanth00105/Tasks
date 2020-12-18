import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sub: any;
  constructor(private route: Router,private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.data.subscribe((data) => {
      console.log(data)
    })
  }

}
