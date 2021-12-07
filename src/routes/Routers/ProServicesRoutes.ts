import { Router } from 'express';
import { postServicesAccept, postServicesDeny } from '../ProServicesAccount/ProServicesAccount';

export const proServicesRouter = Router();

proServicesRouter.post('/services-accpet', postServicesAccept);
proServicesRouter.post('/services-deny', postServicesDeny);