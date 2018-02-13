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
    for (let i = 0; i <= APPLICATIONS.length; i++) {
      if (APPLICATIONS[i].id === id) {
        return APPLICATIONS[i];
      }
    }
  }

  isFavorited(id: any): boolean {
    for (let i = 0; i <= this.favApplications.length; i++) {
      if (this.favApplications[i] === id) {
        return true;
      }
    }
    return false;
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
