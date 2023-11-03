import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '../question.model';
@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent implements OnChanges {
  @Input() topicId: number;
  @Input() questionToEdit: Question;
  @Output() questionEdited = new EventEmitter<Question>();
  @Output() questionAdded = new EventEmitter<Question>();
  @Output() formClosed = new EventEmitter<void>();

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['topicId'].currentValue !== this.newQuestion.topicId) {
      this.newQuestion.topicId = this.topicId;
    }
    if (changes['questionToEdit'] && this.questionToEdit) {
      this.newQuestion = { ...this.questionToEdit };
    }
  }

  submitQuestion() {
    if (this.newQuestion.qnNo) {
      this.questionEdited.emit(this.newQuestion);
    } else {
      this.questionAdded.emit(this.newQuestion);
    }
    this.resetForm();
  }


  closeForm() {
    this.formClosed.emit();
    this.resetForm();
  }

  resetForm() {
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
}
