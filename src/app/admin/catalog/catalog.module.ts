import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogMenuComponent } from './catalog-menu/catalog-menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule,
    NgbModalModule
  ],
  declarations: [
    CatalogComponent,
    CatalogMenuComponent,
    AddProductComponent,
    EditProductComponent,
    ProductComponent
  ]
})
export class CatalogModule { }
