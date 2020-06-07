import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveriesHistoryComponent } from './deliveries-history/deliveries-history.component';

import { AdminComponent } from './admin/admin.component';
import { CatalogComponent } from './catalog/catalog.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),},
          { path: 'deliveries', component: DeliveriesComponent },
          { path: 'catalog', component: CatalogComponent },
          { path: 'deliveries/history', component: DeliveriesHistoryComponent },
          { path: '', redirectTo:"dashboard", pathMatch:"full"},
          { path: 'dashboard', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
