import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  getUrl() {
    let url = window.location.pathname;
    if (url == '/dashboard') {
      let header = document.querySelector('.header');
      let footer = document.querySelector('.footer');
      header?.classList.add("ocultar");
      footer?.classList.add("ocultar");
    }
  }

  constructor() {
    this.getUrl();
  }

  ngOnInit(): void {}
}
