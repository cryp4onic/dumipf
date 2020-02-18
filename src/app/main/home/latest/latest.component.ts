import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/model/article-tile.model';
import { FeatureService } from 'src/app/services/feature.service';
import { LatestService } from 'src/app/services/latest.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  latestArticles : IArticle[] = [];

  constructor(private latestService : LatestService) { }

  ngOnInit(): void {
    this.latestService.getArticles()
      .subscribe(response => {
        this.latestArticles = response;
      })
  }

}
