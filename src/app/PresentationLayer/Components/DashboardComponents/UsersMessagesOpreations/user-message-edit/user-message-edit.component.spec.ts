import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageEditComponent } from './user-message-edit.component';

describe('UserMessageEditComponent', () => {
  let component: UserMessageEditComponent;
  let fixture: ComponentFixture<UserMessageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMessageEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
