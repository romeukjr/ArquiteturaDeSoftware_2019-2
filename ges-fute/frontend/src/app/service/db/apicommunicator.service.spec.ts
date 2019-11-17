import { TestBed } from '@angular/core/testing';

import { APICommunicatorService } from './apicommunicator.service';

describe('APICommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APICommunicatorService = TestBed.get(APICommunicatorService);
    expect(service).toBeTruthy();
  });
});
