import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @ViewChildren('answer') answerButtons: QueryList<HTMLButtonElement>;

  // tslint:disable-next-line:variable-name
  private _jsonURL = 'assets/insignes/insignes.json';
  // tslint:disable-next-line:variable-name
  private _data: any[];
  answers: any[] = [];
  correctIndex: any;
  ready = false;

  correctAnswers = 0;
  totalQuestions = 0;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      // tslint:disable-next-line:variable-name
      this._data = (data as any[]).filter(x => x.src);
      this.newQuestion();
      this.ready = true;
    });
  }

  ngOnInit(): void {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  private newQuestion(): void{
    this.resetButtons();
    this.answers = [];
    while (this.answers.length < 4){
      const el = this._data[Math.floor(Math.random() * this._data.length)];
      if (!this.answers.find(x => x.nom === el.nom)){
        this.answers.push(el);
      }
    }
    this.correctIndex = Math.floor(Math.random() * this.answers.length);
  }

  checkAnswer(data: any): void {
    const target = (data[0].path[0].tagName.toLowerCase() === 'span') ? data[0].path[1] : data[0].path[0];
    (target as any).style.backgroundColor = 'rgba(244, 67, 54, 0.5)';
    const answer = data[1];
    this.showAnswer();
    if (answer === this.answers[this.correctIndex]){
      this.correctAnswers++;
    }
    this.totalQuestions++;
    setTimeout( () => {
      this.newQuestion();
    }, 1250);
  }

  private showAnswer(): void{
    const btns = this.answerButtons.toArray();
    btns.forEach(b => b.disabled = true);
    (btns[this.correctIndex] as any)._elementRef.nativeElement.style.backgroundColor = 'rgba(62,207,19, 0.5)';
  }

  private resetButtons(): void{
    const btns = this.answerButtons.toArray();
    btns.forEach(b => {
      b.disabled = false;
      (b as any)._elementRef.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    });
  }
}
