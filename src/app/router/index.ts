import { Router } from 'express';
import Server from '@/server';
import apiRouter from './api';

export function useApiRouter(server: Server): void {
	server.route(Router().use('/method', apiRouter));
}

export default {};
