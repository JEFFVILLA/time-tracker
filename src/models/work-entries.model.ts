import type { Employee } from "./employee.model";

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
    deletedAt:       Date;
}

export interface WorkEntry {
    origin:      string;
    date:        Date;
    coordinates: Coordinates;
}

export interface Coordinates {
    latitude:  number;
    longitude: number;

}

export interface WorkEntriesPost {
    employeeId: string;
    workEntryIn?: {
        coordinates: Coordinates;
    }
    workEntryOut?: {
        coordinates: Coordinates;
    }
}


export enum WorkStatusEmployee {
    Online = "online",
    Offline = "offline",
    Pause = "pause"
}