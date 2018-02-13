import { JobApplicationService } from '../services/job-application.service';
import { Component, OnInit, Input } from '@angular/core';
import * as  _ from 'lodash';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  @Input() application;

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit() {
  }

  isFavApp(): boolean {
    return this.jobApplicationService.isFavorited(this.application.id);
  }

  addToFavs(): void {
    this.jobApplicationService.favApplications.push(this.application.id);
  }

  removeFromFavs(): void {
    const that = this;
    _.remove(this.jobApplicationService.favApplications, function(applicationId) {
      return that.application.id === applicationId;
    });
  }

}
