import { TestBed } from '@angular/core/testing';

import { IQuestionService } from './iquestion.service';

describe('IQuestionService', () => {
  let service: IQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
