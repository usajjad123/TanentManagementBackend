import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { accountSettingsProfileDetailsRequest, accountSettingsEmailRequest, accountSettingsPasswordRequest, accountSettingsProfileDetailsData, accountEmailData, accountSettingsPasswordData, accountSettingsAdditionalSettingsData, accountSettingsAdditionalSettingsRequest } from '../../shared/Types';
import { } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const putAccountSettingsProfileDetails = (req: accountSettingsProfileDetailsRequest, res: Response) => {
    const data: accountSettingsProfileDetailsData = req.body;
    const response = (data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const putAccountSettingsEmail = (req: accountSettingsEmailRequest, res: Response) => {
    const data: accountEmailData = req.body;
    const response = (data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const putAccountSettingsPassword = (req: accountSettingsPasswordRequest, res: Response) => {
    const data: accountSettingsPasswordData = req.body;
    const response = (data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const putAccountSettingsAdditionalSettings = (req: accountSettingsAdditionalSettingsRequest, res: Response) => {
    const data: accountSettingsAdditionalSettingsData = req.body;
    const response = (data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}