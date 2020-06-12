import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash,faPause,faPlay, faEdit,faSortAmountUp, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/service/toast/toast.service';

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
  @Output("delete") deleteEvent = new EventEmitter();

  constructor(private toastService: ToastService) {
    
  }

  ngOnInit(): void {
  }

  sort(){
    this.sortStep += 1
    if(this.sortStep == 1){
      this.sortIcon = faSortAmountUp
      this.products.sort((a,b)=>{
        return b['price']-a['price'];
      })
    } else if(this.sortStep == 2){
      this.products.sort((a,b)=>{
        return a['price']-b['price'];
      })
      this.sortIcon = faSortAmountDown
    }else{
      this.sortStep = 0
    }
  }

  onDelete(item){
    this.deleteEvent.emit(item)
  }

  start(itemName){
    this.toastService.toastActionStartItem(itemName)
  }

  pause(itemName){
    this.toastService.toastActionStopItem(itemName)
  }

}
