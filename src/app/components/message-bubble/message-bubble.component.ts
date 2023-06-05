import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.css']
})
export class MessageBubbleComponent implements OnInit {

  @Input()
  message?: string;

  @Input()
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
