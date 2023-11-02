// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  topics: any[] = [];
  activeQuizzes: any[] = [];
  previousSubmissions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });

    this.dataService.getActiveQuizzes().subscribe((quizzes) => {
      this.activeQuizzes = quizzes;
    });

    this.dataService.getPreviousSubmissions().subscribe((submissions) => {
      this.previousSubmissions = submissions;
    });
  }
}
