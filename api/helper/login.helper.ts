import * as request from 'request';
import Promise = require('tspromise');

export class LoginHelper {

  constructor() {
  }

  public validateLogin(req: any): Promise<any> {
    
    let userName: string = req.body.userName;
    let password: string = req.body.password;
    console.log("LoginHelper:::::validateLogin:::::");
    
    var p = new Promise((resolve, reject) => {
        let sessionUsers = req.session.users;
        console.log("users length::::::"+sessionUsers.length);
        let users = sessionUsers.filter((user:any) => (user.userName == userName && user.password == password));
        resolve(users.length > 0);
    });
    return p;
  }

}