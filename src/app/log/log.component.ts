import { MessagesService } from './../messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  myMessages: string[];

  constructor(private messagesService : MessagesService) { }

  ngOnInit() {
    this.myMessages = this.messagesService.messages;
  }

}
