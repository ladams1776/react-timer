import moment from 'moment-timezone';

const myTimezone = 'America/New_York';
const myDatetimeFormat = 'YYYY-MM-DDThh:mm:ss';

export default function getCurrentDateTimeEstFormat(): string  {
  return moment.tz(new Date(), myTimezone).format(myDatetimeFormat);
}
