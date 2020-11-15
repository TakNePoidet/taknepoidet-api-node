import Server from './server';
import { APP_SERVER_PORT } from './config';
import { useApiRouter } from './app/router';

const server = new Server();

useApiRouter(server);

server.run(APP_SERVER_PORT);
