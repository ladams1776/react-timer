import moment from 'moment-timezone';

export default function getCurrentDateTimeEstFormat() {
  const myTimezone = "America/New_York";
  const myDatetimeFormat = "YYYY-MM-DDThh:mm:ss";
  return moment.tz(new Date(), myTimezone).format(myDatetimeFormat);
}
