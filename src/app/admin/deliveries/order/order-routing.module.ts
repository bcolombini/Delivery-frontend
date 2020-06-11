import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { ChatComponent } from './chat/chat.component';
import { OrderComponent } from './order.component';


const deliveriesRoutes: Routes =  [ 
  {
    path:"",
    component:OrdermenuComponent,
    children:[
      { path: "",redirectTo:"order"},
      { path: "order",component: OrderComponent},
      {path: "chat" ,component: ChatComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(deliveriesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule { }



