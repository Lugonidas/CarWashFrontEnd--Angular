import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  menuMobile(){
    let nav = document.querySelector(".nav");
    nav?.classList.toggle("mostrar");
    
    window.addEventListener("resize", function () {
      //Elimina la clase de mostrar, en un tamaño de tablet
      const anchoPantalla = document.body.clientWidth;
  
      if (anchoPantalla >= 480) {
        nav?.classList.remove("mostrar");
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
