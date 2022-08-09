import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

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
