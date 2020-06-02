import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { CalenderComponent } from './calender/calender.component';
import { EventsComponent } from './calender/events/events.component';
import { AddeventsComponent } from './calender/addevents/addevents.component';
import { EditeventsComponent } from './calender/editevents/editevents.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    EventsComponent,
    AddeventsComponent,
    EditeventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
