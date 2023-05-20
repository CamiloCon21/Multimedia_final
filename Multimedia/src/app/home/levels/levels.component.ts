
import { NavbarComponent } from '../../navbar/navbar.component';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { playComponent } from '../play/play.component';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
  
})
export class levelsComponent implements OnInit {
  
  @Input() recibidoDePadre: string;
   grado: any;
   public url: any;
   Activar = false;
   Activar2= false;

  constructor(public juego: playComponent, public router: Router) {
    
   }

  ngOnInit(): void {
   
    let id_code = sessionStorage.getItem('id_codigo');
       if(id_code!=null){
       this.grado= id_code
       }
    
  }

  activar(){
    this.Activar = true;
    console.log('asdasd')
   }
   activar2(){
    this.Activar2 = true;
    console.log('asdasd')
   }
    
  
  

opcion(id:any){

  console.log(this.grado+'a')
  if(this.grado == 1){
    
    switch(id){
      case 1:  
       this.url = "https://wordwall.net/es/embed/02a45785c8c64132ae526e04cbc76555?themeId=1&templateId=5&fontStackId=0";
       sessionStorage.setItem('URL', this.url)
       
       break;
  
      case 2:   
      this.url ="https://wordwall.net/es/embed/1825877bbd14469f9eb52e49d70ea815?themeId=2&templateId=25&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
      case 3:   
      this.url ="https://wordwall.net/es/embed/0f49a587343d4dea9ccd98ca18424197?themeId=21&templateId=69&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
     }

  }
  if(this.grado == '2'){
    switch(id){
      case 1:  
      this.url ="https://wordwall.net/es/embed/0f49a587343d4dea9ccd98ca18424197?themeId=21&templateId=69&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
      case 2: 
      this.url ="https://wordwall.net/es/embed/c636256a1a8746ab8cb822f705f10071?themeId=1&templateId=5&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
      case 3:  
      this.url ="https://wordwall.net/es/embed/6960cf4478f94774905e02ec4b60a518?themeId=1&templateId=2&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
     }

  }
  if(this.grado =='3'){
    switch(id){
      case 1:   
      this.url ="https://wordwall.net/es/embed/a83a1fd0b6c9471894ed821da5075e9d?themeId=1&templateId=5&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
      case 2:   
      this.url ="https://wordwall.net/es/embed/e23a0883a05041a089aa4e1667c8d32b?themeId=23&templateId=49&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
      case 3:  
      this.url ="https://wordwall.net/es/embed/45fdd654a4ce430b9e8274d9a22fb308?themeId=2&templateId=25&fontStackId=0";
      sessionStorage.setItem('URL', this.url)
      break;
  
     }

  }
  
  

   

 
}
}