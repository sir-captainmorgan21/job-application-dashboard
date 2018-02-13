import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationFilter'
})
export class ApplicationFilterPipe implements PipeTransform {

  transform(applications: any, name: any, position: any,
    dateFrom: any, dateTo: any, experience: any, availability: any, sort: any): any {
    let filteredApplications = applications;
    filteredApplications = this.filterByName(filteredApplications, name);
    filteredApplications = this.filterByPosition(filteredApplications, position);
    filteredApplications = this.filterByDateRange(filteredApplications, dateFrom, dateTo);
    filteredApplications = this.filterByExperience(filteredApplications, experience);
    filteredApplications = this.filterByAvailability(filteredApplications, availability);
    filteredApplications = this.sort(filteredApplications, sort);
    return filteredApplications;
  }

  private filterByName(applications: any, nameFilter: any): boolean {
    if (nameFilter) {
      return applications.filter(function(app: any) {
        return app.name.toLowerCase().startsWith(nameFilter.toLowerCase());
      });
    }
    return applications;
  }

  private filterByPosition(applications: any, positionFilter: any): boolean {
    if (positionFilter) {
      return applications.filter(function(app: any) {
        return app.position.toLowerCase().startsWith(positionFilter.toLowerCase());
      });
    }
    return applications;
  }

  private filterByDateRange(applications: any, dateFrom: any, dateTo: any) {
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

  private filterByExperience(applications: any, experience: any) {
    if (experience) {
      return applications.filter(function(app: any) {
        return app.experience >= experience;
      });
    }
    return applications;
  }

  private filterByAvailability(applications: any, availability: any) {
    if (availability) {
       return applications.filter(function(app: any) {
        const appAvailability = app.availability;
        const availabilityTotal = appAvailability.M +
          appAvailability.T + appAvailability.W + appAvailability.Th + appAvailability.F + appAvailability.S + appAvailability.Su;
        return availabilityTotal >= availability;
      });
    }
    return applications;
  }

  private sort(applications: any, sort: any) {
    if (sort) {
      if (sort === 'availability') {
        return applications.sort(function(a, b) {
          const aTotal = a.availability.M + a.availability.T + a.availability.W + a.availability.Th +
             a.availability.F + a.availability.S + a.availability.Su;
          const bTotal = b.availability.M + b.availability.T + b.availability.W + b.availability.Th +
             b.availability.F + b.availability.S + b.availability.Su;
          if (aTotal > bTotal) {
            return 1;
          }
          if (aTotal < bTotal) {
            return -1;
          }
          return 0;
        });
      } else if (sort === 'experience') {
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
    return applications;
  }
}
