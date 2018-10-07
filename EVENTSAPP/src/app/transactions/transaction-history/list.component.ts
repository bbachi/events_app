import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-transaction-list',
  styleUrls: ['list.component.css'],
  templateUrl: 'list.component.html',
})
export class TransactionListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'type', 'requestDate', 'createdBy'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() transactionList: any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Transaction>(this.transactionList);
    this.dataSource.paginator = this.paginator;
  }
}

export interface Transaction {
  id: number;
  type: string;
  requestDate: string;
  createdBy: string;
}

const ELEMENT_DATA: Transaction[] = [];