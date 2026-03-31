import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) {

  }
  
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations()
  }

}
