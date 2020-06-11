import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CatalogComponent } from './catalog/catalog/catalog.component';
import { CurrencyFormatPipe } from '../helpers/currency-format.pipe';
import { ProductComponent } from './catalog/product/product.component';
import { CatalogMenuComponent } from './catalog/catalog-menu/catalog-menu.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { EditProductComponent } from './catalog/edit-product/edit-product.component';
import { DeliveriesComponent } from './deliveries/deliveries/deliveries.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
    NgxChartsModule,
  ],
  declarations: [AdminComponent,
    AdminDashboardComponent,
    CatalogComponent, 
    CurrencyFormatPipe, 
    DeliveriesComponent,
    ProductComponent, 
    CatalogMenuComponent, 
    AddProductComponent, 
    EditProductComponent]
})
export class AdminModule { }
