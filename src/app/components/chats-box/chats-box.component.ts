import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chats-box',
  templateUrl: './chats-box.component.html',
  styleUrls: ['./chats-box.component.css']
})
export class ChatsBoxComponent implements OnInit {

  @Input()
  allRequestAndResponse?: string[] | null;

  @Input()
  isLoading?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
