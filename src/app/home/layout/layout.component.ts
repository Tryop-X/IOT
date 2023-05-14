import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  islogged= false;
  nombreUsuario: string = '';
  isAdmin= false;

  constructor(

  ) { }

  validarAdmin(){

  }


  ngOnInit(): void {
    this.validarAdmin()
    if(1 == 1){
      this.ponerNombre();
      this.islogged=  true;
    }else {
      this.islogged= false;
    }
  }

  logOut(){
    window.location.reload()
  }

  ponerNombre(){
    // @ts-ignore
    this.nombreUsuario = this.token.getUserName();
    var cap= this.nombreUsuario.charAt(0).toUpperCase() + this.nombreUsuario.slice(1).toLowerCase();
    this.nombreUsuario = cap;
  }
}
