import { ApplicationListFilter } from '../shared/application-list-filter.model';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'applicationFilter',
  pure: false
})
export class ApplicationFilterPipe implements PipeTransform {

  transform(applications: Array<any>, applicationListFilter: ApplicationListFilter): any {
    let filteredApplications = applications;
    filteredApplications = this.filterByName(filteredApplications, applicationListFilter.name);
    filteredApplications = this.filterByPosition(filteredApplications, applicationListFilter.position);
    filteredApplications = this.filterByDateRange(filteredApplications, applicationListFilter.dateFrom, applicationListFilter.dateTo);
    filteredApplications = this.filterByExperience(filteredApplications, applicationListFilter.experience);
    filteredApplications = this.filterByAvailability(filteredApplications, applicationListFilter.availability);
    filteredApplications = this.sort(filteredApplications, applicationListFilter.sortOption);
    return filteredApplications;
  }

  private filterByName(applications: any, nameFilter: any): Array<any> {
    if (nameFilter) {
      return applications.filter(function(app: any) {
        return app.name.toLowerCase().startsWith(nameFilter.toLowerCase());
      });
    }
    return applications;
  }

  private filterByPosition(applications: any, positionFilter: any): Array<any> {
    if (positionFilter) {
      return applications.filter(function(app: any) {
        return app.position.toLowerCase().startsWith(positionFilter.toLowerCase());
      });
    }
    return applications;
  }

  private filterByDateRange(applications: any, dateFrom: any, dateTo: any): Array<any> {
    const that = this;
    if (dateFrom && dateTo) {
      return applications.filter(function(app: any) {
        return dateFrom <= that.getDateObj(app.applied) && that.getDateObj(app.applied) <= dateTo;
      });
    } else if (dateFrom) {
      return applications.filter(function(app: any) {
        return dateFrom <= that.getDateObj(app.applied);
      });
    } else if (dateTo) {
      return applications.filter(function(app: any) {
        return that.getDateObj(app.applied) <= dateTo;
      });
    }
    return applications;
  }

  private getDateObj(applied: any) {
    const appliedArray = applied.split('/');
    const appliedDate = new Date(Number(appliedArray[2]), Number(appliedArray[0]) - 1, Number(appliedArray[1]));
    return appliedDate;
  }

  private filterByExperience(applications: any, experience: any): Array<any> {
    if (experience) {
      return applications.filter(function(app: any) {
        return app.experience >= experience;
      });
    }
    return applications;
  }

  private filterByAvailability(applications: any, availability: any): Array<any> {
    const that = this;
    if (availability) {
      return applications.filter(function(app: any) {
        return that.sumAvailability(app.availability) >= availability;
      });
    }
    return applications;
  }

  private sumAvailability(availability) {
    let sum = 0;
    for (const day in availability) {
      if (availability.hasOwnProperty(day)) {
        sum += availability[day];
      }
    }
    return sum;
  }

  private sort(applications: any, sort: any): Array<any> {
    if (sort) {
      switch (sort) {
        case 'availability':
          return this.sortByAvailability(applications);
        case 'experience':
          return this.sortByExperience(applications);
        default:
          return applications;
      }
    }
    return applications;
  }

  private sortByAvailability(applications: any): any {
    const that = this;
    return applications.sort(function(a, b) {
      const aTotal = that.sumAvailability(a.availability);
      const bTotal = that.sumAvailability(b.availability);
      if (aTotal > bTotal) {
        return 1;
      }
      if (aTotal < bTotal) {
        return -1;
      }
      return 0;
    });
  }

  private sortByExperience(applications: any): Array<any> {
    return applications.sort(function(a, b) {
      if (a.experience > b.experience) {
        return 1;
      }
      if (a.experience < b.experience) {
        return -1;
      }
      return 0;
    });
  }
}
