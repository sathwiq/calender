import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editevents',
  templateUrl: './editevents.component.html',
  styleUrls: ['./editevents.component.css']
})
export class EditeventsComponent implements OnInit {
  constructor(private events : EventsService, private router : Router) { }
  date ;
  ngOnInit() {  
      this.date = this.events.getSelectedday()
      this.events.getSeleteddayUpdateListener()
        .subscribe(e =>{ 
        })
  }
  onEdit(form : NgForm){
    console.log(this.date)
    this.events.editEvent(this.date)
  }
}
