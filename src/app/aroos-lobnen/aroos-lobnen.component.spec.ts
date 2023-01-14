import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroosLobnenComponent } from './aroos-lobnen.component';

describe('AroosLobnenComponent', () => {
  let component: AroosLobnenComponent;
  let fixture: ComponentFixture<AroosLobnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroosLobnenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AroosLobnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
