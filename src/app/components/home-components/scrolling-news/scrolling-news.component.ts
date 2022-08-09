import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-scrolling-news',
  templateUrl: './scrolling-news.component.html',
  styleUrls: ['./scrolling-news.component.css']
})
export class ScrollingNewsComponent implements OnInit, OnDestroy {


responsiveOptions;
scrollNews: any = [];
allScrollNews?: Subscription;
editor: string = "Editor's Picks";
likes:number = 5;
saved: number = 8;
likeStatus: boolean = true;
saveStatus: boolean = true;
fileStatus: boolean = true;
imageMissing: any = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';


  constructor(private _topScrollServ: ApiService) {

  //slider responsive settings
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
   }

  ngOnInit(): void {

      this.allScrollNews = this._topScrollServ.scrollNews().subscribe(result => {
           this.scrollNews = (window.innerWidth > 768) ? 
       (result.articles).slice(0, 8) : (result.articles).slice(0, 4);
    })
   
  }

  ngOnDestroy(): void {
    this.allScrollNews?.unsubscribe
  }

   

  public likeCount(){
    this.likeStatus = !this.likeStatus;
    if (!this.likeStatus) {
    this.likes += 1;
    }
    else {
      this.likes -= 1;
    }
  }

  public saveCount() {
      this.saveStatus = !this.saveStatus;
    if (!this.saveStatus) {
    this.saved += 1;
    }
    else {
      this.saved -= 1;
    }
  }

  public fileToggles() {
    this.fileStatus = !this.fileStatus
  }    

}