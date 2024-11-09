const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const teens = [
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const tens = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const units = [
  "",
  "Thousand",
  "Million",
  "Billion",
  "Trillion",
  "Quadrillion",
  "Quintillion",
  "Sextillion",
  "Septillion",
  "Octillion",
  "Nonillion",
  "Decillion",
  "Undecillion",
  "Duodecillion",
  "Tredecillion",
  "Quattuordecillion",
  "Quindecillion",
  "Sedecillion",
  "Septendecillion",
  "Octodecillion",
  "Novendecillion",
  "Vigintillion",
];

const maxUnitIndex = units.length;

function getUnit(index) {
  if (index >= maxUnitIndex) return "Extremely Large Number";
  return units[index];
}

const numInput = document.getElementById("numberInput");
const numOutput = document.querySelector(".result");

function convertNumber() {
  let errorMessage = "";
  let resultText = "";
  let dollars, cents;

  const isInvalidNumber = /^0\d+/.test(numInput.value);

  try {
    [dollars, cents] = numInput.value.includes(".")
      ? numInput.value.split(".")
      : [numInput.value, "0"];

    // change to big int
    dollars = BigInt(dollars);
    cents = parseInt(cents, 10);
  } catch (e) {
    errorMessage = "Please enter a valid positive integer";
  }

  // when dollars are negative
  if (dollars <= 0n || isInvalidNumber) {
    errorMessage = "The number should be a positive integer";
  }

  if (errorMessage) {
    numOutput.textContent = errorMessage;
    return;
  }

  const dollarsText = dollars > 0n ? changeToWords(dollars) + " Dollars" : "";
  const centsText =
    cents > 0
      ? (dollars > 0n ? " And " : "") + changeToWords(cents) + " Cents"
      : "";

  resultText = dollarsText + centsText;
  numOutput.textContent = "";
  animateText(resultText);
}

function changeToWords(n) {
  n = Number(n); // Ensure n is a number for parsing
  if (n === 0) return "Zero";
  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10];
  if (n < 1000)
    return ones[Math.floor(n / 100)] + " Hundred " + changeToWords(n % 100);

  let result = "";
  let unitIndex = 0;

  while (n > 0) {
    // getting the first 3 ditigs
    const chunk = n % 1000;
    if (chunk > 0) {
      const unit = getUnit(unitIndex);
      if (unit === "Extremely Large Number") {
        result = unit;
        break;
      }
      result = changeToWords(chunk) + " " + unit + " " + result;
    }
    //  move to next 3 digits
    n = Math.floor(n / 1000);
    unitIndex++;
  }

  return result.trim();
}

function clearInput() {
  numInput.value = "";
  numOutput.textContent = "";
}

function animateText(text) {
  const words = text.split(" ");
  let index = 0;

  numOutput.textContent = "";

  const interval = setInterval(() => {
    if (index < words.length) {
      numOutput.textContent += words[index] + " ";
      index++;
    } else {
      clearInterval(interval);
    }
  }, 200);
}
