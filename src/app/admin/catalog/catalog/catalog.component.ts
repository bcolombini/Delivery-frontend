import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/modal/confirm/confirm-modal.component';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  public myModel;
  public products;
  private originalData = [{
    id:0,
    name:'coca-cola',
    price:"100.00"
    },
    {
      id:1,
      name:'pepsi',
      price:"5.00"
    },
    {
      id:2,
      name:'stella artois',
      price:"50.00"
    },
    {
      id:3,
      name:'guarana',
      price:"599.00"
    }]
  
  constructor(private modalService: NgbModal) { 
    this.products = this.originalData
  }

  ngOnInit(): void {
  }

  onChange(event){
    this.products = this.originalData.filter(x=> x.name.includes(event))
  }

  
  open(event) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.item = this.originalData[event["id"]];
    modalRef.result.then(item=>this.remove(item))
  }

  remove(item){
    if(item == -1) return
    this.originalData = this.originalData.filter(x=> x.id != item.id)
    this.products = this.originalData
  }
  
}
