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
