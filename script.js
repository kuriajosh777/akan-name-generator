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

// ---------------------------------------------
// Zeller's congruence
// Returns 0 = Sunday, 1 = Monday, ... 6 = Saturday
// ---------------------------------------------
function calculateDayOfWeek(day, month, year) {
  let m = month;
  let y = year;

  // January and February are treated as months 13 and 14
  // of the previous year in Zeller's congruence.
  if (m < 3) {
    m += 12;
    y -= 1;
  }

  const CC = Math.floor(y / 100); // century
  const YY = y % 100; // year within century
  const MM = m;
  const DD = day;

  // h: 0 = Saturday, 1 = Sunday, 2 = Monday, ... 6 = Friday
  const h =
    (DD +
      Math.floor((13 * (MM + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) +
      5 * CC) %
    7;

  // Normalize so 0 = Sunday ... 6 = Saturday, matching AKAN_NAMES.
  return (h + 6) % 7;
}

// ---------------------------------------------
// Name lookup
// ---------------------------------------------
function getAkanName(day, month, year, gender) {
  const dayIndex = calculateDayOfWeek(day, month, year);
  const entry = AKAN_NAMES[dayIndex];
  const name = gender === "male" ? entry.male : entry.female;
  return { dayIndex, dayName: entry.day, name };
}

// ---------------------------------------------
// UI wiring
// ---------------------------------------------
const form = document.getElementById("akan-form");
const resultBox = document.getElementById("result");
const resultDayEl = document.getElementById("result-day");
const resultNameEl = document.getElementById("result-name");
const resultNoteEl = document.getElementById("result-note");
