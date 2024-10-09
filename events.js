const calendarBody = document.getElementById("calendar-body");
const selectedDateElement = document.getElementById("selected-date");
const eventsList = document.getElementById("events-list");
const searchInput = document.getElementById("search-input");

let selectedDate = null;

function generateCalendar() {
  const daysInMonth = 30;
  let dayCounter = 1;

  for (let week = 0; week < 5; week++) {
    const row = document.createElement("tr");
    for (let day = 0; day < 7; day++) {
      const cell = document.createElement("td");
      if (dayCounter <= daysInMonth) {
        cell.textContent = dayCounter;
        cell.addEventListener("click", () => selectDate(cell.textContent));
        dayCounter++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function selectDate(day) {
  selectedDate = `2024-10-${day < 10 ? "0" + day : day}`;
  selectedDateElement.textContent = selectedDate;
}

document.getElementById("add-event-btn").addEventListener("click", function () {
  const title = document.getElementById("event-title").value;
  const description = document.getElementById("event-description").value;

  if (title && description && selectedDate) {
    addEvent(title, description, selectedDate);
  } else {
    alert("Please fill out all fields and select a date.");
  }
});

function addEvent(title, description, date) {
  const eventItem = document.createElement("div");
  eventItem.classList.add("event-item");
  eventItem.innerHTML = `
                <div>
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <small>${date}</small>
                </div>
                <button onclick="deleteEvent(this)">X</button>
            `;
  eventsList.appendChild(eventItem);
  clearForm();
}

function clearForm() {
  document.getElementById("event-title").value = "";
  document.getElementById("event-description").value = "";
}

function deleteEvent(eventButton) {
  eventButton.parentElement.remove();
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const eventItems = document.querySelectorAll(".event-item");
  eventItems.forEach((item) => {
    const title = item.querySelector("h4").textContent.toLowerCase();
    const description = item.querySelector("p").textContent.toLowerCase();
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

generateCalendar();
