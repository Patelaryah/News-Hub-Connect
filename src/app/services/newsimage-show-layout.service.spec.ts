import { TestBed } from '@angular/core/testing';

import { NewsimageShowLayoutService } from './newsimage-show-layout.service';

describe('NewsimageShowLayoutService', () => {
  let service: NewsimageShowLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsimageShowLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
