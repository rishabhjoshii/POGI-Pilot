import { Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardMainComponent } from './components/dashboard/dashboard-main/dashboard-main.component';
import { MyFeedbacksComponent } from './components/dashboard/my-feedbacks/my-feedbacks.component';
import { DashboardTeamComponent } from './components/dashboard/dashboard-team/dashboard-team.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
     {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
     },
     {
          path: 'feedback',
          component: FeedbackComponent
     }, {
          path: 'dashboard',
          component: DashboardComponent,
          children: [
               {
                    path: '', // Default child route
                    component: DashboardMainComponent,
               },
               {
                    path: 'my-feedback',
                    component: MyFeedbacksComponent
               }, {
                    path: 'team',
                    component: DashboardTeamComponent
               }, {
                    path: 'report',
                    component: ReportsComponent
               }
          ]
     }, {
          path: 'login',
          component: LoginComponent
     },
     {
          path: 'signup',
          component: SignupComponent
     }
];
