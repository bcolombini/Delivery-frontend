import { Component, OnInit } from '@angular/core';
import { WhatsappService, WhatsAppResponse } from 'src/app/whatsapp/whatsapp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  constructor(private whatsappservice: WhatsappService,private router: Router) { 
    this.whatsappservice.whatsAppWs.subscribe( (messageResponse:WhatsAppResponse) =>{
      if(messageResponse.status != "CONNECT"){
        this.router.navigate(['/'])
      }
    })
  }

  ngOnInit(): void {
  }

  nextExec(){
    this.whatsappservice.whatsAppWs.next({status:"DISCONNECT"})
  }

}
