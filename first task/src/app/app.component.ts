import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountserviceService } from './countservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy {
  title = 'task1';
  @ViewChild('mySidenav')
  mySidenav!: ElementRef;
  route: any;
  // sideBarOpen: any;

  constructor(
    private router:Router,
    private activateRoute: ActivatedRoute,
    private countServ: CountserviceService
  ) {
    console.log('something in constructor')
    this.countServ.counter.subscribe((data: any) => {
      console.log(data)
    }) 
  }


  ngAfterViewInit() {
    console.log(this.mySidenav.nativeElement.innerHTML);
  }
  
  ngOnChanges() {
    console.log('something in on changes')
  }

  ngDoCheck() {
    console.log('something in do check')
  }

  ngAfterContentInit() {
    console.log('something i after content init')
  }

  ngAfterContentChecked() {
    console.log('some thing in after content checkd')
  }

  ngAfterViewChecked() {
    console.log('somethning in after view checkd')
  }

  public openNav() {
    this.mySidenav.nativeElement.style.width = "250px";
  }

  public closeNav() {
    this.mySidenav.nativeElement.style.width = "0px";
  }

  ngOnDestroy() {
    console.log('some thing in destroy')
  }

  
  ngOnInit(): void {
    console.log('something in on init')
  }

  openMenu(){
    console.log('this is working');
    this.mySidenav.nativeElement.style.width = "0px";
    this.router.navigate(['/menu']);
  }

  openhalfdisplay(){
    this.router.navigate(['/halfdispaly'])
  }
}
