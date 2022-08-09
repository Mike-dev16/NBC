import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit, OnDestroy {

  headlineNews: any = [];
  sortHeadlineNews: any = [];
  allHeadlineNews?: Subscription;
  trending: string = "Trending";
  length: number = Math.floor(Math.random() * 10) + 1;
  dropdown: string = "dropdown";
  easeup: string = "easeup";
  status: boolean = true;
  imageMissing: any = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
  


  constructor(private _topHeadlinesServ: ApiService) { }

  ngOnInit(): void {
    this.allHeadlineNews = this._topHeadlinesServ.headlineNews().subscribe(result => {
      this.headlineNews = result.articles;
      this.sortHeadlineNews = (this.headlineNews)[Math.floor(Math.random() * (this.headlineNews).length)];

    })
    

      $("svg.solids-love").click(function() {
      $("svg.solids-love" ).toggleClass( "lights-love");
    });

      $("svg.solid-save").click(function() {
      $("svg.solid-save" ).toggleClass( "light-save");
    });

      $("svg.solid-file").click(function() {
      $("svg.solid-file" ).toggleClass( "light-file");
    });
  }

    ngOnDestroy(): void {
      this.allHeadlineNews?.unsubscribe
    }
    

}