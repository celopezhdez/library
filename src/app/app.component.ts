import { Component } from '@angular/core';
import {KBPageSliderComponent}    from 'ng2-page-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pageNumber: number = 0;
  pageCount: number = 0;
  pages = [
    { 
      image: "http://cohoctonlibrary.org/wp-content/uploads/2014/06/full-bookcase-of-books.jpeg",
      title: "Welcome to the best Library" 
    },
    { 
      image: "https://static1.squarespace.com/static/58533f31bebafbe99c85dc9b/t/5854a3fb59cc6826e119f816/1481942026769/books-spine-colors-pastel-159828.jpeg", 
      title: "You can find whatever book you want"
    }
  ];

}
