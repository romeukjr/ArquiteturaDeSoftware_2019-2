import { Component } from '@angular/core';
import constants from './util/constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = constants.APP.TITLE;

  ngOnInit() {
  }
}
