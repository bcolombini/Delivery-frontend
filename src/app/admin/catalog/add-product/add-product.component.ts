import { Component, OnInit } from '@angular/core';
import { ProductControl } from '../ProductControl';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent extends ProductControl implements OnInit {
    public imagePath = "";
    public priceModel: String = "0,00";
    public productNameModel: String;
    public descriptionModel: String;
    private regex: RegExp = new RegExp("^\d+(\.|\,)\d{2}$")    

    constructor() { super()}

    ngOnInit(): void {
    }
   
}
