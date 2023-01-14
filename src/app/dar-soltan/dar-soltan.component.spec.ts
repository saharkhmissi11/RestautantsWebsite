import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarSoltanComponent } from './dar-soltan.component';

describe('DarSoltanComponent', () => {
  let component: DarSoltanComponent;
  let fixture: ComponentFixture<DarSoltanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarSoltanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarSoltanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
