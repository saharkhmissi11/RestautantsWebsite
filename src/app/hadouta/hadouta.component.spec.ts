import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadoutaComponent } from './hadouta.component';

describe('HadoutaComponent', () => {
  let component: HadoutaComponent;
  let fixture: ComponentFixture<HadoutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HadoutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HadoutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
