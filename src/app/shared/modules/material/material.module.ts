import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {MatListModule} from '@angular/material/list';

import {MatTabsModule} from '@angular/material/tabs';
import {  MatCardModule} from '@angular/material/card';
import {  MatInputModule} from '@angular/material/input';
import {   MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import  {  MatRippleModule} from '@angular/material/';
import {  MatIconModule }from '@angular/material/icon';
import { MatSnackBarModule }from '@angular/material/snack-bar';
import {  MatButtonModule} from '@angular/material/button';
import {  MatTableModule }from '@angular/material/table';
import {  MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  exports: [MatDialogModule,MatListModule,MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
