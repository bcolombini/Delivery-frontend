import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveriesHistoryComponent } from './deliveries-history/deliveries-history.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AdminComponent,AdminDashboardComponent,DeliveriesComponent,DeliveriesHistoryComponent, CatalogComponent],
})
export class AdminModule { }
