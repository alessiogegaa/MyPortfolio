import React, { useState, useEffect } from "react";
import "./events.css";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const daysInMonth = 30; // Assuming a fixed month length for simplicity

  const generateCalendar = () => {
    const rows = [];
    let dayCounter = 1;

    for (let week = 0; week < 5; week++) {
      const cells = [];
      for (let day = 0; day < 7; day++) {
        if (dayCounter <= daysInMonth) {
          cells.push(
            <td key={day} onClick={() => selectDate(dayCounter)}>
              {dayCounter}
            </td>
          );
          dayCounter++;
        } else {
          cells.push(<td key={day}></td>);
        }
      }
      rows.push(<tr key={week}>{cells}</tr>);
    }
    return rows;
  };

  const selectDate = (day) => {
    const formattedDate = `2024-10-${day < 10 ? "0" + day : day}`;
    setSelectedDate(formattedDate);
  };

  const addEvent = () => {
    if (eventTitle && eventDescription && selectedDate) {
      setEvents([...events, { title: eventTitle, description: eventDescription, date: selectedDate }]);
      clearForm();
    } else {
      alert("Please fill out all fields and select a date.");
    }
  };

  const clearForm = () => {
    setEventTitle("");
    setEventDescription("");
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Event Calendar</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by event name or description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="calendar-container">
        <div className="calendar">
          <h2>Select a Date</h2>
          <table>
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>{generateCalendar()}</tbody>
          </table>
        </div>

        <div className="event-form">
          <h3>
            Add Event for: <span>{selectedDate || "No date selected"}</span>
          </h3>
          <input
            type="text"
            placeholder="Event Title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
          <button onClick={addEvent}>Add Event</button>

          <div className="events-list">
            {filteredEvents.map((event, index) => (
              <div key={index} className="event-item">
                <div>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                  <small>{event.date}</small>
                </div>
                <button onClick={() => deleteEvent(index)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
