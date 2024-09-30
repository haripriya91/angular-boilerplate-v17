import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffItemComponent } from 'src/app/components/tariff-item/tariff-item.component';
import { SearchComponent } from '../search/search.component';
import { TariffService } from 'src/app/services/tariff.service';
import { Tariff } from 'src/app/models/tariff.model';

@Component({
  selector: 'app-tariff-list',
  standalone: true,
  imports: [CommonModule, TariffItemComponent,SearchComponent],
  templateUrl: './tariff-list.component.html',
  styleUrl: './tariff-list.component.scss',
})
export class TariffListComponent  implements OnInit  {
  tariffs: Tariff[] = [];
  filteredTariffs: Tariff[] = []; 


  constructor(private tariffService: TariffService) {}

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe((data) => {
     this.tariffs = data;
     this.filteredTariffs = [...this.tariffs];
    }); 
  }

  trackTariffById(index: number, tariff: Tariff): number {
    return tariff.id; 
  }


  applyFilters(filterValues: any) {
    console.log('Received filter values:', filterValues);  
    const { priceRange, sortBy, searchTerm } = filterValues;

    // Filter by price and search term
    this.filteredTariffs = this.tariffs
      .filter(tariff => 
        tariff.price <= priceRange &&  // Filter by price
        tariff.name.toLowerCase().includes(searchTerm.toLowerCase())  // Filter by name
      );

    // Apply sorting
    this.filteredTariffs.sort((a, b) => {
      if (sortBy === 'priceAsc') {
        return a.price - b.price;
      } else if (sortBy === 'priceDesc') {
        return b.price - a.price;
      } else if (sortBy === 'downloadSpeed') {
        return b.downloadSpeed - a.downloadSpeed;
      } else if (sortBy === 'uploadSpeed') {
        return b.uploadSpeed - a.uploadSpeed;
      }
      return 0;
    });
  }
}
