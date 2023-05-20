
import { NavbarComponent } from '../../navbar/navbar.component';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { playComponent } from '../play/play.component';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
  
})
export class achievementsComponent implements OnInit {
  
  Activarlogro = false
  Activar = false;
  Activar2 = false;

  constructor() {
    
   }

  ngOnInit(): void {
    
    
  }
    
  activar(){
    this.Activar = true;
    console.log('asdasd')
   }
   activar2(){
    this.Activar2 = true;
    console.log('asdasd')
   }
  
   Activarlogro2(){
    this.Activarlogro = true;
   }


 
}
