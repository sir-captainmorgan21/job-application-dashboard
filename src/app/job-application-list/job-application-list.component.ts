import {JobApplicationService} from '../services/job-application.service';
import {Component, OnInit} from '@angular/core';
import {ApplicationFilterPipe} from '../pipes/application-filter.pipe';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {

  public jobApplications;
  public sortOptions = ['experience', 'availability'];
  public filterObj = {
    'name': null,
    'position': null,
    'dateFrom': null,
    'dateTo': null,
    'experience': null,
    'availability': null,
    'sort': null
  };

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit() {
    this.jobApplications = this.jobApplicationService.getApplications();
  }

  public clearDateRange() {
    this.filterObj.dateFrom = null;
    this.filterObj.dateTo = null;
  }

}
