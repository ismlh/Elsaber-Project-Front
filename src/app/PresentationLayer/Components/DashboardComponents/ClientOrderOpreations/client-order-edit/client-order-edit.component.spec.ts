import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderEditComponent } from './client-order-edit.component';

describe('ClientOrderEditComponent', () => {
  let component: ClientOrderEditComponent;
  let fixture: ComponentFixture<ClientOrderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOrderEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
