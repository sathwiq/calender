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
  dateNow  = [ ]
  date
  greater = false
  ngOnInit() {
    
    this.date = this.events.getSelectedday()
    this.events.getSeleteddayUpdateListener()
      .subscribe(e =>{
        this.date = e[0]
        console.log(e)
        this.greater = false
        let  dateN   = new Date()
        let date1 =
         dateN.getFullYear() +
        "-" +
        ("00" + ( dateN.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" +  dateN.getDate()).slice(-2);
        this.dateNow =  date1.split("-")

        console.log(this.dateNow)
        console.log(this.date.split("-")  )
        let selectedDate = this.date.split("-")
        if(  selectedDate[0]  >=  this.dateNow[0]   && 
        parseInt( selectedDate[1]) >=  parseInt(this.dateNow[1])  && 
          parseInt(selectedDate[2])  >= parseInt(this.dateNow[2]) ){
          this.greater = true 
          console.log('fuck')
        }
      })

      // this.currentMonth = parseInt(("00" + (this.dateNow.getMonth() + 1)).slice(-2)) 
      // this.currentYear =  this.dateNow.getFullYear()
      // ("00" + event.getDate()).slice(-2)
      let  dateN   = new Date()
        let date1 =
         dateN.getFullYear() +
        "-" +
        ("00" + ( dateN.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" +  dateN.getDate()).slice(-2);
        this.dateNow =  date1.split("-")
         
        let selectedDate = this.date[0].split("-")
        if( parseInt(selectedDate[0]) >= parseInt(this.dateNow[0])   && 
        parseInt( selectedDate[1]) >=  parseInt(this.dateNow[1])  &&   parseInt(selectedDate[2])  >= parseInt(this.dateNow[2]) ){
          this.greater = true 
        }
  }
  onAdd(form : NgForm){
    console.log(form.value.pre)
    this.events.addEvent(form.value)
    form.onReset()
    this.router.navigateByUrl('')
  }
}
