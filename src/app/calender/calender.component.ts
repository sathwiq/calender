import { Component, OnInit ,ViewEncapsulation, AfterViewInit, Renderer2} from '@angular/core';
import { EventsService } from '../shared/events.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'], encapsulation: ViewEncapsulation.None
})
export class CalenderComponent implements OnInit , AfterViewInit {
  dateNow = new Date()
  currentMonth
  currentYear
  monthlyEvents
  months = ['January' , 'February', 'March' , 'April', 'May', 'June' , 'July', 'August', 'September','October','November','December']
  constructor(private events : EventsService, private renderer: Renderer2) { }
  ngOnInit(): void { 
    

    this.daysSelected = this.events.getDay()
    this.events.getdayUpdateListener()
      .subscribe(posts=>{
        this.daysSelected =   this.events.getDay() 
      }) 
    
    this.currentMonth = parseInt(("00" + (this.dateNow.getMonth() + 1)).slice(-2)) 
    this.currentYear =  this.dateNow.getFullYear() 
    // console.log(this.currentMonth +1)
    this.events.getEventsMonth(this.currentMonth,this.currentYear)

    this.monthlyEvents = this.events.getMonthlyEvents()
      this.events.getMonthlyEventsUpdateListener()
        .subscribe(e =>{ 
           this.monthlyEvents = e
        })
      
  }
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-next-button');
    const pbutton = document.querySelectorAll('.mat-calendar-previous-button');
   
    if (buttons) {
      Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          // alert('Right Arrow buttons clicked');
         
          if( this.currentMonth ==12){
            this.currentMonth = 1
            this.currentYear +=1
          }
          else  {
            this.currentMonth += 1
          }
          this.events.getEventsMonth(this.currentMonth,this.currentYear)
        });
      });
      Array.from(pbutton).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          // alert('Left Arrow buttons clicked');
          if( this.currentMonth ==1 ){
            this.currentMonth = 12
            this.currentYear -=1
          }
          else  {
            this.currentMonth -= 1
          }
          this.events.getEventsMonth(this.currentMonth,this.currentYear)
        });
      });
 
    }
  }
 
  daysSelected: any[] = [];
  event: any;
  
  isSelected = (event: any) => { 
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    return this.daysSelected.find(x => x == date) ? "selected" : null;
  };
  
  select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x == date);
    if (index < 0) {  
      this.events.addday(date , event )
    }
    else  { 
      this.events.selectEvent(date )
    }
    
    calendar.updateTodaysDate();
  }
  monthSelected(event ){ 
  }
}
