import {
    requestsType,
    renterProfileType,
    searchPreference,
    tenantAccountAcceptData,
    tenantAccountDenialData,
    proServicesAccountAccepted,
    proServicesAccountDenial,
    landlordAccountAcceptData,
    landlordAccountDenialData,
    accountSettingsData,
    accountEmailData,
    accountSettingsPasswordData,
    propertyIncomeDataType,
    propertyIncomeDataTypeArr,
} from "../../shared/Types";


const basicRequests: requestsType =
    [
        {
            userID: '444',
            requests: [{
                prop1: "run",
                prop2: 'see'
            }],
            properties: [
                {
                    propertyone: 'banglo',
                    propertytwo: 'flat'
                },
            ],
            newTicket: [
                {
                    ticket: "Ticket1",
                    ticket2: "Ticket2"
                }
            ]
        },
    ]


export const getBasicRequests = (_userID: string) => {
    const response = basicRequests.find((req) => {
        if (_userID === req.userID) {
            return req.requests;
        }
    })
    return response;
}

export const postBasicRequests = (_userID: string, requestsPayload: Record<string, unknown>) => {
    const response = basicRequests.find((val) => {
        if (val.userID === _userID) {
            return val;
        }
    })
    response?.requests.push(requestsPayload)
    return response;
}

export const getAddProperty = (_userID: string) => {
    const response = basicRequests.find((req) => {
        if (_userID === req.userID) {
            return req.properties
        }
    })
    return response;
}

export const postAddProperty = (_userID: string, requestsPayload: Record<string, unknown>) => {
    const response = basicRequests.find((val) => {
        if (val.userID === _userID) {
            return val;
        }
    });
    response?.properties.push(requestsPayload);
    return response;
}

export const getNewTicket = (_userID: string) => {
    const response = basicRequests.find((req) => {
        if (_userID === req.userID) {
            return req.requests
        }
    })
    return response;
}

export const postNewTicket = (_userID: string, requestsPayload: Record<string, unknown>) => {
    const response = basicRequests.find((val) => {
        if (val.userID === _userID) {
            return val;
        }
    });
    response?.newTicket.push(requestsPayload);
}

const renterProfile: renterProfileType = [{
    userID: 'user123',
    // Updates existing dataset
    applicationDetails: {
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        phoneNo: '',
        profileUrl: ''
    },
    personalInformation: {
        ssn: '',
        driverLicesnse: '',
        driverLicesnseStateReligion: '',
        aboutMe: ''
    },
    // Creates new dataset
    residentialHistory: [
        {
            moveInDate: '',
            moveOutDate: '',
            streetAddress: '',
            unitAp: '',
            country: '',
            city: '',
            zip: '',
            stateReligion: '',
            monthlyRent: '',
        },
    ],
    landLordInfo: [
        {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            aboutMe: '',
        }
    ],
    petInfo: [
        {
            name: '',
            type: '',
            breed: '',
            weightInLbs: '',
            imgUrl: ''
        }
    ],
    employmentInfo: [
        {
            startData: '',
            endData: '',
            companyName: '',
            position: '',
            monthlyIncome: '',
            streetAddress: '',
            city: '',
            country: '',
            zip: '',
            stateReligion: '',
            officalNo: '',
            workEmail: '',
            workPhone: '',
            supervisorInfo: {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            },
            additionalEmploymentIncomeDetails: ''
        },
    ]
    ,
    source: [
        {
            incomeSource: '',
            monthlyIncome: ''
        }
    ],
    vechicleInfo: [
        {
            type: '',
            maker: '',
            model: '',
            yearMade: '',
            color: '',
            licencePlate: '',
        }
    ],
    emergencyContact: [
        {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            relationship: '',
            details: ''
        }
    ]
}
]

export const updateApplicationDetails = (_id: string, applcationDetailsPayload: Record<string, unknown>): renterProfileType => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            val.applicationDetails = applcationDetailsPayload
        }
    });
    for (const key in response?.personalInformation) {
        response!.personalInformation[key] = applcationDetailsPayload[key];
    }
    return renterProfile;
}

export const updatePersonalInformation = (_id: string, personalInformationPayload: Record<string, unknown>): renterProfileType => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val.personalInformation
        }
    });
    for (const key in response?.personalInformation) {
        response!.personalInformation[key] = personalInformationPayload[key];
    }
    return renterProfile;
}

export const postResidentialHistory = (_id: string, residentialHistoryPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.residentialHistory.push(residentialHistoryPayload);
    return response!;
}

export const postLandLordInfo = (_id: string, landLordInfoPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.landLordInfo.push(landLordInfoPayload);
    return response!;
}

export const postPetInfo = (_id: string, petInfoPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.petInfo.push(petInfoPayload);
    return response!;
}

export const postEmploymentInfo = (_id: string, employmentInfoPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.employmentInfo.push(employmentInfoPayload);
    return response!;
}

export const postSource = (_id: string, sourcePayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.source.push(sourcePayload);
    return response!;
}

export const postVechicleInfo = (_id: string, vechicleInfoPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            return val;
        }
    });
    response?.vechicleInfo.push(vechicleInfoPayload);
    return response!;
}

export const postEmergencyContact = (_id: string, emergencyContactPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = renterProfile.find((val) => {
        (val.userID === _id)
        {
            val.emergencyContact.push(emergencyContactPayload);
        }
    });
    response?.emergencyContact.push(emergencyContactPayload);
    return response!;
}

let searchPreferencesData: searchPreference = {
    profileLink: '',
    location: '',
    moveInDate: '',
    noOfOccupants: '',
    beds: '',
    paths: '',
    perMonthPrice: '',
    rentalType: '',
    size: '',
    petAllowed: false,
    furnished: false
}

