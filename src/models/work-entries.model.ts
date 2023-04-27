export interface WorkEntries {
    id:              string;
    workCheckTypeId: null;
    employee:        Employee;
    workEntryType:   string;
    workEntryIn:     WorkEntry;
    workEntryOut:    WorkEntry;
    workedSeconds:   number;
    createdAt:       Date;
    updatedAt:       Date;
    deletedAt:       null;
}

export interface Employee {
    id:                              string;
    firstName:                       string;
    lastName:                        string;
    email:                           string;
    workStatus:                      string;
    imageProfileURL:                 null;
    code:                            number;
    pin:                             number;
    phone:                           null;
    company:                         Company;
    gender:                          null;
    contractId:                      null;
    nid:                             string;
    identityNumberType:              string;
    ssn:                             null;
    pricePerHour:                    number;
    accountNumber:                   null;
    dateOfBirth:                     null;
    customFields:                    any[];
    createdAt:                       Date;
    updatedAt:                       Date;
    status:                          string;
    children:                        null;
    disability:                      null;
    address:                         null;
    postalCode:                      null;
    city:                            null;
    province:                        null;
    country:                         null;
    nationality:                     null;
    personalMail:                    null;
    maritalStatus:                   null;
    emergencyPhone:                  null;
    description:                     null;
    salaryRange:                     null;
    studyLevel:                      null;
    professionalCategoryCode:        null;
    professionalCategoryDescription: null;
    bic:                             null;
}

export interface Company {
    id:                string;
    name:              string;
    language:          string;
    notificationEmail: string;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface WorkEntry {
    origin:      string;
    date:        Date;
    coordinates: Coordinates;
}

export interface Coordinates {
    latitude:  null;
    longitude: null;

}

export interface WorkEntriesIn {
    employeeId: string;
    workEntryIn: {
        coordinates: Coordinates;
    }
}

export interface WorkEntriesOut {
    employeeId: string;
    workEntryOut: {
        coordinates: Coordinates;
    }
}

export enum WorkStatusEmployee {
    Online = "online",
    Offline = "offline",
    Pause = "pause"
}