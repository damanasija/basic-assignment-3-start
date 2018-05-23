import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .c1 {
      color: white;
    }
  `]
})
export class AppComponent {
  isShown :boolean = true;
  logs = [];
  shouldAttatch = false;
  toogleShown(){
    this.logs.push(this.logs.length + 1);
    this.isShown = !this.isShown;
  }
  getColor(log: number): string {
    if(log >= 5){
      return 'blue';
    }
    else
      return "white";
  }
}
