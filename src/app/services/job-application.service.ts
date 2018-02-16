import { Injectable } from '@angular/core';
import { APPLICATIONS } from '../mock-applications';

@Injectable()
export class JobApplicationService {

  public favApplications = [];

  constructor() { }

  getApplications(): any {
    return APPLICATIONS;
  }

  getApplicationById(id: number): any {
    return APPLICATIONS.find(function(application) {
      return application.id === id;
    });
  }

  isFavorited(id: any): boolean {
    return this.favApplications.includes(id);
  }

  storeFilterObjToSessionStorage(filterObj: any): void {
      sessionStorage.setItem('filterObj', JSON.stringify(filterObj));
  }

  getFilterObjFromSessionStorage(): any {
      return JSON.parse(sessionStorage.getItem('filterObj'));
  }

  storeFavAppsToSessionStorage() {
      sessionStorage.setItem('favApplications', JSON.stringify(this.favApplications));
  }

  getFavAppsFromSessionStorage() {
      return JSON.parse(sessionStorage.getItem('favApplications'));
  }

}
