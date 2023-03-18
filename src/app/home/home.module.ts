import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class HomeModule { }
