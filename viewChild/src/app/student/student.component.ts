import { ViewChild, ViewChildren ,QueryList } from '@angular/core';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit , AfterViewInit  {

  constructor() { }
 @ViewChild(StudentDetailsComponent)
  studentdetail!: StudentDetailsComponent;
  @ViewChildren(StudentDetailsComponent) 
  studentdetails!:QueryList<StudentDetailsComponent>;


  
  ngOnInit(): void {
  }
  histories=[
    {
      year:2020,
      school:'Navabharat'
    },
    {
      year:2021,
      school:'chaitanya'
    },
    {
      year:2021,
      school:'narayana'
    }
  ]
  public students=[
  {
    id: 1,
    name: "revanth",
    grade: 12,
    histories:this.histories
  },
 {
   id: 2,
   name:"nani",
   grade:13,
   histories:this.histories
 },
 {
   id: 3,
   name:"revanthnani",
   grade:14,
   histories:this.histories
 }

]

ngAfterViewInit(){
setTimeout(()=>{
this.studentdetail.student.name="kishore";
 this.studentdetails.toArray().forEach((comp:any)=>{
comp.student.grade=13;
})
} ,0); 
}
}
