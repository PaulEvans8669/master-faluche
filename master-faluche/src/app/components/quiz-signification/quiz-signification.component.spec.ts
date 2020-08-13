import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSignificationComponent } from './quiz-signification.component';

describe('QuizSignificationComponent', () => {
  let component: QuizSignificationComponent;
  let fixture: ComponentFixture<QuizSignificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSignificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSignificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
