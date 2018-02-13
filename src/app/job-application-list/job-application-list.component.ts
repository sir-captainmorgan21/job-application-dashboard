import {JobApplicationService} from '../services/job-application.service';
import {Component, OnInit} from '@angular/core';
import {ApplicationFilterPipe} from '../pipes/application-filter.pipe';
import {FormsModule} from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {

  public jobApplications;
  public sortOptions = ['experience', 'availability'];
  public filterObj: any = {
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
    this.loadSessionData();
  }

  public clearDateRange() {
    this.filterObj.dateFrom = null;
    this.filterObj.dateTo = null;
    this.jobApplicationService.storeFilterObjToSessionStorage(this.filterObj);
  }
  
  public updateFilterObjSessionStorage() {
      this.jobApplicationService.storeFilterObjToSessionStorage(this.filterObj);
  }
  
  private loadSessionData(){
      let sessionFilterObj = this.jobApplicationService.getFilterObjFromSessionStorage();
      if(sessionFilterObj) {
          this.filterObj = sessionFilterObj;
      }
      let sessionFavApps = this.jobApplicationService.getFavAppsFromSessionStorage();
      if(sessionFavApps) {
          this.jobApplicationService.favApplications = sessionFavApps;
      }
  }

}
