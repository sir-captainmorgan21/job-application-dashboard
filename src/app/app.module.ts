import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import {AppComponent} from './app.component';
import { JobApplicationService } from './services/job-application.service';
import { MatNativeDateModule } from '@angular/material/core';
import {JobApplicationComponent} from './job-application/job-application.component';
import {JobApplicationDetailComponent} from './job-application-detail/job-application-detail.component';
import { ApplicationFilterPipe } from './pipes/application-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';


@NgModule({
  declarations: [
    AppComponent,
    JobApplicationComponent,
    JobApplicationDetailComponent,
    ApplicationFilterPipe,
    JobApplicationListComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [JobApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
