import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.filterForm.value).toEqual({
      priceRange: 200,
      sortBy: 'priceAsc',
      searchTerm: ''
    });
   });

    it('should emit searchFiltersChanged on form value change', (done) => {
      component.searchFiltersChanged.subscribe((value) => {
        expect(value).toEqual({
          priceRange: 150,
          sortBy: 'priceAsc',
          searchTerm: ''
        });
        done();
      });
  
      component.filterForm.patchValue({ priceRange: 150 });  
    });
  
    it('should reset the filters to default values', () => {
      component.filterForm.patchValue({ priceRange: 150, sortBy: 'priceDesc', searchTerm: 'Test' });
      component.resetFilters();  
  
      expect(component.filterForm.value).toEqual({
        priceRange: 200,
        sortBy: 'priceAsc',
        searchTerm: ''
      });
    });
  
    it('should toggle the visibility of the form', () => {
      expect(component.isFormVisible).toBeFalse();  
  
      component.toggleForm();  
      expect(component.isFormVisible).toBeTrue(); 
  
      component.toggleForm(); 
      expect(component.isFormVisible).toBeFalse();  
    });
});
