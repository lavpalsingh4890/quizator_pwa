import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: 'post-item.html'
})
export class PostItemComponent {

  text: string;
  @Input()item =null;
  constructor() {
    console.log('Hello PostItemComponent Component');
    this.text = 'Hello World';
  }

}
