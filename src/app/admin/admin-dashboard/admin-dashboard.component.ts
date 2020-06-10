import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit,AfterViewInit {


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeItens()
  }
  multi: any[] = [
    {
      "name": "Vendas",
      "series": [
        {
          "name": "23/02",
          "value": 100.00
        },
        {
          "name": "24/02",
          "value": 10.00
        },
        {
          "name": "25/02",
          "value": 24.00
        },
        {
          "name": "26/02",
          "value": 24.00
        },
        {
          "name": "27/02",
          "value": 100.00
        },
        {
          "name": "28/02",
          "value": 2.20
        },
        {
          "name": "01/03",
          "value": 2.20
        }
      ]
    },
  ];
  // view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  view = []
  colorScheme = {
    domain: ['#5AA454']
  };
  
  curve:Object = shape.curveCatmullRom.alpha(1)

  constructor() {
    
  }
  ngOnInit(){

  }

  ngAfterViewInit(){
    this.resizeItens()
  }

  resizeItens(){
    this.view = [document.querySelector(".graphCard").clientWidth-20,250]
    this.curve = document.documentElement.clientWidth >= 1024?shape.curveCatmullRom.alpha(1):shape.curveCardinal.tension(1)
  }
}
