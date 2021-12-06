import { Router } from 'express';
import {
    UserAuth,
    ChangePassword,
    ResetPassword,
    SignUp
} from './Auth';
import {
    getBasicRequests_,
    postBasicRequests_
} from './Requests/BasicRequest';
import {
    getAddProperty_,
    postAddProperty_
} from './AddProperty/AddProperty';
import {
    getNewTicket_,
    postNewTicket_
} from './NewTickets/NewTickets';
import {
    applicationDetails,
    personalInformation,
    residentialHistory,
    landLordInfo,
    petInfo,
    employmentInfo,
    source,
    vechicleInfo,
    emergencyContact
} from "../routes/RenterProfile/RenterProfile";
import {
    postSearchPreferences
} from './SearchPrefernces/SearchPreferences';
import {
    postTenantAccept,
    postTenantDenial
} from './TenantAccount/TenantAccount';
import {
    postServicesAccept,
    postServicesDeny
} from './ProServicesAccount/ProServicesAccount';
import {
    postLandlordAccountAccept,
    postLandlordAccountDenial
} from './LandlordAccount/LandlordAccount';
import {
    putAccountSettingsProfileDetails,
    putAccountSettingsEmail,
    putAccountSettingsPassword,
    putAccountSettingsAdditionalSettings
} from './AccountSettings/AccountSettings'
// User-route
const authRouter = Router();
const landLordRouter = Router();
const tenantRouter = Router();
const proServicesRouter = Router();
const feedBackRouter = Router();

// Auth-Routers common for all
authRouter.get('/login', UserAuth);
authRouter.put('/change-password', ChangePassword);
authRouter.put('/reset-password', ResetPassword);
authRouter.post('/sign-up', SignUp);

// LandLord-Routers for Landlord
landLordRouter.get('/get-basic-requests', getBasicRequests_);
// landLordRouter.post('put-basic-request', postBasicRequests_);
landLordRouter.get('/get-properties', getAddProperty_);
// landLordRouter.post('/put-property', postAddProperty_);
landLordRouter.post('/post-landlord-account-accept', postLandlordAccountAccept);
landLordRouter.post('/post-landlord-account-denial', postLandlordAccountDenial);

// Feedback router common in all
feedBackRouter.get('/get-new-ticket', getNewTicket_);
// feedBackRouter.post('/put-new-ticket', postNewTicket_);

// Tenant-Routers for tenant
tenantRouter.post('/post-search-preference', postSearchPreferences);
tenantRouter.post('/post-tenant-accpet', postTenantAccept);
tenantRouter.post('/post-tenant-denial', postTenantDenial);
// tenantRouter.post('/post-tenant-denial', applicationDetails);
// tenantRouter.post('/post-tenant-denial', personalInformation);
tenantRouter.post('/post-residential-history', residentialHistory);
tenantRouter.post('/post-landlord-info', landLordInfo);
tenantRouter.post('/post-pet-info', petInfo);
tenantRouter.post('/post-employment-info', employmentInfo);
tenantRouter.post('/post-source', source);
tenantRouter.post('/post-vechicle-info', vechicleInfo);
tenantRouter.post('/post-emergency-contact', emergencyContact);
tenantRouter.put('/put-account-settings-profile-details', putAccountSettingsProfileDetails);
tenantRouter.put('/put-account-settings-email', putAccountSettingsEmail);
tenantRouter.put('/put-account-settings-password', putAccountSettingsPassword);
tenantRouter.put('/put-account-settings-additional-settings', putAccountSettingsAdditionalSettings);



// ProServices-Router for Pro-Service
proServicesRouter.post('/post-services-accpet', postServicesAccept);
proServicesRouter.post('/post-services-deny', postServicesDeny);


// Export the starting Routes
const baseRouter = Router();
baseRouter.use('/auth', authRouter)
baseRouter.use('/landlord', landLordRouter);
baseRouter.use('/proservices', proServicesRouter);
baseRouter.use('/tenant', tenantRouter);
baseRouter.use('/feedback', feedBackRouter);

export default baseRouter;
