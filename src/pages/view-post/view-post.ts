import { Component} from '@angular/core';


@Component({
  templateUrl: 'view-post.html'
})

export class ViewPostPage {
  constructor() {
  }
  ngAfterViewInit() {
  }

  items = [
    {
      email: "lavpalsingh4890@gmail.com",
      imageUrl: 'https://lorempixel.com/1200/1200/nature/1',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/2',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/3',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/4',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/5',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/6',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/7',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/8',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/9',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/10',
    },
  ];
}