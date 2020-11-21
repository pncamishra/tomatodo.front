import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'shared';
import { TomatodoListComponent } from './tomatodo-list/tomatodo-list.component';

import { TomatodoComponent } from './tomatodo.component';

describe('TomatodoComponent', () => {
  let component: TomatodoComponent;
  let fixture: ComponentFixture<TomatodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TomatodoComponent, TomatodoListComponent],
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
