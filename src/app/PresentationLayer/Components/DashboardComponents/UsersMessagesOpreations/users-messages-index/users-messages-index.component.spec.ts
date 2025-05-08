import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMessagesIndexComponent } from './users-messages-index.component';

describe('UsersMessagesIndexComponent', () => {
  let component: UsersMessagesIndexComponent;
  let fixture: ComponentFixture<UsersMessagesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersMessagesIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMessagesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
