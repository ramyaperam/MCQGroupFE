import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];
  @Input() topicId: number;
  showAddQuestionForm: boolean = false;
  questionToEdit: Question;
  newQuestion: Question = {
    qnNo: null,
    question: '',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    correctAnswer: null,
    topicId: null
  };

  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

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

  openAddQuestionForm() {
    this.showAddQuestionForm = true;
    this.questionToEdit = null;
  }

  closeAddQuestionForm() {
    this.showAddQuestionForm = false;
    this.resetNewQuestion();
  }

  addQuestion(question: Question) {
    this.questionService.addQuestion(question).subscribe(
      addedQuestion => {
        console.log('Question added successfully:', addedQuestion);
        // Initialize the questions array if it's null or undefined
        this.questions = this.questions || [];
        this.questions.push(addedQuestion);
        this.closeAddQuestionForm();
      },
      error => {
        console.error('Error adding question:', error);
      }
    );
  }

  resetNewQuestion() {
    this.newQuestion = {
      qnNo: null,
      question: '',
      opt1: '',
      opt2: '',
      opt3: '',
      opt4: '',
      correctAnswer: null,
      topicId: this.topicId
    };
  }

  
  editQuestion(question: Question) {
    this.questionToEdit = { ...question };
    this.showAddQuestionForm = true;
  }
  onQuestionEdited(updatedQuestion: Question) {
    // Handle updated question
    const index = this.questions.findIndex(q => q.qnNo === updatedQuestion.qnNo);
    if (index !== -1) {
      this.questions[index] = updatedQuestion;
    }
    this.closeAddQuestionForm();
  }

  
    deleteQuestion(qnNo: number) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.questionService.deleteQuestion(qnNo)
          .subscribe(() => {
            this.loadQuestions();
          });
      }
    }

    onFormClosed() {
      // Handle form closure
      this.closeAddQuestionForm();
    }
}
