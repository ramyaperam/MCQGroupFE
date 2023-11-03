import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-active-quizzes',
  templateUrl: './active-quizzes.component.html',
})
export class ActiveQuizzesComponent implements OnInit {
  activeQuizzes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getActiveQuizzes().subscribe((quizzes) => {
      this.activeQuizzes = quizzes;
    });
  }
}
