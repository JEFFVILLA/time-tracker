import { defineStore } from "pinia";
import type { WorkEntries, WorkEntriesPost } from '../models/work-entries.model';
import { WorkEntriesService } from "@/services/work-entries-endpoint";


export const useStore = defineStore({
    id: "store",
    state: () => ({
        workEntries: [] as WorkEntries[],
    }),
    getters: {
        getFullNameEmployee(state) {
            if (state.workEntries.length > 0){
                return state.workEntries[0].employee.firstName + ' ' + state.workEntries[0].employee.lastName;
            }
        },
        getWorkStatusEmployee(state) {
            if (state.workEntries.length > 0){
                return state.workEntries[0].employee.workStatus;
            }
        },
        getWorkTime(state) {
            if (state.workEntries.length > 0){
                return state.workEntries[0].workedSeconds;
            }
        }
    },
    actions: {
        async getWorkEntries() {
            try
            {
             this.workEntries = await WorkEntriesService.getWorkEntries();
            }
            catch(error){
                console.log(error);
            }
        },
        async postClockIn(instaceWorkIn: WorkEntriesPost) {
            try{
                const workEntry =  await WorkEntriesService.postWorkEntriesClockIn(instaceWorkIn);
                this.workEntries = [workEntry];
            }
            catch(error){
                console.log(error);
            }
        },

        async postClockOut(instaceWorkOut: WorkEntriesPost) {
            try{
                const workEntry =  await WorkEntriesService.postWorkEntriesClockOut(instaceWorkOut);
                this.workEntries = [workEntry];
            }
            catch(error){
                console.log(error);
            }
         }

    },
});