# akan-name-generator

## Description
A small web app that calculates the day of the week a user was born
and assigns them the traditional Akan day-name for that day, based on
their selected gender. Among the Akan people of Ghana, a child's given
name is traditionally determined by the day of the week they were
born — this project brings that naming system to the browser.

## Author
Josh

## Setup Instructions
1. Clone or download this repository.
2. Open `index.html` in any modern web browser — no build step or
   server is required.
3. Enter a birth day, month, and year, select a gender, and click
   **Find my name**.

## Live Site
`https://kuriajosh777.github.io/akan-name-generator//`


## BDD (Behavior-Driven Development)

**Feature: Find an Akan day-name from a birthdate**

- **Given** a user is on the Akan Day-Name Finder page
  **When** they enter a valid day, month, and year and select a gender
  **Then** the app calculates the day of the week for that date and
  displays the matching Akan name.

- **Given** a user submits the form
  **When** the day is outside 1–31, the month is outside 1–12, the
  date does not exist on the calendar (e.g. 30 February), or no
  gender is selected
  **Then** the app shows an alert and does not display a result.

- **Given** a result has been displayed
  **When** the user reads the result panel
  **Then** they see the day of the week they were born on and the
  corresponding Akan name for their gender.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+, vanilla — no frameworks)
- Google Fonts (Fraunces, Inter, JetBrains Mono)

## How It Works
- `script.js` implements **Zeller's congruence** to calculate the day
  of the week from a given date, using the century (`CC`), year within
  century (`YY`), month (`MM`), and day (`DD`) with the modulus
  operator, exactly as specified in the project brief.
- Input is validated before calculation: day range, month range, and
  whether the date actually exists on the calendar (accounting for
  month lengths and leap years).
- The calculated day of the week is matched against an array of Akan
  day-names, indexed by day and gender.

## Contact
For questions about this project, please open an issue on the
GitHub repository.

## License
This project is released under the MIT License. See `LICENSE` for
details.
