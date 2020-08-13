import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChoiceComponent } from './main-choice.component';

describe('MainChoiceComponent', () => {
  let component: MainChoiceComponent;
  let fixture: ComponentFixture<MainChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
