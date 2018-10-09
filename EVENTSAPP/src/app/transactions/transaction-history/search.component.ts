import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class TransactionSearchComponent implements OnInit {

  constructor() { }
  @Output() searchEvent = new EventEmitter<any>();
  @Input() fromDateTitle: string;
  @Input() toDateTitle: string;

  fDate: any;
  tDate: any;

  ngOnInit() {}

  search() {
    this.searchEvent.emit({fromDate:this.fDate,toDate:this.tDate});
  }

}
