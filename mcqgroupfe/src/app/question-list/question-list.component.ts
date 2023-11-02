import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
    topicId: number;
    questions: Question[];
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService
    ) { }
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.topicId = +params['topicId'];
        this.loadQuestions();
      });
    }
  
    loadQuestions() {
      this.questionService.getQuestionsByTopicId(this.topicId)
        .subscribe(questions => {
          this.questions = questions;
        });
    }
  
    editQuestion(questionId: number) {
      this.router.navigate(['/edit-question', questionId]);
    }
  
    deleteQuestion(questionId: number) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.questionService.deleteQuestion(questionId)
          .subscribe(() => {
            this.loadQuestions();
          });
      }
    }
    addQuestion(){

    }
}
