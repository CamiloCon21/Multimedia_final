


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { navbarModule } from '../navbar/navbar.module';


import { LoginComponent } from './login.component';
import { footerModule } from '../home/footer/footer.module';






@NgModule({
  declarations: [
    LoginComponent, 
   
       ],
  imports: [
    CommonModule,
    navbarModule,
    footerModule,  
    
  ],
  exports:[
    LoginComponent
  ]
 
})
export class loginModule { }
