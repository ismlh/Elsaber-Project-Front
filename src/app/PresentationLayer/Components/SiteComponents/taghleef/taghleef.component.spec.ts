import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaghleefComponent } from './taghleef.component';

describe('TaghleefComponent', () => {
  let component: TaghleefComponent;
  let fixture: ComponentFixture<TaghleefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaghleefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaghleefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
