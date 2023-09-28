import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGameDetailsComponent } from './dialog-game-details.component';

describe('DialogGameDetailsComponent', () => {
  let component: DialogGameDetailsComponent;
  let fixture: ComponentFixture<DialogGameDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogGameDetailsComponent]
    });
    fixture = TestBed.createComponent(DialogGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
