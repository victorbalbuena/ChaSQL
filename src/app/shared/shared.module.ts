import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';
import {ModalService} from "../services/modal.service";



@NgModule({
  declarations: [
    DeleteConfirmationModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DeleteConfirmationModalComponent
  ],
  providers: [
    ModalService
  ]
})
export class SharedModule { }
