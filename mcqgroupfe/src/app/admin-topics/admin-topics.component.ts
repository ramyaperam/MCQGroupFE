import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-topics',
  templateUrl: './admin-topics.component.html',
  styleUrls: ['./admin-topics.component.css']
})
export class AdminTopicsComponent implements OnInit {
  topics: any[];
  newTopicName: string = '';
  router: any;

  constructor(private topicService: TopicService) {}

  ngOnInit() {
    // Fetch topics during initialization
    this.fetchTopics();
  }

  fetchTopics() {
    this.topicService.getAllTopics().subscribe(data => {
      this.topics = data;
    });
  }

  saveTopic() {
    if (this.newTopicName.trim() === '') {
      // Handle empty topic name, show error message, etc.
      return;
    }

    this.topicService.addTopic({ topicName: this.newTopicName }).subscribe(() => {
      // Topic added successfully, close the modal and fetch updated topics
      this.newTopicName = '';
     // $('#addTopicModal').modal('hide');
      this.fetchTopics();
    });
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

}
