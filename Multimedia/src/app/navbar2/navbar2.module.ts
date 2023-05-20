
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar2Component } from './navbar2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    Navbar2Component,
    
    
   
       ],
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule 
   
    
  ],
  exports: [
    Navbar2Component,
  ]
})
export class navbar2Module { }
