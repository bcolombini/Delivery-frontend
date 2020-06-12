import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public priceModel: String = "0,00";
  public productNameModel: String;
  public descriptionModel: String;
  private regex: RegExp = new RegExp("^\d+(\.|\,)\d{2}$")    

  constructor() { }

  ngOnInit(): void {
  }

  onChangePrice(event){
    let value = this.removeAllNonDigit(event.target.value)
    
    if(value < 1){
      event.target.value = "0,00"
      return
    }

    const numberWithoutZeroLeft = this.removeZeroFromLeft(value)
    event.target.value = this.formatNumberField(numberWithoutZeroLeft);    

  }

  private removeAllNonDigit(value){
    return value.replace(/\D/g,'')
  }

  private removeZeroFromLeft(value){
    return value.replace(/^0+/, '');
  }

  private formatNumberField(value){
    if(value < 10 && value > 0){
      value = "0,0"+value
    } else if(value < 100 && value > 0){
      value = "0,"+value
    } else {      
      let eventValue = (value/100).toLocaleString('pt-BR')
      if(eventValue.includes(",")){
        value = eventValue.split(",")[1].length < 2?eventValue+"0":eventValue;
      } else {
        value = eventValue+",00"
      }
    }
    return value;
  }


}
