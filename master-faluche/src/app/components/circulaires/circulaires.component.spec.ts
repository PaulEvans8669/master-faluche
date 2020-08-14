import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculairesComponent } from './circulaires.component';

describe('CirculairesComponent', () => {
  let component: CirculairesComponent;
  let fixture: ComponentFixture<CirculairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirculairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirculairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
