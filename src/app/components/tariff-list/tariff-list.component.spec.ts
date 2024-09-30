import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListComponent } from './tariff-list.component';
import { TariffService } from 'src/app/services/tariff.service';
import { of } from 'rxjs';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let fixture: ComponentFixture<TariffListComponent>;
  let mockTariffs = [
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
    }
  ];
  beforeEach(async () => {

    const tariffServiceMock = {
      getTariffs: () => of(mockTariffs)
    };

    await TestBed.configureTestingModule({
      imports: [TariffListComponent],
      providers: [{ provide: TariffService, useValue: tariffServiceMock }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with mock tariffs', () => {
    expect(component.tariffs).toEqual(mockTariffs);
    expect(component.filteredTariffs).toEqual(mockTariffs);
  });

  it('should filter tariffs by price range', () => {
    // Set a filter to show tariffs with a price less than 150
    const filterValues = {
      priceRange: 150,
      sortBy: 'priceAsc',
      searchTerm: ''
    };

    component.applyFilters(filterValues);
    expect(component.filteredTariffs.length).toBe(2); // Tariff 1 and Tariff 2
  });

  it('should filter tariffs by search term', () => {
    // Set a filter to search for 'Tariff 2'
    const filterValues = {
      priceRange: 200,
      sortBy: 'priceAsc',
      searchTerm: 'Tariff 2'
    };

    component.applyFilters(filterValues);
    expect(component.filteredTariffs.length).toBe(1); // Only Tariff 2 should be returned
    expect(component.filteredTariffs[0].name).toBe('Tariff 2');
  });

  it('should sort tariffs by price descending', () => {
    const filterValues = {
      priceRange: 200,
      sortBy: 'priceDesc',
      searchTerm: ''
    };

    component.applyFilters(filterValues);
    expect(component.filteredTariffs[0].name).toBe('Tariff 3'); // Tariff 3 has the highest price
  });

});
