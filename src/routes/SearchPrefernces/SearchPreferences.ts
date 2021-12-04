import { searchPreference, searchPreferenceRequest } from "@shared/Types";
import { Response } from "express";
import StatusCodes from 'http-status-codes';
import { searchPreferences } from '../../daos/Modal/Mocks';
const { OK } = StatusCodes;

export const postSearchPreferences = (req: searchPreferenceRequest, res: Response) => {

    const data: searchPreference = req.body;
    const response = searchPreferences(data);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}