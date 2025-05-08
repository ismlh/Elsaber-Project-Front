import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactandinquiriesComponent } from './contactandinquiries.component';

describe('ContactandinquiriesComponent', () => {
  let component: ContactandinquiriesComponent;
  let fixture: ComponentFixture<ContactandinquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactandinquiriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactandinquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
