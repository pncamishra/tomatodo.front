import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatodoTaskComponent } from './tomatodo-task.component';

describe('TomatodoTaskComponent', () => {
  let component: TomatodoTaskComponent;
  let fixture: ComponentFixture<TomatodoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TomatodoTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatodoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
