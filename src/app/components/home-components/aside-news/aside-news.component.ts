import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-aside-news',
  templateUrl: './aside-news.component.html',
  styleUrls: ['./aside-news.component.css']
})
export class AsideNewsComponent implements OnInit, OnDestroy {
  liveNews: any = [];
  sortLiveNews: any = [];
  allLiveNews?: Subscription;
  live: string = "Live";
  location: string = "Location News";
  label: string = "Get Location Specific News";
  imageMissing: any = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';
  
  
  constructor(private _topLiveServ: ApiService) { }

  ngOnInit(): void {
    this.allLiveNews = this._topLiveServ.asideNews().subscribe(result => {
      this.liveNews = result.articles;
      this.sortLiveNews = (this.liveNews)[Math.floor(Math.random() * (this.liveNews).length)];

      
    });
  }

  

  onClickSubmit(data: any) {
    alert("Entered location is :" + data.locationId)
  }
  
  ngOnDestroy(): void {
    this.allLiveNews?.unsubscribe
  }
}