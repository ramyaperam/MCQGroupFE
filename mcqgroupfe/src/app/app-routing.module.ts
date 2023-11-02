import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveQuizzesComponent } from './active-quizzes/active-quizzes.component';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PreviousSubmissionsComponent } from './previous-submissions/previous-submissions.component';

import { TopicsComponent } from './topics/topics.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent, children: [
    
    { path: 'topics', component: TopicsComponent },
    { path: 'active-quizzes', component: ActiveQuizzesComponent },
    { path: 'previous-submissions', component: PreviousSubmissionsComponent },
  ] },
  { path: 'activity', component: ActivityComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'submissions', component: PreviousSubmissionsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
