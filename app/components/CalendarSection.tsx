// components/EventCalendar.tsx
"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // default styles
import dayjs from "dayjs";

type Event = {
  title: string;
  date: string; // format: YYYY-MM-DD
  description: string;
};

const events: Event[] = [
  {
    title: "Excursion",
    date: "2024-04-02",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Excursion",
    date: "2024-04-21",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    title: "Excursion",
    date: "2024-04-27",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // filter events for the chosen date
  const filteredEvents = events.filter(
    (event) => dayjs(event.date).isSame(selectedDate, "day")
  );

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow p-4">
      {/* Calendar */}
      <Calendar
        locale="en-GB"
        onChange={(value) => setSelectedDate(value as Date)}
        value={selectedDate}
        calendarType="gregory"
        className="rounded-lg border-none w-full"
        tileClassName={({ date }) => {
          // add dot under days with events
          const hasEvent = events.some((event) =>
            dayjs(event.date).isSame(date, "day")
          );
          return hasEvent ? "relative after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-indigo-500 after:absolute after:bottom-1/2 after:translate-y-5" : "";
        }}
      />

      {/* Events */}
      <div className="border-t pt-3 mt-3">
        <h3 className="text-lg font-semibold mb-2">Event Calendar</h3>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <div key={idx} className="mb-3 border-b pb-2 last:border-b-0">
              <p className="font-semibold">{event.title}</p>
              <p className="text-sm text-gray-500">
                {dayjs(event.date).format("D MMMM, YYYY")}
              </p>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No events for this date.</p>
        )}
      </div>
    </div>
  );
}
