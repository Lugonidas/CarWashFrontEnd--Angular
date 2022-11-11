import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuMobile(){
    let nav = document.querySelector(".sidebar__nav");
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
