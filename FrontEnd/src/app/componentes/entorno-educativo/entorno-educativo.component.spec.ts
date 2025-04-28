import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornoEducativoComponent } from './entorno-educativo.component';

describe('EntornoEducativoComponent', () => {
  let component: EntornoEducativoComponent;
  let fixture: ComponentFixture<EntornoEducativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntornoEducativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntornoEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
