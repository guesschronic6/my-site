const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getDateFormatted() {
  const today = new Date();
  return `${
    monthNames[today.getMonth()]
  }.${today.getDay()}.${today.getFullYear()}`;
}
