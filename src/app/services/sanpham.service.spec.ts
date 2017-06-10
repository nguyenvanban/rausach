import { TestBed, inject } from '@angular/core/testing';

import { SanphamService } from './sanpham.service';

describe('SanphamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanphamService]
    });
  });

  it('should ...', inject([SanphamService], (service: SanphamService) => {
    expect(service).toBeTruthy();
  }));
});
