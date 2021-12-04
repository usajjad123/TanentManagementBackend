import { StringifyOptions } from "querystring"

export interface user {
  uid
  :
  string
  firstname
  :
  string
  lastname
  :
  string
  email
  :
  string
  password
  :
  string
  phoneno
  :
  string
}

export interface SignupRequest {
  body: {
    user: user
  };
}

export interface ChangePasswordRequest {
  body: {
    email: user["email"];
    password: user["password"];
    newpassword: user["password"];
  }
}

export interface ResetPasswordRequest {
  body: {
    email: user["email"];
  }
}
// Interface for allBasicRequest
// export interface basicRequest{
// body:{

// }
//   header:{

//   }
// }

// InterFace for addProperty
// export interface addProperty{
//   body:{

//   }
//   header:{

//   }

// }

export type requestsType = [{
  userID: string,
  requests: [Record<string, unknown>],
  properties: [Record<string, unknown>],
  newTicket: [Record<string, unknown>]
}]
export type renterProfileType = [{
  userID: string,
  applicationDetails: Record<string, unknown>,
  personalInformation: Record<string, unknown>,
  residentialHistory: [Record<string, unknown>],
  landLordInfo: [Record<string, unknown>],
  petInfo: [Record<string, unknown>],
  employmentInfo: [Record<string, unknown>],
  source: [Record<string, unknown>],
  vechicleInfo: [Record<string, unknown>],
  emergencyContact: [Record<string, unknown>],
}]

export interface applicationDetailsRequest {
  headers: {
    userID: renterProfileType[0]["userID"],
    applicationDetails: renterProfileType[0]["applicationDetails"]
  }
}
export interface personalInformationRequest {
  header: {
    userID: renterProfileType[0]["userID"],
    personalInformation: renterProfileType[0]["personalInformation"]
  }
}
export interface residentialHistoryRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    residentialHistory: Record<string, unknown>
  }
}
export interface landLordInfoRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    landLordInfo: Record<string, unknown>
  }
}
export interface petInfoRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    petInfo: Record<string, unknown>
  }
}
export interface employmentInfoRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    employmentInfo: Record<string, unknown>
  }
}
export interface sourceRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    source: Record<string, unknown>
  }
}
export interface vechicleInfoRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    vechicleInfo: Record<string, unknown>
  }
}
export interface emergencyContactRequest {
  body: {
    userID: renterProfileType[0]["userID"],
    emergencyContact: Record<string, unknown>
  }
}

export type searchPreference = {
  profileLink: string,
  location: string,
  moveInDate: string,
  noOfOccupants: string,
  beds: string,
  paths: string,
  perMonthPrice: string,
  rentalType: string,
  size: string,
  petAllowed: boolean,
  furnished: boolean
}

export type searchPreferenceRequest = {
  body: {
    profileLink: searchPreference["profileLink"],
    location: searchPreference["location"],
    moveInDate: searchPreference["moveInDate"],
    noOfOccupants: searchPreference["noOfOccupants"],
    beds: searchPreference["beds"],
    paths: searchPreference["paths"],
    perMonthPrice: searchPreference["perMonthPrice"],
    rentalType: searchPreference["rentalType"],
    size: searchPreference["size"],
    petAllowed: searchPreference["petAllowed"],
    furnished: searchPreference["furnished"],
  }
}

export type tenantAccountAcceptData = {
  location: string,
  features: Array<string>,
  beds: string,
  baths: string,
  perMonth: string,
  petsAllowed: boolean,
  furnish: boolean
}
export type tenantAccountDenialData = {
  email: string,
}

export type tenantAccountAcceptRequest = {
  body: {
    location: tenantAccountAcceptData["location"],
    features: tenantAccountAcceptData["features"],
    beds: tenantAccountAcceptData["beds"],
    baths: tenantAccountAcceptData["baths"],
    perMonth: tenantAccountAcceptData["perMonth"],
    petsAllowed: tenantAccountAcceptData["petsAllowed"],
    furnish: tenantAccountAcceptData["furnish"]
  }
}
export type tenantAccountDenialRequest = {
  body: {
    email: tenantAccountDenialData["email"]
  }
}

export type proServicesAccountAccepted = {
  services: Array<string>,
  connection: string,
  businessProfile: boolean,
  businessName: Record<string, unknown>,
  emailAndPhone: Array<Record<string, unknown>>,
  busniessAddress: Record<string, unknown>,
  websiteSubdomain: string,
}

