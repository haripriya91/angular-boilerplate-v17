import { Component ,Input, signal } from '@angular/core';
import { Tariff } from 'src/app/models/tariff.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tariff-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff-item.component.html',
  styleUrl: './tariff-item.component.scss',
})
export class TariffItemComponent {

  @Input() tariff!: Tariff; 
  @Input() tariffNumber!: number;
}
