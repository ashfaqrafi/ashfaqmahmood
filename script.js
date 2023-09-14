document.addEventListener("DOMContentLoaded", function () {
  const numberElement = document.getElementById("yearlyNumber");
  let currentYear = new Date().getFullYear();
  let currentDate = new Date();
  let marchFirst = new Date(currentYear, 2, 1); // Month is 0-indexed, so 2 is March.

  // Calculate the increments since March 2016.
  let increments = currentYear - 2016;

  if (currentDate < marchFirst) {
    increments--; // If current date is before March 1st of this year, subtract one increment.
  }

  if (increments < 0) increments = 0; // If before March 2016, display 0.

  numberElement.textContent = increments;
});

document.addEventListener("DOMContentLoaded", function () {
  const numberElement = document.getElementById("projectNumber");
  let currentYear = new Date().getFullYear();
  let currentDate = new Date();
  let marchFirst = new Date(currentYear, 2, 1); // Month is 0-indexed, so 2 is March.

  // Calculate the increments since March 2016.
  let increments = currentYear - 2016;

  if (currentDate < marchFirst) {
    increments--; // If current date is before March 1st of this year, subtract one increment.
  }

  if (increments < 0) increments = 0; // If before March 2016, display 0.

  numberElement.textContent = increments + 23;
});
