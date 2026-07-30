// ---------------------------------------------
// Data: Akan day-names
// Index 0 = Sunday ... 6 = Saturday, matching
// the order Zeller's congruence is normalized to below.
// ---------------------------------------------
const AKAN_NAMES = [
  { day: "Sunday", male: "Kwasi", female: "Akosua" },
  { day: "Monday", male: "Kwadwo", female: "Adwoa" },
  { day: "Tuesday", male: "Kwabena", female: "Abenaa" },
  { day: "Wednesday", male: "Kwaku", female: "Akua" },
  { day: "Thursday", male: "Yaw", female: "Yaa" },
  { day: "Friday", male: "Kofi", female: "Afua" },
  { day: "Saturday", male: "Kwame", female: "Ama" },
];

// ---------------------------------------------
// Validation
// ---------------------------------------------
function isValidInput(day, month, year, gender) {
  if (!Number.isInteger(day) || day < 1 || day > 31) return false;
  if (!Number.isInteger(month) || month < 1 || month > 12) return false;
  if (!Number.isInteger(year) || year < 1) return false;
  if (gender !== "male" && gender !== "female") return false;

  // Reject dates that don't exist, e.g. 31 April, 30 Feb, 29 Feb on a non-leap year.
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > daysInMonth) return false;

  return true;
}