import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IArticle } from '../model/article-tile.model';
import articles from './../../assets/data/latest.json';

@Injectable({
  providedIn: 'root',
})
export class LatestService {

    getArticles() : Observable<IArticle[]>{
        return of(articles);
    }

}