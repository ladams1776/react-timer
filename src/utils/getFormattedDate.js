/**
 * Take in a regular date and format it into a more readable format:
 *
 * @param {Date} taskDate: 2019-11-17T17:38:50.575Z
 * @returns 11/17/2019
 */
export default function getFormattedDate(taskDate) {
  const existingDate = new Date(taskDate);
  const dateFormatted =
    existingDate.getMonth() +
    1 +
    '/' +
    existingDate.getDate().toString() +
    '/' +
    existingDate.getFullYear().toString();
  return dateFormatted;
}
