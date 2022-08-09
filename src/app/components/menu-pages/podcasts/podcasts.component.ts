import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

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
