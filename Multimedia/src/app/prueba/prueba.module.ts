import { pruebautingModule } from './prueba-routingmodule';




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { navbarModule } from '../navbar/navbar.module';
import { NavbarComponent } from '../navbar/navbar.component';

import { pruebaComponent } from './prueba.component';
import { footerModule } from '../home/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    pruebaComponent, 
   
       ],
  imports: [
    CommonModule,

    footerModule,
    pruebautingModule,
    FormsModule,   
    ReactiveFormsModule,
   
    
   
    
  ],
 
})
export class pruebaModule { }
