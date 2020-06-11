import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public myModel;
  public products;
  private originalData = [{
    name:'coca-cola',
    price:"100.00"
    },
    {
      name:'pepsi',
      price:"5.00"
    },
    {
      name:'stella artois',
      price:"50.00"
    },
    {
      name:'guarana',
      price:"599.00"
    }]
  
  constructor() { 
    this.products = this.originalData
  }

  ngOnInit(): void {
  }

  onChange(event){
    this.products = this.originalData.filter(x=> x.name.includes(event))
  }

}
