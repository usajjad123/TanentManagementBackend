import { tenantAccountDenialRequest, tenantAccountAcceptRequest } from "@shared/Types";
import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { tenantAccountAcceptData, tenantAccountDenialData } from '../../shared/Types';
import { tenantDenial,tenantAccepted } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const postTenantAccept = (req: tenantAccountAcceptRequest, res: Response) => {
    const data: tenantAccountAcceptData = req.body;
    const response = tenantAccepted(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}

export const postTenantDenial = (req: tenantAccountDenialRequest, res: Response) => {
    const data: tenantAccountDenialData = req.body;
    const response = tenantDenial(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}