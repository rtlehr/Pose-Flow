import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    data: { hideChrome: true }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clock',
    loadComponent: () => import('./pages/clock/clock.page').then( m => m.ClockPage),
    data: { hideChrome: true }
  },
  {
    path: 'files',
    loadComponent: () => import('./pages/files/files.page').then( m => m.FilesPage),
    data: { hideChrome: true }
  },
  {
    path: 'person',
    loadComponent: () => import('./pages/person/person.page').then( m => m.PersonPage),
    data: { hideChrome: false }
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.page').then( m => m.CalendarPage),
    data: { hideChrome: true }
  },
];
