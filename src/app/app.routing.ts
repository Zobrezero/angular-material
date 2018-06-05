import { RouterModule, Routes } from '@angular/router';

import { MaterialComponent } from './material/material.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'material', component: MaterialComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routes = RouterModule.forRoot(appRoutes);