import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  events: any;

  eventDetail(event) {
    console.log("login clicked!!:::::"+event);
    this.router.navigate(['./eventdetail']);
  }

  ngOnInit() {
     this.events = [1,2,3,4,5,6,7,8,10];
  }

}
