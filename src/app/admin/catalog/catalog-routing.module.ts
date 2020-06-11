import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogMenuComponent } from './catalog-menu/catalog-menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const catalogRoutes: Routes = [
  {
    path: '',
    component: CatalogMenuComponent,
    children: [
      { path:"", redirectTo:"list"},
      { path:"list", component:CatalogComponent},
      { path:"add", component:AddProductComponent},
      { path:"edit/:id", component:EditProductComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(catalogRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CatalogRoutingModule { }
