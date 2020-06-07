import { Component, OnInit } from '@angular/core';
import { faDownload,faUpload,faUser,faPhone, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  faDownload = faDownload;
  faWhatsApp = faWhatsapp;
  faUser = faUser;
  faUpload = faUpload;
  faPhone = faPhone;
  faSignOutAlt = faSignOutAlt;
  
  constructor() { }

  ngOnInit(): void {
  }

}
