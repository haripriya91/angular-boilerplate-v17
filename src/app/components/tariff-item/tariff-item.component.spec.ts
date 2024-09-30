import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffItemComponent } from './tariff-item.component';
import { Tariff } from 'src/app/models/tariff.model';

describe('TariffItemComponent', () => {
  let component: TariffItemComponent;
  let fixture: ComponentFixture<TariffItemComponent>;

  const mockTariff: Tariff = {
    id: 1,
    name: 'Tariff 1',
    downloadSpeed: 20,
    uploadSpeed: 10,
    benefits: ['Benefit 1', 'Benefit 2'],
    price: 99.99,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffItemComponent);
    component = fixture.componentInstance;
    component.tariff = mockTariff;  
    component.tariffNumber = 1;      
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct tariff number', () => {
    const tariffNumberElement: HTMLElement = fixture.nativeElement.querySelector('.tariff-number');
    expect(tariffNumberElement.textContent).toBe('1');
  });

  it('should display the correct tariff name', () => {
    const tariffNameElement: HTMLElement = fixture.nativeElement.querySelector('.tariff-name');
    expect(tariffNameElement.textContent).toBe(mockTariff.name);
  });

  it('should display the correct download speed', () => {
    const downloadSpeedElement: HTMLElement = fixture.nativeElement.querySelector('.icon-speed .speed-value');
    expect(downloadSpeedElement.textContent).toBe(`${mockTariff.downloadSpeed} Mbit/s`);
  });

  it('should display the correct upload speed', () => {
    const uploadSpeedElement: HTMLElement = fixture.nativeElement.querySelectorAll('.upload-speed .speed-value')[0];
    expect(uploadSpeedElement.textContent).toBe(`${mockTariff.uploadSpeed} Mbit/s`);
  });

  it('should display the correct tariff benefits', () => {
    const benefitElements: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.tariff-benefits li');
    expect(benefitElements.length).toBe(mockTariff.benefits.length);
    mockTariff.benefits.forEach((benefit, index) => {
      expect(benefitElements[index].textContent).toBe(benefit);
    });
  });

  it('should display the correct tariff price', () => {
    const priceElement: HTMLElement = fixture.nativeElement.querySelector('.price');
    expect(priceElement.textContent).toBe(`€${mockTariff.price}`);
  });

});
