import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [SettingsComponent, WhatsappComponent, ProfileComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
