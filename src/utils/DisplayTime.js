/**
 * Takes in milliseconds and formats the time into a fractional hour format
 *
 * 1.50 = 1 + .50%,
 * 1.95 = 1 + .95%
 *
 * The business need (filling out a form) requires that the format be in fractional hour format, not
 * in regular HH:MM:SS format.
 * @param {Number} milliseconds: Time in milliseconds format
 * @returns {String} in '0.00' format.
 */
export default function displayMsInFractionalHourFormat(milliseconds) {
  return (milliseconds / 1000 / 60 / 60).toFixed(2);
}
