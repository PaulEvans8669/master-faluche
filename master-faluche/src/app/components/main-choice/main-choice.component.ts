import { Component, OnInit } from '@angular/core';
import {GameMode} from '../../enums/game-mode.enum';

@Component({
  selector: 'app-main-choice',
  templateUrl: './main-choice.component.html',
  styleUrls: ['./main-choice.component.css']
})
export class MainChoiceComponent implements OnInit {

  gModes = GameMode;

  constructor() { }

  ngOnInit(): void {
  }

  setMode(mode: GameMode): void {
    sessionStorage.setItem('mode', mode);
  }
}
