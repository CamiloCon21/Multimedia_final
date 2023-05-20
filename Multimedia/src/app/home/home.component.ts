import { Component, Injectable, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   Activar = false;
   Activar2 = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  Ajustes(){
 
   this.router.navigate(['auth/settings']);
   
  }
  play(){
  
    this.router.navigate(['auth/play']);
    
   }

   logros(){
    this.router.navigate(['auth/achievements']);
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
