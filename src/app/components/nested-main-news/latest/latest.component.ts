import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit, OnDestroy {
  mainNews: any = [];
  sortedMainNews: any = [];
  allMainNews?: Subscription;
  counter: number;
   location: string = "Location News";
  label: string = "Get Location Specific News";
  length: number = Math.floor(Math.random() * 10) + 1;
  likes:number = 3;
  saved: number = 6;
  likeStatus: boolean = true;
  saveStatus: boolean = true;
  fileStatus: boolean = true;
    imageMissing: any = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';


  constructor(private _topMainServ: ApiService) {
    this.counter = 0;
    this.getData();
   }

   

   getData() {
      this.allMainNews = this._topMainServ.latestNews().subscribe(result => {
        //Rendering 4 articles per request for desktop
     if (window.innerWidth > 768) { 
          this.mainNews = (result.articles).slice(0, 10);
          for(let i=this.counter+1;i<this.mainNews.length;i++)
        {
        this.sortedMainNews.push(this.mainNews[i]);
        if(i%4==0) break;
        }
        this.counter+=4;
    }
  else {
          //Rendering 3 articles per request for mobile screen
          this.mainNews = (result.articles).slice(0, 9);
          for(let i=this.counter+1;i<this.mainNews.length;i++)
        {
        this.sortedMainNews.push(this.mainNews[i]);
        if(i%3==0) break;
        }
        this.counter+=3;

      }
    }
  )}
  

  ngOnInit(): void {

  }

  
  onClickSubmit(data: { locationId: string; }) {
    alert("Entered data is :" + data.locationId)
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


  ngOnDestroy(): void {
    this.allMainNews?.unsubscribe
  }

}