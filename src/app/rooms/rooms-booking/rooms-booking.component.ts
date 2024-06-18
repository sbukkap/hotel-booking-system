import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{
  constructor(private router: ActivatedRoute) { }

  id: number = 0;
  
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'] })
  }
}
