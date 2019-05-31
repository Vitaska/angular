import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  newTitle: string = '';

  constructor() { }

  onReturnText(newTitle) {

    this.newTitle = newTitle;
  }


}
