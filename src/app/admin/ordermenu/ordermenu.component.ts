import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { faFileAlt,faUser,} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordermenu',
  templateUrl: './ordermenu.component.html',
  styleUrls: ['./ordermenu.component.scss']
})
export class OrdermenuComponent implements OnInit{

  faWhatsApp = faWhatsapp;
  faFileAlt = faFileAlt;
  appOrder;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.fragment.subscribe(x=>{
      this.appOrder = x == "chat"
    });
  }
  
  ngOnInit(): void {
  }

}
