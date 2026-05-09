import dayjs from "dayjs";

type Event = {
  title: string;
  date: string; // format: YYYY-MM-DD
  description: string;
};



export default function EventList() {
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
  return (
    <div className="border-t pt-3 mt-3">
      <h3 className="text-lg font-semibold mb-2">Event Calendar</h3>
      {events.length > 0 ? (
        events.map((event, idx) => (
          <div key={idx} className="mb-3 border-b pb-2 last:border-b-0">
            <p className="font-semibold">{event.title}</p>
            <p className="text-sm text-gray-500">
              {dayjs(event.date).format("D MMMM, YYYY")}
            </p>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-500">No events available.</p>
      )}
    </div>
  );
}
