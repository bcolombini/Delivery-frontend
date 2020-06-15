import { Component, OnInit } from '@angular/core';
import { ProductControl } from '../ProductControl';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent extends ProductControl implements OnInit {

  public priceModel: String = "0,00";
  public productNameModel: String;
  public descriptionModel: String;
  private regex: RegExp = new RegExp("^\d+(\.|\,)\d{2}$")    

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
