

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pruebaComponent } from './prueba.component';






const routes: Routes = [
    {
        path: 'login', component: pruebaComponent 
      

     
        
    },
   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pruebautingModule { }
