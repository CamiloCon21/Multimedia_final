
import { navbarModule } from '../../navbar/navbar.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home.component';

import { NavbarComponent } from '../../navbar/navbar.component';
import { HomeRoutingModule } from '../home-routingmodule';

import { settingsComponent } from './settings.component';
import { playComponent } from '../play/play.component';
import { footerModule } from '../footer/footer.module';
import { navbar2Module } from 'src/app/navbar2/navbar2.module';



@NgModule({
  declarations: [
    
    settingsComponent,

    
   
       ],
  imports: [
    CommonModule,    
    CommonModule,
    navbar2Module,
    footerModule
    
  ],
  exports: [
    settingsComponent,
  ]
})
export class settingsModule { }
