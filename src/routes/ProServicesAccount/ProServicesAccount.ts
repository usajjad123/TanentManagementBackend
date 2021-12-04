import { proServicesAccountAcceptRequest, proServicesDenialRequest } from "@shared/Types";
import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { proServicesAccountAccepted, proServicesAccountDenial } from '../../shared/Types';
import { proServicesAccountAccept, proServicesAccountDeny } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const postServicesAccept = (req: proServicesAccountAcceptRequest, res: Response) => {
    const data: proServicesAccountAccepted = req.body;
    const response = proServicesAccountAccept(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}

export const postServicesDeny = (req: proServicesDenialRequest, res: Response) => {
    const data: proServicesAccountDenial = req.body;
    const response = proServicesAccountDeny(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}