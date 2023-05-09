import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag404Component } from './pag404.component';

describe('Pag404Component', () => {
  let component: Pag404Component;
  let fixture: ComponentFixture<Pag404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag404Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pag404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
