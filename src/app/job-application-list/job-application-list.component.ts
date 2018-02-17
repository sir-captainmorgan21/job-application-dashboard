import {JobApplicationService} from '../services/job-application.service';
import {Component, OnInit} from '@angular/core';
import {ApplicationFilterPipe} from '../pipes/application-filter.pipe';
import { ApplicationListFilter } from '../shared/application-list-filter.model';
import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

const MAX_NUM_OF_EXPERIENCE = 11;
const MAX_NUM_OF_SHIFTS = 21;

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {

  public jobApplications;
  public sortOptions = ['experience', 'availability'];
  public applicationListFilter: ApplicationListFilter = new ApplicationListFilter();

  public experienceOptions = [...new Array(MAX_NUM_OF_EXPERIENCE).keys()];
  public shiftOptions = [...new Array(MAX_NUM_OF_SHIFTS).keys()];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit() {
    this.jobApplications = this.jobApplicationService.getApplications();
    this.loadSessionData();
  }

  public clearDateRange() {
    this.applicationListFilter.dateFrom = null;
    this.applicationListFilter.dateTo = null;
    this.jobApplicationService.storeFilterObjToSessionStorage(this.applicationListFilter);
  }

  public updateFilterObjSessionStorage() {
      this.jobApplicationService.storeFilterObjToSessionStorage(this.applicationListFilter);
  }

  private loadSessionData() {
      const sessionFilterObj = this.jobApplicationService.getFilterObjFromSessionStorage();
      if (sessionFilterObj) {
          this.applicationListFilter = sessionFilterObj;
      }
      const sessionFavApps = this.jobApplicationService.getFavAppsFromSessionStorage();
      if (sessionFavApps) {
          this.jobApplicationService.favApplications = sessionFavApps;
      }
  }

}
