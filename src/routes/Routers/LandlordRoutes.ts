import { Router } from 'express';
import { getAddProperty_, postAddProperty_ } from '../AddProperty/AddProperty';
import { postLandlordAccountAccept, postLandlordAccountDenial } from '../LandlordAccount/LandlordAccount';
import { getBasicRequests_, postBasicRequests_ } from '../Requests/BasicRequest';

export const landLordRouter = Router();

landLordRouter.get('/basic-requests', getBasicRequests_);
// landLordRouter.post('put-basic-request', postBasicRequests_);
landLordRouter.get('/properties', getAddProperty_);
// landLordRouter.post('/put-property', postAddProperty_);
landLordRouter.post('/landlord-account-accept', postLandlordAccountAccept);
landLordRouter.post('/landlord-account-denial', postLandlordAccountDenial);