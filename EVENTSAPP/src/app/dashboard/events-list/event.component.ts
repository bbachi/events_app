import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  @Output() eventDetailEvent = new EventEmitter();

  ngOnInit() {
  }

  eventDetail() {
      console.log("event detail clicked............");
      this.eventDetailEvent.emit("event clicked");
  }

}