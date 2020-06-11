import { Component, OnInit } from '@angular/core';
import { faTrash,faPause,faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  faPause = faPause
  faPlay = faPlay
  faTrash = faTrash
  constructor() { }

  ngOnInit(): void {
  }

}
