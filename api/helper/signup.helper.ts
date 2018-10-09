import * as request from 'request';
import Promise = require('tspromise');

export class SignupHelper {

  constructor() {
  }

  public signup(req: any): Promise<any> {
    console.log("users length::::::"+req.session.users)
    var p = new Promise((resolve, reject) => {
        if(undefined != req.session.users && req.session.users.length > 0){
            let users = req.session.users;
            console.log("users length::::::"+users.length)
            users.push(req.body.user);
            req.session.users = users;
            resolve(users.length > 0);
        }else{
            console.log("else")
            let users = [req.body.user];
            req.session.users = users;
            resolve(req.session.users.length > 0);
        }
    });
    return p;
  }

}