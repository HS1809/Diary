function checkPassword() {
  const correctPassword = "HarshuSom"; // Set your real password
  const enteredPassword = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (enteredPassword === correctPassword) {
    window.location.href = "diary.html";
  } else {
    error.textContent = "Wrong password, try again 💔";
  }
}

// Diary Page Functions
function addEntry() {
  const entryBox = document.getElementById("entryBox");
  const newEntry = document.getElementById("newEntry");
  const text = newEntry.value.trim();

  if (text !== "") {
    const date = new Date().toISOString().split("T")[0];
    const p = document.createElement("p");
    p.className = "entry";
    p.innerHTML = `${text}<br><span class="timestamp">— ${date}</span>`;
    entryBox.appendChild(p);
    newEntry.value = "";
  }
}

function goBack() {
  window.location.href = "index.html";
}
