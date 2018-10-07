import * as request from 'request';
import Promise = require('tspromise');
import { Transaction } from '../models'

export class TransactionHelper {

  constructor() {
  }

  public transactionList(req: any): Promise<any> {
    
    let fromDate: string = req.body.fromDate;
    let toDate: string = req.body.toDate;
    console.log("LoginHelper:::::validateLogin:::::");
    var p = new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve(this.getTransactions());
       }, 2000);
    });
    return p;
  }

  private getTransactions() {
     let transactionList = new Array<Transaction>();
     for(let i=0; i<25; i++) {
        let tran = new Transaction();
        tran.id = i;
        tran.requestDate = "09/09/000"+i;
        tran.createdBy = "Bachia"+i;
        tran.type = "LOGIN"
        transactionList.push(tran);
     }
     return transactionList;
  }


}