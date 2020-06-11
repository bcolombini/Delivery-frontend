import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveriesHistoryComponent } from '../deliveries-history/deliveries-history.component';
import { OrderComponent } from './order.component';
import { ChatComponent } from './chat/chat.component';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { FooterComponent } from './footer/footer.component';
import { OrderRoutingModule } from './order-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderComponent,
    ChatComponent, 
    OrdermenuComponent,
    FooterComponent
  ]
}) 
export class OrderModule { }
