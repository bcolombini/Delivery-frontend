import { Component, OnInit } from '@angular/core';
import { faList, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent implements OnInit {
  
  faList = faList
  faPlus = faPlus

  constructor() { }

  ngOnInit(): void {
  }

}
