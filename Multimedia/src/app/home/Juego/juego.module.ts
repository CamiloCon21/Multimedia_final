import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { navbarModule } from '../../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../home-routingmodule';
import { playModule } from '../play/play.module';
import { footerModule } from '../footer/footer.module';
import { navbar2Module } from 'src/app/navbar2/navbar2.module';
import { juegoComponent } from './juego.component';
import { SafePipe } from 'src/app/pipe';





@NgModule({
  declarations: [
    juegoComponent,
    SafePipe
 
    
   
       ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonModule,
    navbar2Module,
    footerModule,
    FormsModule,
    ReactiveFormsModule,
    playModule
    
  ],
  exports: [
   juegoComponent,
  ]
})
export class juegoModule { }
