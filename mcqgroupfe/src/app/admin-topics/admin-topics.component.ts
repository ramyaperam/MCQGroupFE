import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.css']
})
export class AdminTopicsComponent implements OnInit {
 // newTopicName: string = '';
  router: any;
  topics: any[];
  topicForm: FormGroup;
  isAddingTopic: boolean = false;

  constructor(
    private topicService: TopicService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Initialize form
    this.topicForm = this.fb.group({
      topicName: ['', Validators.required]
    });

    // Fetch topics during initialization
    this.fetchTopics();
  }

  fetchTopics() {
    this.topicService.getAllTopics().subscribe(data => {
      this.topics = data;
    });
  }

  toggleAddTopicForm() {
    this.isAddingTopic = !this.isAddingTopic;
    if (!this.isAddingTopic) {
      this.topicForm.reset();
    }
  }

  saveTopic() {
    const topicControl = this.topicForm.get('topicName');
    
    if (topicControl && topicControl.valid) {
      const topicName = topicControl.value;
      this.topicService.addTopic({ topicName }).subscribe(() => {
        this.fetchTopics();
        this.toggleAddTopicForm();
      });
    }
  }

  deleteTopic(topicId: number) {
    if (confirm('Are you sure you want to delete this topic?')) {
      this.topicService.deleteTopic(topicId).subscribe(() => {
        // Topic deleted successfully, fetch updated topics
        this.fetchTopics();
      });
    }
  }
  viewQuestions(topicId: number) {
    this.router.navigate(['/admin/topics', topicId]);
  }
  //  
}


