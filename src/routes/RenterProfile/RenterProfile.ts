import { Response } from "express";
import { applicationDetailsRequest, personalInformationRequest, residentialHistoryRequest, landLordInfoRequest, petInfoRequest, employmentInfoRequest, sourceRequest, vechicleInfoRequest, emergencyContactRequest } from '../../shared/Types';
import { updateApplicationDetails, updatePersonalInformation, postResidentialHistory, postLandLordInfo, postPetInfo, postEmploymentInfo, postSource, postEmergencyContact, postVechicleInfo } from '../../daos/Modal/Mocks';
import StatusCodes from 'http-status-codes';
const { OK } = StatusCodes;

export const applicationDetails = (req: applicationDetailsRequest, res: Response) => {
    const id: string = req.headers.userID;
    const payload: Record<string, unknown> = req.headers.applicationDetails;
    const response = updateApplicationDetails(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const personalInformation = (req: personalInformationRequest, res: Response) => {
    const id: string = req.header.userID;
    const payload: Record<string, unknown> = req.header.personalInformation;
    const response = updatePersonalInformation(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const residentialHistory = (req: residentialHistoryRequest, res: Response) => {
    const id: string = req.body.userID;
    console.log(id,'id')
    const payload: Record<string, unknown> = req.body.residentialHistory;
    const response = postResidentialHistory(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const landLordInfo = (req: landLordInfoRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.landLordInfo;
    const response = postLandLordInfo(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const petInfo = (req: petInfoRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.petInfo;
    const response = postPetInfo(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const employmentInfo = (req: employmentInfoRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.employmentInfo;
    const response = postEmploymentInfo(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const source = (req: sourceRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.source;
    const response = postSource(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const vechicleInfo = (req: vechicleInfoRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.vechicleInfo;
    const response = postVechicleInfo(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}
export const emergencyContact = (req: emergencyContactRequest, res: Response) => {
    const id: string = req.body.userID;
    const payload: Record<string, unknown> = req.body.emergencyContact;
    const response = postEmergencyContact(id, payload);
    res.send(JSON.stringify(response))
    res.status(OK).end();
}