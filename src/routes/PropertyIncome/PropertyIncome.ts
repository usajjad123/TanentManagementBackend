import { Response } from "express";
import StatusCodes from 'http-status-codes';
import {
    propertyIncomeRequest,
    propertyIncomeDataType
} from '../../shared/Types';
import { updatePropertyIncome } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const putAccountSettingsProfileDetails = (req: propertyIncomeRequest, res: Response) => {
    const data: propertyIncomeDataType = req.body;
    const userID: string = req.body.userID;
    const response =   updatePropertyIncome(userID,data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}