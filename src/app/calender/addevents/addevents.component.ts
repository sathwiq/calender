import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/shared/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent implements OnInit {

  constructor(private events : EventsService, private router : Router) { }
date
  ngOnInit() {
    this.date = this.events.getSelectedday()
    this.events.getSeleteddayUpdateListener()
      .subscribe(e =>{
        this.date = e[0]
        console.log(e)
      })
  }
  onAdd(form : NgForm){
    console.log(form.value.pre)
    this.events.addEvent(form.value)
    form.onReset()
    this.router.navigateByUrl('')
  }
}
