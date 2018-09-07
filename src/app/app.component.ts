import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: '<div><h1>{{pageTitle}}</h1><mp-products></mp-products></div>'
})
export class AppComponent {
  pageTitle: string = 'Product Management';
}
