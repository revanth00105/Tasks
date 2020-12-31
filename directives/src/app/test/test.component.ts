import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnDestroy {

companyHistory='Since 1992';
employeeCount=110;
accountId;
userName="";
appStatus=new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve('user data received')
}, 3000);

});
  constructor() { 
    this.getCurrentDate()
  }
 

  
  time // global variable for string interpolation on html
  getCurrentDate() {
   setInterval(() => {
   this.time = new Date(); //set time variable with current date 
  }, 1000); // set it every one seconds}
  
  }
  ngOnDestroy(){
    
    console.log('it is destroyed');
     clearInterval(this.time);
    
  }
  onSubmit(signIn:any){
    console.log('login success');
    signIn.reset();
  }
}
