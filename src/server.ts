import express, { RequestHandler, Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';




export default class Server {
	app: express.Express;

	constructor() {
		this.app = express();
		this.middelware(cors());
		this.middelware(bodyParser.urlencoded({ extended: false }));
		this.middelware(bodyParser.json());
	}

	public middelware(...middelware: RequestHandler[]): void {
		this.app.use(...middelware);
	}

	public route(router: Router): void {
		this.app.use(router);
	}

	public run(port: number): void {
		this.app.listen(port, () => {
			console.log(`http://localhost:${port}`);
		});
	}
}
