
import { Injectable } from '@angular/core';


@Injectable()
export class TextUtilProvider {

  constructor() {
    console.log('Hello TextUtilProvider Provider');
  }
  change(index) {
    // get elements
    var element = document.getElementById('messageInputBox'+index);
    var textarea = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight = '0';
    textarea.style.height = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if (scroll_height > 96)
      scroll_height = 96;

    // apply new style
    element.style.height = scroll_height + "px";
    textarea.style.minHeight = scroll_height + "px";
    textarea.style.height = scroll_height + "px";
  }
}
