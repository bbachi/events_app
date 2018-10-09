import * as express from 'express';
import * as expressSession from 'express-session';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser'
import { APPRouter } from './api/router/app.router';
import { APPInterceptor } from './api/interceptor/app.interceptor';

class App {

    public express: express.Application;
    public appRouter: APPRouter = new APPRouter();
    public appInterceptor: APPInterceptor = new APPInterceptor();
    //public cache = apicache.middleware;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.appRouter.init();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json({limit: '50mb'}));
        this.express.use(cookieParser());
        this.express.use(expressSession({
                    name: 'server-session-cookie-id',
                    secret: 'secrettoken',
                    resave: true,
                    saveUninitialized: true,
                    rolling: true,
        }));

        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(this.appInterceptor.beforeEachRequest);
        //this.express.use(this.gmessInterceptor.afterEachRequest);
        this.express.use(express.static("./dist"));
        //this.express.use('/eventsApp', express.static(process.cwd()+"/EVENTSAPP/dist/"));
        //this.express.use(this.cache('5 minutes'))
    }

    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
        * working so far. This function will change when we start to add more
        * API endpoints */
        let myappRouter = express.Router();
        // placeholder route handler
        myappRouter.get('/*', (req, res, next) => {
            res.sendFile(process.cwd()+"/myapp/dist/index.html");
        });
        this.express.use('/eventsApp/api', this.appRouter.router);
        this.express.use('/eventsApp/', myappRouter);
    }
}

export default new App().express;
