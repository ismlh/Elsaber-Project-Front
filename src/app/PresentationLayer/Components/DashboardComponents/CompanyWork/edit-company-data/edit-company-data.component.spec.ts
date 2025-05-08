import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyDataComponent } from './edit-company-data.component';

describe('EditCompanyDataComponent', () => {
  let component: EditCompanyDataComponent;
  let fixture: ComponentFixture<EditCompanyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCompanyDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCompanyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
