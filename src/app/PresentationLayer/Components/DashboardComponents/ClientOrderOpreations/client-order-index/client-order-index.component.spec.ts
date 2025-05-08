import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderIndexComponent } from './client-order-index.component';

describe('ClientOrderIndexComponent', () => {
  let component: ClientOrderIndexComponent;
  let fixture: ComponentFixture<ClientOrderIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOrderIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
