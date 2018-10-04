import { Request, Response, NextFunction } from 'express';
import { LoginHelper } from '../helper/login.helper';

export class LoginController {

    public validateLogin(req: Request, res: Response, next: NextFunction) {
        
        console.log("sadasd asdasd asdasd asdada");
        var loginHelper = new LoginHelper();
        loginHelper.validateLogin(req).then(s => res.json(s));
    }

    public testRequest(req: Request, res: Response, next: NextFunction) {
        
        console.log("sadasd asdasd asdasd asdada");
        res.json({"test":"asdadasdas"});
        
    }

}