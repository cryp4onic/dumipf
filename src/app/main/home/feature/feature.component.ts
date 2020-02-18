import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature.service';
import { IArticle } from 'src/app/model/article-tile.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  featuredArticles : IArticle[] = [];

  constructor(private featureService : FeatureService) { }

  ngOnInit(): void {
    this.featureService.getArticles()
      .subscribe(response => {
        this.featuredArticles = response;
      })
  }

}
