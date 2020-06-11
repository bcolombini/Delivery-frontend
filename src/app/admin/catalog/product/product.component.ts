import { Component, OnInit, Input } from '@angular/core';
import { faTrash,faPause,faPlay, faEdit,faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  
  faPause = faPause
  faPlay = faPlay
  faTrash = faTrash
  faEdit = faEdit
  sortIcon = null
  sortStep = 0;

  @Input("products") products: Object[];
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  sort(){
    this.sortStep += 1
    if(this.sortStep == 1){
      this.sortIcon = faSortAmountDown
      this.products.sort((a,b)=>{
        return a['price']-b['price'];
      })
    } else if(this.sortStep == 2){
      this.products.sort((a,b)=>{
        return b['price']-a['price'];
      })
      this.sortIcon = faSortAmountUp
    } else{
      this.products.sort((a,b)=>{
        return a['price']-b['price'];
      })
      this.sortStep = 0
    }

  }

}
