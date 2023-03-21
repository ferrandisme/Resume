import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DescriptionComponent } from './description/description.component';
import { SocialComponent } from './social/social.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
    SocialComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class HomeModule { }
