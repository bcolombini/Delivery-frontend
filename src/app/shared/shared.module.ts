import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from '../helpers/currency-format.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyFormatPipe],
  exports:[CurrencyFormatPipe]
})
export class SharedModule { }
