import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarCollapsed=true;
  constructor() { }

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
onWindowScroll($event: any) {
    let element = document.querySelector('.header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-colored');
    } else {
      element.classList.remove('bg-colored');
    }
}
}
