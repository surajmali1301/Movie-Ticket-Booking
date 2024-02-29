import { TestBed } from '@angular/core/testing';

import { MovieSubjectService } from './movie-subject.service';

describe('MovieSubjectService', () => {
  let service: MovieSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
