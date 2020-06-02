import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { EditeventsComponent } from './calender/editevents/editevents.component';
import { EventsComponent } from './calender/events/events.component';
import { AddeventsComponent } from './calender/addevents/addevents.component';
 

const routes: Routes = [

    { path : 'edit', component : EditeventsComponent },
    { path : '', component : EventsComponent},
    { path : 'add', component : AddeventsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
