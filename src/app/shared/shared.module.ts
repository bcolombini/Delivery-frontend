import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from '../helpers/currency-format.pipe';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from '../modal/confirm/confirm-modal.component';
import { DropzoneDirective } from '../directive/dropzone/dropzone.directive';
import { DragzoneComponent } from '../custom/dragzone/dragzone.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [CommonModule,FontAwesomeModule],
  declarations: [
    CurrencyFormatPipe,
    ConfirmModalComponent,
    DropzoneDirective,
    DragzoneComponent],
  exports:[CurrencyFormatPipe,ConfirmModalComponent,DropzoneDirective,DragzoneComponent]
})
export class SharedModule { }
