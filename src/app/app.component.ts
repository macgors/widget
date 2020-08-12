import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'widget';

  backgroundPaths = [ 'night/2.jpg', 'night/3.jpg', 'night/1.jpg', 'day/1.jpg', 'day/3.jpg', 'morning/1.jpg', 'morning/2.jpg', 'morning/3.jpg'];
}
