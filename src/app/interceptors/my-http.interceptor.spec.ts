import { TestBed } from '@angular/core/testing';

import { MyHttpInterceptorInterceptor } from './my-http.interceptor';

describe('MyHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyHttpInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyHttpInterceptorInterceptor = TestBed.inject(MyHttpInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
