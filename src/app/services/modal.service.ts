import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // @ts-ignore
  private display: BehaviorSubject< 'open' | 'close' > = new BehaviorSubject('close');

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }

}
