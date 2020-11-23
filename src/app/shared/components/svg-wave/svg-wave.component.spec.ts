import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgWaveComponent } from './svg-wave.component';

describe('SvgWaveComponent', () => {
  let component: SvgWaveComponent;
  let fixture: ComponentFixture<SvgWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SvgWaveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
