import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DeliveriesComponent } from './deliveries/deliveries/deliveries.component';
import { SharedModule } from '../shared/shared.module';
import { ToastsContainer } from '../service/toast/toasts-container.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent, 
    DeliveriesComponent,
    ToastsContainer],
})
export class AdminModule { }
