import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    DecimalPipe
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {

  totalInvoices = signal(125);
  totalSales = signal(450000);
  pendingInvoices = signal(12);
  birAccepted = signal(100);
}


