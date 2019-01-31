// Node.js Modul
import * as path from 'path';

// Externes Modul (via npm installieren)
import * as express from 'express';
import * as bodyParser from 'body-parser';

export class Server {
private _port: number;
private _server: express.Express;

    constructor (port: number) {
const assetsPath = path.join(__dirname, '..', 'assets');

        this._port = port;
        this._server = express();

        // Express soll mit pug arbeiten
        this._server.set('views', path.join(__dirname, '..', 'views'));
        const engine = this._server.set('view engine', 'pug');
        engine.locals.pretty = true;

        // Alle Dateien im assets-Ordner verwenden
        this._server.use('/', express.static(assetsPath));

        this._server.use(bodyParser.json());
        this._server.use(bodyParser.urlencoded());

        this._server.post('/login.html', (req, res, next) => this.handlePostLogin(req, res, next));

        this._server.get('/liste',
            (req, res, next) => this.handleGetListe(req, res, next)
        );
        this._server.get('/welcome',
            (req, res, next) => this.handleGetWelcome(req, res, next)
        );
    }

    public start () {
        this._server.listen(this._port);
        console.log('HTTP Server gestartet auf Port: ' + this._port);
    }

    public get port () {
        return this._port;
    }

    // Handler-Methode
    private handleGetListe (req: express.Request, res: express.Response, next: express.NextFunction) {
        // res.send('Guten Morgen, Herr Muri');
        const filePath = path.join(__dirname, '..', 'assets', 'liste.html');
        console.log(filePath);
        res.sendFile(filePath);
    }

    private handlePostLogin (req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.email === 'test@test.at' && req.body.password === 'geheim') {
            res.redirect('/welcome');
        } else {
            res.status(404).send('404 NOT AUTHORIZED');
        }
    }

    private handleGetWelcome (req: express.Request, res: express.Response, next: express.NextFunction) {
        res.render('welcome.pug', {anrede: 'Herr', name: 'Rossi'});
    }

}