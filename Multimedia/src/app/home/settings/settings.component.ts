
import { NavbarComponent } from './../../navbar/navbar.component';
import { Component, Injectable, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navbarModule } from 'src/app/navbar/navbar.module';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class settingsComponent implements OnInit {

  Activar =false;
  Activar2 = false;
  Activarnos = false;
  Activarnos2= false;
  constructor() { }

  ngOnInit(): void {
    
 
  }
    
Ajustes(){
 
}
activar(){
  this.Activar = true;
  console.log('setasd')
 }
 activar2(){
  this.Activar2 = true;
  console.log('assetsdasdasd')
 }

 activar3(){
  this.Activarnos = true;
  console.log('assetsdasdasd')
 }

 activar4(){
  this.Activarnos2 = true;
  console.log('assetsdasdasd')
 }

}
