import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { settingsPaymentsStripeData, settingsPaymentsStripeRequest } from '../../shared/Types';
import {
    settingsPaymentsStripe
} from '../../daos/Modal/Mocks';
import { Router } from 'express';

const { OK } = StatusCodes;

export const paymentStripe = (req: settingsPaymentsStripeRequest, res: Response) => {
    const data: settingsPaymentsStripeData = req.body;
    const userID: string = req.body.userID
    const response = settingsPaymentsStripe(userID, data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}

const tenantRouter = Router();
tenantRouter.post('/settings-payment-stripe', paymentStripe);
