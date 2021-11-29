import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbputComponent } from './abput.component';

describe('AbputComponent', () => {
  let component: AbputComponent;
  let fixture: ComponentFixture<AbputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
