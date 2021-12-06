import { Response } from "express";
import StatusCodes from 'http-status-codes';
import {
} from '../../shared/Types';
import {
} from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const putAccountSettingsProfileDetails = (req: , res: Response) => {
    const data:  = req.body;
    const response = (data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}