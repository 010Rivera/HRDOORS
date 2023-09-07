import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminadaComponent } from './laminada.component';

describe('LaminadaComponent', () => {
  let component: LaminadaComponent;
  let fixture: ComponentFixture<LaminadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
