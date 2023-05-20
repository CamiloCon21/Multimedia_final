import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { navbarModule } from '../../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../home-routingmodule';
import { playModule } from '../play/play.module';
import { achievementsComponent } from './achievements.component';
import { footerModule } from '../footer/footer.module';
import { navbar2Module } from 'src/app/navbar2/navbar2.module';





@NgModule({
  declarations: [
    
    achievementsComponent
    
   
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
    achievementsComponent,
  ]
})
export class achievementsModule { }
