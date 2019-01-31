import { Component } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ue03angular';
  public clock = '??:??:??';
  public items = [
    {myClass: 'red', text: '1'},
    {myClass: 'green', text: '2'},
    {myClass: 'red', text: '3'}
  ];
  public myClass = 'green';

  public constructor () {
    this.clock = new Date().toLocaleTimeString();

    setInterval( () => this.handleTimer(), 1000);
  }

  private handleTimer () {
    this.clock = new Date().toLocaleTimeString();
    // this.items.push('' + (+this.items[this.items.length - 1] + 1));
  }
}
