import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { navbarModule } from '../../navbar/navbar.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';

import { NavbarComponent } from '../../navbar/navbar.component';
import { HomeRoutingModule } from '../home-routingmodule';
import { playComponent } from './play.component';
import { footerModule } from '../footer/footer.module';
import { navbar2Module } from 'src/app/navbar2/navbar2.module';




@NgModule({
  declarations: [
    
    playComponent
    
   
       ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule,
    navbar2Module,
    footerModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    playComponent,
  ]
})
export class playModule { }
