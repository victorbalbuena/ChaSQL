import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { ChatsBoxComponent } from './chats-box/chats-box.component';
import { WritingBubbleComponent } from './writing-bubble/writing-bubble.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MessageBubbleComponent,
    ChatsBoxComponent,
    WritingBubbleComponent
  ],
  exports: [
    MessageBubbleComponent,
    ChatsBoxComponent,
    WritingBubbleComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }
