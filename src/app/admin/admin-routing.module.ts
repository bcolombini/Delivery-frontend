import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }                from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveriesComponent } from './deliveries/deliveries/deliveries.component';
import { DeliveriesHistoryComponent } from './deliveries/deliveries-history/deliveries-history.component';
// import { CatalogComponent } from './catalog/catalog.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
      { path: 'orders', component: DeliveriesComponent},
      { path: "orders",
        children:[
            { path:"",component:DeliveriesComponent },
            { path: ':id', loadChildren: () => import('./deliveries/order/order.module').then(m => m.OrderModule)},
            { path: 'orders/all/history', component: DeliveriesHistoryComponent},
        ]
      },
      { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)},
      { path: '', redirectTo:"dashboard", pathMatch:"full"},
      { path: '**', redirectTo:"dashboard", pathMatch:"full"},
      { path: 'dashboard', component: AdminDashboardComponent },

      // { path: 'catalog', component: CatalogComponent },
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
