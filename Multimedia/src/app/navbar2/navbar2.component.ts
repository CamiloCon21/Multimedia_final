import { Component, Injectable, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { playComponent } from '../home/play/play.component';
import { levelsComponent } from '../home/levels/levels.component';
import { juegoComponent } from '../home/Juego/juego.component';
import { settingsComponent } from '../home/settings/settings.component';
import { achievementsComponent } from '../home/achievements/achievements.component';
@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
  nombre: string
  Activarhome = false
  constructor(private router: Router, public home: HomeComponent, public play: playComponent, public levels: levelsComponent, public juego: juegoComponent, public set : settingsComponent, public log: achievementsComponent)  { }

  ngOnInit(): void {
    let id_code = sessionStorage.getItem('UsuarioLogin');
    if(id_code!=null){
    this.nombre= id_code
    console.log(id_code)
    }
  }

  inicio(){
 this.router.navigate(['auth']);
  }
  login(){
    this.router.navigate(['login']);
  }
  activar(){
 
    this.play.activar()
    this.levels.activar()
    this.juego.activar()
    this.log.activar()
    this.set.activar()
  }
  activar2(){
   
    this.play.activar2()
    this.levels.activar2()
    this.juego.activar2()
    this.set.activar2()
    this.log.activar2()
  }
}
