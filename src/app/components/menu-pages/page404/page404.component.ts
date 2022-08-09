import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
     $("svg.icon").click(function() {
      $("p.pages-mobile" ).toggleClass( "open");
    });

       
   $("li.responsive").click(function() {
      $("p.pages-mobile" ).addClass( "close");
    });
  }

}
