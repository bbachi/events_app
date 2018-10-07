import {Router, Request, Response, NextFunction} from 'express';
import { LoginController, TransactionController } from '../controller';
//import LoggerUtil from '../logs/log';
import { EnvironmentConfig } from 'env-read';

export class APPRouter {

     router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        var loginController = new LoginController();
        var transactionController = new TransactionController();
        
        this.router.post('/login', loginController.validateLogin);
        this.router.get('/test', loginController.testRequest);

        this.router.post('/transaction/list', transactionController.listTransactions);
        this.router.post('/transaction/detail', transactionController.transactionDetail);
    }

}
