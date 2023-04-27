import type { WorkEntries, WorkEntriesIn, WorkEntriesOut } from '../models/work-entries.model';
import sesameApiService from './axios-endpoint';



class WorkEntriesAxios {


    public getWorkEntries = async (): Promise<WorkEntries[]> => {
            const { data } = await sesameApiService.get("");
            const workEntries = this.sortWorkEntriesByDate([...data.data]);
            return workEntries;
    };

    public postWorkEntriesClockIn = async (clockIn: WorkEntriesIn): Promise<WorkEntries> => {
            const { data } = await sesameApiService.post("/clock-in", clockIn);
            return data.data;
    };

    public postWorkEntriesClockOut = async (clockOut: WorkEntriesOut): Promise<WorkEntries> => {
            const { data } = await sesameApiService.post("/clock-out", clockOut);
            return data.data;
    };


    protected  sortWorkEntriesByDate = (workEntries: WorkEntries[]) => {
        workEntries.sort((a: WorkEntries, b: WorkEntries) => {
            return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
        return workEntries;
    };
}

export const WorkEntriesService = new WorkEntriesAxios();