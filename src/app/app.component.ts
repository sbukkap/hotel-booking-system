import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  // template: 'hello',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
