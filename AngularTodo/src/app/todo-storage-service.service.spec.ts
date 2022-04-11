import { TestBed } from '@angular/core/testing';

import { TodoStorageServiceService } from './todo-storage-service.service';

describe('TodoStorageServiceService', () => {
  let service: TodoStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
