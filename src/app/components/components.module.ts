import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { DisplayComponent } from './display/display.component';
import { ChatsBoxComponent } from './chats-box/chats-box.component';
import { InputComponent } from './input/input.component';
import { WritingBubbleComponent } from './writing-bubble/writing-bubble.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MessageBubbleComponent,
    DisplayComponent,
    ChatsBoxComponent,
    InputComponent,
    WritingBubbleComponent
  ],
  exports: [
    MessageBubbleComponent,
    DisplayComponent,
    ChatsBoxComponent,
    InputComponent,
    WritingBubbleComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class ComponentsModule { }
