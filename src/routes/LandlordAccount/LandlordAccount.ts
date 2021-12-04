import { landlordAccountAcceptData, landlordAccountDenialData } from "@shared/Types";
import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { landlordAccountAcceptRequest, landlordAccountDenialRequest } from '../../shared/Types';
import { landLordAccountAccepted,landLordAccountDenied } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const postLandlordAccountAccept = (req: landlordAccountAcceptRequest, res: Response) => {
    const data: landlordAccountAcceptData = req.body;
    const response = landLordAccountAccepted(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}

export const postLandlordAccountDenial = (req: landlordAccountDenialRequest, res: Response) => {
    const data: landlordAccountDenialData = req.body;
    const response = landLordAccountDenied(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}