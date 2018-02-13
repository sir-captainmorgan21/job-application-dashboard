import { JobApplicationDetailComponent } from './job-application-detail/job-application-detail.component';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/applications', pathMatch: 'full' },
    { path: 'applications', component: JobApplicationListComponent },
    { path: 'applications/:id', component: JobApplicationDetailComponent },
];

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )

export class AppRoutingModule { }
