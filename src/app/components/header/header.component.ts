import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons' 
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   logoSrc = '../assets/images/logo.png'; 
    logoAlt = 'logo';
   topnav: string = "topnav";
    responsive: string = "responsive";
    status: boolean = true;
    searchStatus: boolean = true;
    faTimes = faTimes as IconProp;

  constructor() { }

  ngOnInit(): void {
  }

  
 onToggle() {
   this.status = !this.status;
 }

 onToggleSearch() {
   this.searchStatus = !this.searchStatus;
 }


}
