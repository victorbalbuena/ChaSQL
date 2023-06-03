import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { DisplayComponent } from './display/display.component';
import { ChatsBoxComponent } from './chats-box/chats-box.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    MessageBubbleComponent,
    DisplayComponent,
    ChatsBoxComponent,
    InputComponent
  ],
  exports: [
    MessageBubbleComponent,
    DisplayComponent,
    ChatsBoxComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
