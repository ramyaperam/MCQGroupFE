import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent implements OnInit {
  topics: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }
}
