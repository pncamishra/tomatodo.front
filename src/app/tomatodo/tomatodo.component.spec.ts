import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatodoComponent } from './tomatodo.component';

describe('TomatodoComponent', () => {
  let component: TomatodoComponent;
  let fixture: ComponentFixture<TomatodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TomatodoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
