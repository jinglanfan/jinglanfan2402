import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io'),
      new Article('Angular Homepage', 'http://angular.io'),
    ];
  }

  title(title: any) {
    throw new Error("Method not implemented.");
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value}and link:${link.value}`);
    let obj = new Article(title.value, link.value, 0);
    this.articles.push(obj);
    return false;
  }
}

