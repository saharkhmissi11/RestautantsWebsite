import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarKounafaComponent } from './dar-kounafa.component';

describe('DarKounafaComponent', () => {
  let component: DarKounafaComponent;
  let fixture: ComponentFixture<DarKounafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarKounafaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarKounafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
