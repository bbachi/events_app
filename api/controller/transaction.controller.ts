import { Request, Response, NextFunction } from 'express';
import { TransactionHelper } from '../helper/transaction.helper';

export class TransactionController {

    public listTransactions(req: Request, res: Response, next: NextFunction) {
        
        console.log("sadasd asdasd asdasd asdada");
        var transactionHelper = new TransactionHelper();
        transactionHelper.transactionList(req).then(s => res.json(s));
    }

    public transactionDetail(req: Request, res: Response, next: NextFunction) {
        
        console.log("sadasd asdasd asdasd asdada");
        res.json({"test":"asdadasdas"});
        
    }

}