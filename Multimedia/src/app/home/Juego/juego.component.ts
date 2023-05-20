
import { NavbarComponent } from '../../navbar/navbar.component';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { playComponent } from '../play/play.component';
@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
  
})
export class juegoComponent implements OnInit {
  
  @Input() recibidoDePadre: string;
   URL: any;
   Activar = false;
   Activar2 = false;


  constructor(public juego: playComponent, public router: Router) {
    
   }

  ngOnInit(): void {
    
    let id_code = sessionStorage.getItem('URL');
       if(id_code!=null){
       this.URL= id_code
       }

   console.log(this.URL)
      
    
  }
  activar(){
    this.Activar = true;
    console.log('asdasd')
   }
   activar2(){
    this.Activar2 = true;
    console.log('asdasd')
   }
    
  
  
}
