import { TestBed } from '@angular/core/testing';

import { ExcelOperationService } from './excel-operation.service';

describe('ExcelOperationService', () => {
  let service: ExcelOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
