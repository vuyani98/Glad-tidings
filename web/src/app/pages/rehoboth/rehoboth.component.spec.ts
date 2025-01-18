import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehobothComponent } from './rehoboth.component';

describe('RehobothComponent', () => {
  let component: RehobothComponent;
  let fixture: ComponentFixture<RehobothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehobothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehobothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
