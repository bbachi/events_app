import * as request from 'request';
import Promise = require('tspromise');

export class LoginHelper {

  constructor() {
  }

  public validateLogin(req: any): Promise<any> {
    
    let userName: string = req.body.userName;
    let password: string = req.body.password;
    console.log("LoginHelper:::::validateLogin:::::");
    var p = new Promise((resolve, reject) => resolve((userName === "user" && password === "tester")));
    return p;
  }

}