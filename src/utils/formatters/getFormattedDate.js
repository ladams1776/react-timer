
export default function getFormattedDate() {

  const existingDate = new Date();

  const dateFormatted =
    existingDate.getMonth() +
    1 +
    '/' +
    existingDate.getDate().toString() +
    '/' +
    existingDate.getFullYear().toString();
  return dateFormatted;
}
