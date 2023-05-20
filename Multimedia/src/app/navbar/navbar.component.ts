import { Component, Injectable, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
import { playComponent } from '../home/play/play.component';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nombre: string
  Activarhome = false
  Activar = false
  closeResult: string = '';
  option : any;

  constructor(private router: Router, public modalService: NgbModal, public home: HomeComponent) { }

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
    console.log(this.option)
    this.home.activar()
  
  }
  activar2(){
    console.log(this.option)
    this.home.activar2()
  
  }
  
  

}
