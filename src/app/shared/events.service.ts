import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  currentMonth 
  curentYear
  private day = [] ;
  private events = [] ;
  private eventsUpdated = new Subject<any>();
  private selectedDate = [] ;
  private Updated = new Subject<any>();
  private selectedUpdated = new Subject<any>();
  private selectedMonthlyEvents = [] ;
  private selectedMonthlyEventsUpdated = new Subject<any>();
  constructor(private router : Router) {
    router.navigateByUrl('')
  }
  getDay(){
    return this.day;
  }
  getdayUpdateListener() {
    return this.Updated.asObservable();
  }
  getSelectedday(){
    return this.selectedDate;
  }
  getSeleteddayUpdateListener() {
    return this.selectedUpdated.asObservable();
  }
  selectEvent(a : any){
    console.log(a) 
    this.selectedDate.pop()
    let i = -1
     this.events.forEach((b,idx)=>{
      if(b.date == a){
        i = idx
      } 
    })
     console.log(i)
    if( i >= 0 ){
      this.selectedDate.push(this.events[i])
      this.router.navigateByUrl('')
    }
    else {
      this.selectedDate.push(a)
      this.selectedUpdated.next(this.selectedDate)
      this.router.navigateByUrl('add')
    }
    console.log(this.selectedDate)
  }
  addday(a: any){
    if(this.events.length == 0){
      this.day = []
    }
    this.events.forEach((b,idx)=>{
      console.log(b.date)

      if(b.date !==  this.day[this.day.length-1]){
            this.day.pop()
          this.Updated.next(this.day)
      } 
   })
    
    this.day.push(a)
    console.log(this.day)
    this.Updated.next(this.day)
    this.selectEvent(a)
  }
  getSelectedEvent(){
    return this.selectedDate;
  }
  getSeletedEventUpdateListener() {
    return this.selectedUpdated.asObservable();
  } 
  addEvent(a: any){
    let event = a
    let d= {   } 
    if(this.selectedDate[0].date !== undefined){
      d= this.selectedDate[0]
      console.log(d)
      this.events.splice(this.selectedDate[0].l, 1)
    }
    else {
      d= {
        date : this.selectedDate[0],
        l : this.events.length,
        events : []
      } 
    }
    d['events'].push(event)
    
    this.events.push(d) 
    this.getEventsMonth(this.currentMonth,this.curentYear)
    console.log(this.events)
    
    this.selectEvent(d['date'])
  }
  deleteEvent(n){
    this.events.splice(n,1)
    console.log(this.events)
    this.selectEvent(this.selectedDate[0].date)
  }
  editEvent(a : any){
    this.events[a[0].l] = a
  } 
  search(name){
    let e=[ ]
    this.events.forEach((b,idx)=>{
       b.events.forEach((ev,idx)=>{
         if(ev.name == name){
           console.log(ev)
           ev['date'] = b.date
           e.push(ev)
         }
       })
    })
    console.log(e)
    return e
  }
  getEventsMonth(month , year){
    this.currentMonth = month
    this.curentYear = year
    // console.log(a.split("-")[1]) 
    this.selectedMonthlyEvents = []
    console.log(this.selectedMonthlyEvents)
    console.log(this.events)
    this.events.forEach((b,idx)=>{
      // console.log(b.date)

      if(b.date.split("-")[0] == year && b.date.split("-")[1] == month){
          
        this.selectedMonthlyEvents.push(b)
      }
      console.log(this.selectedMonthlyEvents)
      this.selectedMonthlyEventsUpdated.next(this.selectedMonthlyEvents)
   })

   

  }
  getMonthlyEvents(){
    return this.selectedMonthlyEvents;
  }
  getMonthlyEventsUpdateListener() {
    return this.selectedMonthlyEventsUpdated.asObservable();
  }
}
