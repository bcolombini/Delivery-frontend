import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { DeliveriesHistoryComponent } from './deliveries-history/deliveries-history.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderComponent } from './order/order.component';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { FooterComponent } from './order/footer/footer.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CurrencyFormatPipe } from '../helpers/currency-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule,
  ],
  declarations: [AdminComponent,AdminDashboardComponent,DeliveriesComponent,DeliveriesHistoryComponent, CatalogComponent, OrderComponent, ChatComponent, OrdermenuComponent, FooterComponent,CurrencyFormatPipe]
})
export class AdminModule { }
