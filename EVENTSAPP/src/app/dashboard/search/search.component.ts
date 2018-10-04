import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string;
  options: any;
  
  constructor() { }

  ngOnInit() {
    this.options = ["77001","77002","77003","77004"]
  }

}
