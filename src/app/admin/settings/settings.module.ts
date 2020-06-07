import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProfileComponent } from './profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [SettingsComponent, WhatsappComponent, ProfileComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FontAwesomeModule
  ]
})
export class SettingsModule { }
