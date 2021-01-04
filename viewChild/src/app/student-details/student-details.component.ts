import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { StudentHistoryComponent } from '../student-history/student-history.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit , AfterContentInit {
  @ContentChild(StudentHistoryComponent)
  studentHistory!: StudentHistoryComponent;
  @ContentChildren(StudentHistoryComponent)
  studentHistoryList!:QueryList<StudentHistoryComponent>;
   @Input() student :any
  constructor() { }
  
  ngOnInit(): void {
  }
ngAfterContentInit(){
  setInterval(()=>{
   // this.studentHistory.history.year=19;
   this.studentHistoryList.toArray().forEach((comp)=>{
     comp.history.grade=2019;
   });
  },0)
}
}
