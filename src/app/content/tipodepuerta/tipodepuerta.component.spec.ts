import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodepuertaComponent } from './tipodepuerta.component';

describe('TipodepuertaComponent', () => {
  let component: TipodepuertaComponent;
  let fixture: ComponentFixture<TipodepuertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipodepuertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipodepuertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
