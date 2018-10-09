import { Request, Response, NextFunction } from 'express';
import { SignupHelper } from '../helper/signup.helper';

export class SignupController {

    public signup(req: Request, res: Response, next: NextFunction) {
        
        console.log("sadasd asdasd asdasd asdada");
        var signupHelper = new SignupHelper();
        signupHelper.signup(req).then(s => res.json(s));
    }

}