import {Component, Input, OnInit} from '@angular/core';
import {MessagesRequest} from "../../../_core/_models/messages-request";

@Component({
  selector: 'app-chats-box',
  templateUrl: './chats-box.component.html',
  styleUrls: ['./chats-box.component.css']
})
export class ChatsBoxComponent implements OnInit {

  @Input()
  allRequestAndResponse?: string[];

  @Input()
  isLoading?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
