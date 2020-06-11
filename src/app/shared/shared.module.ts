import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from '../helpers/currency-format.pipe';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from '../modal/confirm/confirm-modal.component';


@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyFormatPipe,ConfirmModalComponent],
  exports:[CurrencyFormatPipe,ConfirmModalComponent]
})
export class SharedModule { }
