import moment from 'moment-timezone';

export default function getCurrentDateTimeEstFormat() {
  const myTimezone = "America/Toronto";
  const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a z";
  const myDatetimeString = moment(new Date()).tz(myTimezone).format(myDatetimeFormat);

  return myDatetimeString ;
}
