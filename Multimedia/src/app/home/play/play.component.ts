
import { NavbarComponent } from '../../navbar/navbar.component';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { levelsComponent } from '../levels/levels.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})



export class playComponent implements OnInit {
   NYO : any;
   Activar = false;
   Activar2 = false;
   public recibidoDePadre: any;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
    
Ajustes(){
 sessionStorage.setItem('id_codigo', this.recibidoDePadre);
 this.router.navigate(['auth/levels'])
return this.recibidoDePadre

 
}

activar(){
  this.Activar = true;
  console.log('activarplat')
 }
 activar2(){
  this.Activar2 = true;
  console.log('activarplay')
 }

}
