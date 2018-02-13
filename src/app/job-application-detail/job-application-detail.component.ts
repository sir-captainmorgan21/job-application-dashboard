import { JobApplicationService } from '../services/job-application.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-application-detail',
  templateUrl: './job-application-detail.component.html',
  styleUrls: ['./job-application-detail.component.css']
})
export class JobApplicationDetailComponent implements OnInit {

  private applicationId;
  public application;

  constructor(public router: Router, private route: ActivatedRoute, private jobApplicationService: JobApplicationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
            this.applicationId = params['id'];
      console.log(this.applicationId);
        });
    this.loadApplication();
  }

  private loadApplication() {
    this.application = this.jobApplicationService.getApplicationById(Number(this.applicationId));
  }

}