export const searchPreferences = (data: searchPreference): searchPreference => {
    searchPreferencesData = data;
    return searchPreferencesData
}

let tenantAcceptedData: tenantAccountAcceptData = {
    location: "",
    features: [],
    beds: "",
    baths: "",
    perMonth: "",
    petsAllowed: false,
    furnish: false
};
let tenantDenialData: tenantAccountDenialData = {
    email: ''
};

export const tenantDenial = (data: tenantAccountDenialData): tenantAccountDenialData => {
    tenantDenialData = data;
    return tenantDenialData;
}

export const tenantAccepted = (data: tenantAccountAcceptData): tenantAccountAcceptData => {
    tenantAcceptedData = data;
    return tenantAcceptedData;
}

let proServicesAccountAcceptedData: proServicesAccountAccepted = {
    services: [],
    connection: "",
    businessProfile: true,
    businessName: {
        firstName: "",
        lastName: ""
    },
    emailAndPhone: [
        {
            email: '',
            displayPublicaly: false
        },
        {
            phone: '',
            displayPublicaly: false
        }
    ],
    busniessAddress: {
        address: '',
        showfullAddress: false,
        showCityandState: false
    },
    websiteSubdomain: ""
}
export const proServicesAccountAccept = (data: proServicesAccountAccepted): proServicesAccountAccepted => {
    proServicesAccountAcceptedData = data;
    return proServicesAccountAcceptedData;
}
let proServicesAccountDenialData: proServicesAccountDenial = {
    services: [],
    connection: '',
    businessProfile: false
}
export const proServicesAccountDeny = (data: proServicesAccountDenial): proServicesAccountDenial => {
    proServicesAccountDenialData = data;
    return proServicesAccountDenialData;
}

let landlordAccountAcceptData_: landlordAccountAcceptData = {
    propertyInfo: {
        propertyType: "",
        address: "",
        marketRent: ""
    },
    propertyOccupiedConfirmation: true,
    tenantContact: {
        tenantFirstName: "",
        tenantLastName: "",
        tenantEmail: "",
        seeLeaseInfo: false
    },
    leaseInfo: {
        leaseType: "",
        startDate: "",
        endDate: "",
        rentMonthly: "",
        deposit: ""
    }
}

let landlordAccountDenialData_: landlordAccountDenialData = {
    propertyInfo: {
        propertyType: "",
        address: "",
        marketRent: ""
    },
    propertyOccupiedConfirmation: false,
    vacantPropertyInfo: {
        listingTitle: "",
        size: "",
        yearBuild: "",
        baths: "",
        beds: "",
        leaseDuration: "",
        dataAvailable: "",
        marketRentPerMonth: "",
        marketDescription: ""
    }
}
export const landLordAccountAccepted = (data: landlordAccountAcceptData): Record<string, unknown> => {
    landlordAccountAcceptData_ = data;
    return landlordAccountAcceptData_;
}
export const landLordAccountDenied = (data: landlordAccountDenialData): Record<string, unknown> => {
    landlordAccountDenialData_ = data;
    return landlordAccountDenialData_;
}

const accountSettings: accountSettingsData = {
    profileDetails: {
        firstName: '',
        middleName: '',
        lastName: '',
        companyName: '',
        displayAsCompany: false,
    },
    email: '',
    password: '',
    additionalSettings: {
        timeZone: '',
        currency: '',
        date: '',
        timeformat: '',
        measurement: '',
        parking: ''
    }
}

export const accountSettingsUpdateProfileDetails = (data: any): Record<string, unknown> => {
    const obj: any = accountSettings.profileDetails
    for (const key in accountSettings?.profileDetails) {
        obj[key] = data[key];
    }
    accountSettings.profileDetails = obj;
    return accountSettings.profileDetails;
}
export const accountSettingsUpdateEmail = (data: accountEmailData): string => {
    accountSettings.email = data.email;
    return accountSettings.email;
}
export const accountSettingsUpdatePassword = (data: accountSettingsPasswordData): string => {
    accountSettings.password = data.password;
    return accountSettings.password;
}
export const accountSettingsUpdateAdditionalSettings = (data: any): Record<string, unknown> => {
    const obj: any = accountSettings.additionalSettings
    for (const key in accountSettings?.profileDetails) {
        obj[key] = data[key];
    }
    accountSettings.additionalSettings = obj;
    return accountSettings.additionalSettings;
}

// const maintenanceSettingsData = {
//     recurringServiceSettings: {
//         day: ''
//     },
//     privacySettings: {
//         showassignedtenanttoservicepro:true
//     }
// }

const propertyIncome: propertyIncomeDataTypeArr = [
    {
        userID: '444',
        subCategory: 'data',
        due: 'up to date',
        amount: '5000',
        markAsPaid: '5000',
        payer: 'rao',
        lease: 'not alloted',
        details: 'not found',
        uploadFile: 'https://notfound@gmail.com'
    }
]
const updatePropertyIncome = (userID: string, dataPayload: any): Array<Record<string, unknown>> => {
    const response = propertyIncome.find((val) => {
        if (val.userID === userID) {
            return val;
        }
    });
    for (let i = 0; i < propertyIncome.length; i++) {
        if (propertyIncome[i].userID === userID) {
            let key: any;
            for (key in dataPayload) {
                propertyIncome[key] = dataPayload[key]
            }
        }
    }
    return propertyIncome;
}

updatePropertyIncome('444', {
    userID: '444',
    subCategory: 'new data',
    due: 'new up to date',
    amount: ' new 8000',
    markAsPaid: 'new 6000',
    payer: 'new rao',
    lease: 'new not alloted',
    details: 'new not found',
    uploadFile: 'new https://notfound@gmail.com'
})