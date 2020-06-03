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

  constructor(private events : EventsService, private router : Router  ) { }
  dateNow  = [ ]
  date
  greater = false
  ngOnInit() { 
//  getting selected day on the calender to add events
    this.date = this.events.getSelectedday()
    this.events.getSeleteddayUpdateListener()
      .subscribe(e =>{
        this.date = e[0]
        // console.log(e)
        // to stop users from adding events for past days
        this.greater = false
        let  dateN   = new Date()
        let date1 =
         dateN.getFullYear() +
        "-" +
        ("00" + ( dateN.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" +  dateN.getDate()).slice(-2);
        this.dateNow =  date1.split("-")

        // console.log(this.dateNow)
        // console.log(this.date.split("-")  )
        let selectedDate = this.date.split("-")
        if(  selectedDate[0]  >=  this.dateNow[0]   && 
        parseInt( selectedDate[1]) >=  parseInt(this.dateNow[1])  && 
          parseInt(selectedDate[2])  >= parseInt(this.dateNow[2]) ){
          this.greater = true  
        }
      }) 
      let  dateN   = new Date()
        let date1 =
         dateN.getFullYear() +
        "-" +
        ("00" + ( dateN.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" +  dateN.getDate()).slice(-2);
        this.dateNow =  date1.split("-")
        // console.log(this.date)
        let selectedDate
        if(this.date[0].date){
          selectedDate = this.date[0].date.split("-")
        }else{
          selectedDate = this.date[0].split("-")
        }
        
        if( parseInt(selectedDate[0]) >= parseInt(this.dateNow[0])   && 
        parseInt( selectedDate[1]) >=  parseInt(this.dateNow[1])  &&   parseInt(selectedDate[2])  >= parseInt(this.dateNow[2]) ){
          this.greater = true 
        }
  }
  error = false
  msg = ''
  // adding  events
  onAdd(form : NgForm){ 
    if(form.invalid){
      return
    }
    if(form.value.start_time > form.value.end_time){
       this.error = true 
      this.msg = 'please select starting time less than end time'
      return
    } 
    if( form.value.remind_before >  form.value.start_time  ){
      this.error = true 
      this.msg = 'please select remind before time less than start time'
      return
    } 
    
    let event =form.value
    if(event.remind){ 
      let remind = new Date()
      if(this.date[0].date){
        remind.setDate(parseInt (this.date[0].date.split("-")[2]  )) 
        remind.setFullYear(this.date[0].date.split("-")[0]  ) 
        remind.setMonth(parseInt (this.date[0].date.split("-")[1])-1) 
      }else{
        remind.setDate(parseInt (this.date[0].split("-")[2]  ))
 
        remind.setFullYear(this.date[0].split("-")[0]  ) 
        remind.setMonth(parseInt (this.date[0].split("-")[1])-1)  
      }
      remind.setHours(parseInt ( event.remind_before ))
      remind.setMinutes(parseInt ( event.remind_before.split(":")[1]  )) 
      let milli = remind.getTime()
      let dnow  = new Date()
      // console.log(dnow)
      let milldnow = dnow.getTime()
      const l =  Math.abs(milli -  milldnow);
      // console.log(milli)  
      // console.log(milldnow)
      setTimeout(()=>{  
         this.events.msg(event.name)
         console.log(event.name)
      }, l   );
      form.value['alerts'] = remind
    }
    this.events.addEvent(form.value)
    form.onReset()
    this.router.navigateByUrl('')
  }
}
