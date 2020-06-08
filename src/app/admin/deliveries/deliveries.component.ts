import { Component, OnInit } from '@angular/core';
import {faHome, faMoneyBill,faWallet} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  faHome = faHome;
  faWallet = faWallet;
  faMoneyBill = faMoneyBill;
  constructor() { }

  ngOnInit(): void {
  }

}
