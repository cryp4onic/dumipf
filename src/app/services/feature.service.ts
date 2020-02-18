import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IArticle } from '../model/article-tile.model';
import articles from './../../assets/data/featured.json';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {

    getArticles() : Observable<IArticle[]>{
        return of(articles);
    }
    
}