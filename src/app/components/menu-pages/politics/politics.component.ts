import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

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
