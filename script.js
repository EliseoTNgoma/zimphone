const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

// Valid Zim number patterns
const patterns = [
  /^(\+263|263|0)7[1-8][0-9]{7}$/,    // Mobile: Econet, NetOne, Telecel, etc.
  /^(\+263|263|0)86[7-9][0-9]{6,7}$/   // VoIP numbers: TelOne, Utande, etc.
];

function isValidZimNumber(number) {
  const sanitized = number.trim();
  return patterns.some(regex => regex.test(sanitized));
}

checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = isValidZimNumber(input);

  resultsDiv.textContent = isValid
    ? `Valid Zimbabwean number: ${input}`
    : `Invalid Zimbabwean number: ${input}`;
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.textContent = "";
});
