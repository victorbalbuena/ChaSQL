import { Component, OnDestroy, OnInit } from '@angular/core';
import { OpenaiService } from './services/openai.service';
import { SubSink } from 'subsink';
import { map } from 'rxjs';
import { Structure } from '../_core/_models/structure';
import { MessagesRequest } from '../_core/_models/messages-request';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, OnDestroy {

  request!: Structure;
  message?: string;
  subSink = new SubSink();

  allRequestAndResponse?: string[] = [];

  isLoading: boolean = false;

  varEmpty = '';

  myForm = new FormGroup({
    text: new FormControl('', Validators.required)
  });

  constructor(private openaiHttp: OpenaiService) {
    this.request = new Structure();
  }

  ngOnInit(): void {
  }

  sendRequest() {
    this.isLoading = true;
    this.request.text = this.text?.value;
    this.myForm.controls['text'].disable();
    this.myForm.controls['text'].setValue('');
    // @ts-ignore
    this.allRequestAndResponse.push(this.request?.text);
    this.subSink.add(
      this.openaiHttp.getSQLResponse(this.request)
        .pipe(
          map((response) => {
            console.log(response);

            // @ts-ignore
            this.message = response.text?.slice(1);
            // @ts-ignore
            this.allRequestAndResponse.push(this.message);

            console.log(this.allRequestAndResponse);
            this.isLoading = false;
            this.myForm.controls['text'].enable();
          })
        )
        .subscribe(() => {}, error => {
          this.isLoading = false;
          this.myForm.controls['text'].enable();
        })
    );
  }

  get text() {
    return this.myForm.get('text');
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
