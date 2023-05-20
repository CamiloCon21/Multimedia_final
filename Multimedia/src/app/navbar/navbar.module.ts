
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    NavbarComponent,
    
   
       ],
  imports: [
    CommonModule,  
    NgbModule,
    FormsModule,
    ReactiveFormsModule

   
    
  ],
  exports: [
    NavbarComponent,
  ]
})
export class navbarModule { }
