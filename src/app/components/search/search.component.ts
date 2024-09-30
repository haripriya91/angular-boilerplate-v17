import { Component ,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Output() searchFiltersChanged = new EventEmitter<any>();

  filterForm: FormGroup;
  isFormVisible: boolean = false;
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      priceRange: [200],  // Default maximum price
      sortBy: ['priceAsc'],  // Default sorting by price ascending
      searchTerm: ['']  // Default empty search term
    });

    // Real-time form changes with debounce to avoid too many requests
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),  // Wait for user to stop typing for 300ms
        distinctUntilChanged()  // Only emit if value has changed
      )
      .subscribe(value => {
        console.log('Form value changed:', value); 
        this.searchFiltersChanged.emit(value);  // Emit new filter values
      });
  }

  resetFilters() {
    this.filterForm.reset({
      priceRange: 200,  // Reset to default value
      sortBy: 'priceAsc',  // Default sorting
      searchTerm: ''  // Clear search term
    });
  }
  // Toggle search visibility for mobile
  
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
