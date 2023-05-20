import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class pruebaComponent implements OnInit {

  public Usuario: string;
 form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({ 

      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],


    })
  }
   

  ngOnInit(): void {

  }

  ingresar(){
    
 
    const usuario = this.form.get('usuario')?.value;
    sessionStorage.setItem('UsuarioLogin', usuario);
    this.router.navigate(["auth/home"]);
  }

}
