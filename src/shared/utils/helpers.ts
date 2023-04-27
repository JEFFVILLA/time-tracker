import {addSeconds, format, set} from 'date-fns';

export const workTimeHelper = (seconds: number | any) => {
    const today = new Date();
    const dateInitial = set(today, {hours: 0, minutes: 0, seconds: 0, milliseconds: 0});
    const helperDate = addSeconds(dateInitial, seconds);
    return format(helperDate, 'HH:mm:ss');   
}