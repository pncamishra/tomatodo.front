import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatodoListComponent } from './tomatodo-list.component';

describe('TomatodoListComponent', () => {
  let component: TomatodoListComponent;
  let fixture: ComponentFixture<TomatodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TomatodoListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
