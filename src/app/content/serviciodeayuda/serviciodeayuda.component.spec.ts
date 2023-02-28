import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciodeayudaComponent } from './serviciodeayuda.component';

describe('ServiciodeayudaComponent', () => {
  let component: ServiciodeayudaComponent;
  let fixture: ComponentFixture<ServiciodeayudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciodeayudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciodeayudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
