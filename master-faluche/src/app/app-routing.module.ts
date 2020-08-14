import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainChoiceComponent} from './components/main-choice/main-choice.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuizSignificationComponent} from './components/quiz-signification/quiz-signification.component';
import {CirculairesComponent} from "./components/circulaires/circulaires.component";

const routes: Routes = [
  {path: '', component: MainChoiceComponent},
  {path: 'quizNom', component: QuizComponent},
  {path: 'quizSignification', component: QuizSignificationComponent},
  {path: 'circu', component: CirculairesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
