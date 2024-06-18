import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, RouterModule, AppNavComponent],
  templateUrl: './app.component.html',
  // template: 'hello',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
