import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {
  breakingNews: any = [];
  sortBreakingNews: any = [];
  allBreakingNews?: Subscription;
  breaking: string = "Breaking News";
  tap: string = "Tap to see full story";

  constructor(private _topBreakingServ: ApiService) { }

  ngOnInit(): void {
    this.allBreakingNews = this._topBreakingServ.breakingNews().subscribe(result => {
      this.breakingNews = result.articles;
      this.sortBreakingNews = (this.breakingNews)[Math.floor(Math.random() * (this.breakingNews).length)];

    })
  }

  ngOnDestroy(): void {
    this.allBreakingNews?.unsubscribe
  }

}