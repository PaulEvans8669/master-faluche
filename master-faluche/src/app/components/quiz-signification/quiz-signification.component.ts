import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-quiz-signification',
  templateUrl: './quiz-signification.component.html',
  styleUrls: ['./quiz-signification.component.css']
})
export class QuizSignificationComponent implements OnInit {

  @ViewChildren('answer') answerButtons: QueryList<HTMLButtonElement>;

  bacs: any[];
  circulaires: any[];
  filieres: any[];
  officiels: any[];
  ready = false;
  answers: any[];
  correctIndex: number;
  totalQuestions = 0;
  correctAnswers = 0;
  theme: string;
  question: string;
  keyAnswer: any;

  constructor(private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    this.bacs = (await this.getJSON('assets/data/bacs.json').toPromise());
    this.circulaires = (await this.getJSON('assets/data/circulaires.json').toPromise());
    this.filieres = (await this.getJSON('assets/data/filieres.json').toPromise());
    this.officiels = (await this.getJSON('assets/data/officiels.json').toPromise());
    this.newQuestion();
    this.ready = true;
  }

  private newQuestion(): void{
    this.resetButtons();
    const l1 = this.bacs.length;
    const l2 = l1 + this.circulaires.length;
    const l3 = l2 + this.filieres.length;
    const l4 = l3 + this.officiels.length;
    const rand = Math.floor(Math.random() * l4);
    if (rand < l1){
      this.newQuestionBac();
    }else if (rand < l2){
      this.newQuestionCirculaire();
    }else if (rand < l3){
      this.newQuestionFiliere();
    }else{
      this.newQuestionOfficiel();
    }
  }

  public getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

  checkAnswer(data: any[]): void {
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

  private pickRandom(arr: any[]): void{
    this.answers = [];
    while (this.answers.length < 4){
      const el = arr[Math.floor(Math.random() * arr.length)];
      if (!this.answers.find(x => x === el)){
        this.answers.push(el);
      }
    }
    this.correctIndex = Math.floor(Math.random() * this.answers.length);
    console.log(this.answers);
    console.log(this.correctIndex);
  }

  private newQuestionBac(): void {
    this.theme = 'Insigne de bac';
    this.pickRandom(this.bacs);
    if (Math.floor(Math.random() * 2)) {
      this.question = 'Quelle insigne représente: ' + this.answers[this.correctIndex].libelle + ' ?';
      this.keyAnswer = 'insigne';
    }else{
      this.question = 'Quel bac représente l\'insigne: ' + this.answers[this.correctIndex].insigne + ' ?';
      this.keyAnswer = 'libelle';
    }
  }

  private newQuestionCirculaire(): void {
    this.theme = 'Couleur de circulaire';
    this.pickRandom(this.circulaires);
    if (Math.floor(Math.random() * 2)) {
      this.question = 'Quelle fillière est représentée par la couleur de circulaire suivante: '
        + this.answers[this.correctIndex].couleur + ' ?';
      this.keyAnswer = 'libelle';
    }else{
      this.question = 'Quelle couleur de circulaire représente la filière suivante : '
        + this.answers[this.correctIndex].libelle + ' ?';
      this.keyAnswer = 'couleur';
    }
  }

  private newQuestionFiliere(): void {
    this.theme = 'Insigne de filière';
    this.pickRandom(this.filieres);
    if (Math.floor(Math.random() * 2)) {
      this.question = 'Quelle filière est représentée par l\'insigne de circulaire suivant : '
        + this.answers[this.correctIndex].insigne + ' ?';
      this.keyAnswer = 'libelle';
    }else{
      this.question = 'Quelle insigne de circulaire représente la filière suivante : '
        + this.answers[this.correctIndex].libelle + ' ?';
      this.keyAnswer = 'insigne';
    }
  }

  private newQuestionOfficiel(): void {
    this.theme = 'Insigne de partie officielle';
    this.pickRandom(this.officiels);
    if (Math.floor(Math.random() * 2)) {
      this.question = 'Que représente l\'insigne suivant : '
        + this.answers[this.correctIndex].insigne + ' ?';
      this.keyAnswer = 'libelle';
    }else{
      this.question = 'Le terme \'' + this.answers[this.correctIndex].libelle + '\' est représenté par ?';
      this.keyAnswer = 'insigne';
    }
  }
}
