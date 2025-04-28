import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoHogarComponent } from './entorno-hogar.component';

describe('EntornoHogarComponent', () => {
  let component: EntornoHogarComponent;
  let fixture: ComponentFixture<EntornoHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntornoHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntornoHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
