import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaticComponent } from './asiatic.component';

describe('AsiaticComponent', () => {
  let component: AsiaticComponent;
  let fixture: ComponentFixture<AsiaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
