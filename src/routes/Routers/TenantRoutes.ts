import { Router } from 'express';
import { putAccountSettingsAdditionalSettings, putAccountSettingsEmail, putAccountSettingsPassword, putAccountSettingsProfileDetails } from "../AccountSettings/AccountSettings";
import { applicationDetails, emergencyContact, employmentInfo, landLordInfo, personalInformation, petInfo, residentialHistory, source, vechicleInfo } from "../RenterProfile/RenterProfile";
import { postSearchPreferences } from "../SearchPrefernces/SearchPreferences";
import { postTenantAccept, postTenantDenial } from "../TenantAccount/TenantAccount";


export const tenantRouter = Router();
tenantRouter.post('/search-preference', postSearchPreferences);
tenantRouter.post('/tenant-accpet', postTenantAccept);
tenantRouter.post('/tenant-denial', postTenantDenial);
// tenantRouter.post('/post-tenant-denial', applicationDetails);
// tenantRouter.post('/post-tenant-denial', personalInformation);
tenantRouter.post('/residential-history', residentialHistory);
tenantRouter.post('/landlord-info', landLordInfo);
tenantRouter.post('/pet-info', petInfo);
tenantRouter.post('/employment-info', employmentInfo);
tenantRouter.post('/source', source);
tenantRouter.post('/vechicle-info', vechicleInfo);
tenantRouter.post('/emergency-contact', emergencyContact);
tenantRouter.put('/account-settings-profile-details', putAccountSettingsProfileDetails);
tenantRouter.put('/account-settings-email', putAccountSettingsEmail);
tenantRouter.put('/account-settings-password', putAccountSettingsPassword);
tenantRouter.put('/account-settings-additional-settings', putAccountSettingsAdditionalSettings);