import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  target = 'recipe';

  onNavigate(arg: string) {
    this.target = arg;
  }
}
