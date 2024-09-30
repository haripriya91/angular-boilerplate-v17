import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  getTariffs(): Observable<any[]> {
    const mockTariffs = [
      {
        id: 1,
        name: 'Tariff 1',
        downloadSpeed: 12,
        uploadSpeed: 6,
        benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
        price: 133.45,
      },
      {
        id: 2,
        name: 'Tariff 2',
        downloadSpeed: 15,
        uploadSpeed: 10,
        benefits: ['Benefit A', 'Benefit B', 'Benefit C'],
        price: 123.25,
      },
      {
        id: 3,
        name: 'Tariff 3',
        downloadSpeed: 10,
        uploadSpeed: 6,
        benefits: ['Benefit X', 'Benefit Y', 'Benefit Z'],
        price: 167.35,
      },
      {
        id: 4,
        name: 'Tariff 4',
        downloadSpeed: 12,
        uploadSpeed: 6,
        benefits: ['Feature 1', 'Feature 2', 'Feature 3'],
        price: 120.45,
      },
      {
        id: 5,
        name: 'Tariff 5',
        downloadSpeed: 14,
        uploadSpeed: 8,
        benefits: ['Special Offer 1', 'Special Offer 2', 'Special Offer 3'],
        price: 111.50,
      },
    ];
    return of(mockTariffs); // Return an observable of the mock data
  }
}
