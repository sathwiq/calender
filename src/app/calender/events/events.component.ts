import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  add = false
  constructor(private events : EventsService, private router : Router) { }
  date ;
  searchedEvents =[]
  monthlyEvents
  ngOnInit() {   
      this.date = this.events.getSelectedday()
      this.events.getSeleteddayUpdateListener()
        .subscribe(e =>{
          // console.log(e)
        })
      this.monthlyEvents = this.events.getMonthlyEvents()
      this.events.getMonthlyEventsUpdateListener()
        .subscribe(e =>{
          // console.log(e)
           this.monthlyEvents = e
        })
  }
  delete(){
    this.events.deleteEvents(this.date[0].l)
  }
  deleteEvent(id){ 
    if(this.date[0].events.length == 1){
      this.delete()
    }
    else
    this.events.deleteEvent(this.date[0].l, id)
  }
  edit(){ 
    this.router.navigateByUrl('edit')
  }
  search
  display = false
  onSearch(form : NgForm){
    this.search = form.value.name
    this.display = false
    this.searchedEvents =    this.events.search(form.value.name)
    this.display = true
  }
}
