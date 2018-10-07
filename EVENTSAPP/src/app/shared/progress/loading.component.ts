import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  ngOnInit() {
  }

}
