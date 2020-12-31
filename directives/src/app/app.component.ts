import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from './sample-test/sample.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'directives';
  displayName = false;
  display = '';
  public branch = "Ece"
  public branches = ['vue', 'angular', 'react', 'js'];
  branchStyle: any;
  public date =new Date();
  public observableData: any;
 
  
  constructor(
    private router:Router,
    private sampleServ: SampleService
    ) {
    this.branchStyle = {
      'border-style': 'red',
      'border-color': 'black',
      'color': 'green'

    };
  //  this.getCurrentDate()
  }
 
 
  ngOnInit(): void {
    // this.getCurrentDate()
    this.observableData = this.sampleServ.getInformationDummyWithObservables();
    this.loadTopromise();
    this.loadDataWithPromises();
    this.getDataWithSubscribe();
    this.sampleTest();
  }
  // time // global variable for string interpolation on html
  // getCurrentDate() {
  //  setInterval(() => {
  //  this.time = new Date(); //set time variable with current date 
  // }, 1000); // set it every one seconds}
  
  // }
  private async loadTopromise() {
    try {
      const result = await this.sampleServ.getDummyDataWithPromise();
      console.log(result)
    } catch(error) {
      console.log(error);
    }
  }

  private loadDataWithPromises() {
    this.sampleServ.getDummyDataWithPromise().then((data: any) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  private getDataWithSubscribe() {
    this.sampleServ.getInformationDummyWithNothing().subscribe((data: any) => {
      console.log(data)
    }, (error) => {
      console.log(error);
    })
  }

  private sampleTest() {
    this.sampleServ.getInformationDummyWithObservables().subscribe(async (data: any) => {
      console.log(data)
      try {
        console.log(data)
        await console.log(data)
      } catch(error) {
        console.log(error)
      }
    }, (error) => {
      console.log(error);
    })
  }

 
  goto(){
    this.router.navigate(['/test'])
  }
}
