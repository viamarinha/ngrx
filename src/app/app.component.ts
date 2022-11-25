import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter:number = 0;
  updated?:number ;

  increase() {
    this.counter++;
    this.date;
  }

  decrease() {
    this.counter--
    this.date;
  }

  clear() {
    this.counter = 1
    this.date
  }

  get cannotDecrease(): boolean {
    return this.counter <= 0
  }

  get date(): number{
    this.updated = Date.now();
    return this.updated;
  }

}