export type proServicesAccountDenial = {
  services: Array<string>,
  connection: string,
  businessProfile: boolean,
}

export type proServicesAccountAcceptRequest = {
  body: {
    services: proServicesAccountAccepted["services"],
    connection: proServicesAccountAccepted["connection"],
    businessProfile: proServicesAccountAccepted["businessProfile"],
    businessName: proServicesAccountAccepted["businessName"],
    emailAndPhone: proServicesAccountAccepted["emailAndPhone"],
    busniessAddress: proServicesAccountAccepted["busniessAddress"],
    websiteSubdomain: proServicesAccountAccepted["websiteSubdomain"]
  }
}

export type proServicesDenialRequest = {
  body: {
    services: proServicesAccountDenial["services"],
    connection: proServicesAccountDenial["connection"],
    businessProfile: proServicesAccountDenial["businessProfile"],
  }
}


export type landlordAccountDenialRequest = {
  body: {
    propertyInfo: {
      propertyType: string,
      address: string,
      marketRent: string
    },
    propertyOccupiedConfirmation: boolean,
    vacantPropertyInfo: {
      listingTitle: string,
      size: string,
      yearBuild: string,
      baths: string,
      beds: string,
      leaseDuration: string,
      dataAvailable: string,
      marketRentPerMonth: string,
      marketDescription: string
    }
  }
}
export type landlordAccountDenialData = {
  propertyInfo: {
    propertyType: string,
    address: string,
    marketRent: string
  },
  propertyOccupiedConfirmation: boolean,
  vacantPropertyInfo: {
    listingTitle: string,
    size: string,
    yearBuild: string,
    baths: string,
    beds: string,
    leaseDuration: string,
    dataAvailable: string,
    marketRentPerMonth: string,
    marketDescription: string
  }
}
export type landlordAccountAcceptRequest = {
  body: {
    propertyInfo: {
      propertyType: string,
      address: string,
      marketRent: string
    },
    propertyOccupiedConfirmation: boolean,
    tenantContact: {
      tenantFirstName: string,
      tenantLastName: string,
      tenantEmail: string,
      seeLeaseInfo: boolean
    },
    leaseInfo: {
      leaseType: string,
      startDate: string,
      endDate: string,
      rentMonthly: string,
      deposit: string
    }
  }
}
export type landlordAccountAcceptData = {
  propertyInfo: {
    propertyType: string,
    address: string,
    marketRent: string
  },
  propertyOccupiedConfirmation: boolean,
  tenantContact: {
    tenantFirstName: string,
    tenantLastName: string,
    tenantEmail: string,
    seeLeaseInfo: boolean
  },
  leaseInfo: {
    leaseType: string,
    startDate: string,
    endDate: string,
    rentMonthly: string,
    deposit: string
  }
}

export type accountSettingsProfileDetailsRequest = {
  body: {
    profileDetails: {
      firstName: string,
      middleName: string,
      lastName: string,
      companyName: string,
      displayAsCompany: boolean,
    }
  }
}
export type accountSettingsEmailRequest = {
  body: { email: string }
}
export type accountSettingsPasswordRequest = {
  body: { password: string }
}
export type accountSettingsAdditionalSettingsRequest = {
  body: {
    additionalSettings: {
      timeZone: string,
      currency: string,
      date: string,
      timeformat: string,
      measurement: string,
      parking: string
    }
  }
}
export type accountSettingsData = {
  profileDetails: {
    firstName: string,
    middleName: string,
    lastName: string,
    companyName: string,
    displayAsCompany: boolean,
  },
  email: string,
  password: string,
  additionalSettings: {
    timeZone: string,
    currency: string,
    date: string,
    timeformat: string,
    measurement: string,
    parking: string
  }
}
export type accountSettingsProfileDetailsData = {
  profileDetails: {
    firstName: string,
    middleName: string,
    lastName: string,
    companyName: string,
    displayAsCompany: boolean,
  }
}
export type accountEmailData = {
  email: string
}
export type accountSettingsPasswordData = {
  password: string
}
export type accountSettingsAdditionalSettingsData = {
  additionalSettings: {
    timeZone: string,
    currency: string,
    date: string,
    timeformat: string,
    measurement: string,
    parking: string
  }
}
