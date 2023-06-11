import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  allRequestAndResponse?: string[] = [];

  getPreviousMessages() {
    const messages = localStorage.getItem('history');
    if (messages !== undefined && messages !== null) {
      const msgs: string[] = JSON.parse(messages);
      return msgs;
    }
    return null;
  }

  clear() {
    localStorage.clear();
  }

}
