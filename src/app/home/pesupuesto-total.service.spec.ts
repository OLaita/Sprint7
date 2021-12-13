import { TestBed } from '@angular/core/testing';

import { PesupuestoTotalService } from './pesupuesto-total.service';

describe('PesupuestoTotalService', () => {
  let service: PesupuestoTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesupuestoTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
