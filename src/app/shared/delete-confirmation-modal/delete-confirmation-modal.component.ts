import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable } from "rxjs";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.css']
})
export class DeleteConfirmationModalComponent implements OnInit {

  @Output() accept = new EventEmitter();

  // @ts-ignore
  display$: Observable<'open' | 'close'>;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }

  actAccept() {
    this.accept.emit();
    this.modalService.close();
  }

  close() {
    this.modalService.close();
  }

}
