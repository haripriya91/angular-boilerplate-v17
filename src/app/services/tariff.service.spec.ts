import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return an observable of tariffs', (done) => {
    service.getTariffs().subscribe((tariffs) => {
      expect(tariffs.length).toBe(5);  // Check that 5 tariffs are returned
      expect(tariffs).toEqual([
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
      ]);
      done();  
    });
  });
});
