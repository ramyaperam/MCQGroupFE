import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-previous-submissions',
  templateUrl: './previous-submissions.component.html',
})
export class PreviousSubmissionsComponent implements OnInit {
  previousSubmissions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPreviousSubmissions().subscribe((submissions) => {
      this.previousSubmissions = submissions;
    });
  }
}
