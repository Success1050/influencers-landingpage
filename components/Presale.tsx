import Link from "next/link";
import React from "react";

interface Event {
  id: number;
  date: string;
  title: string;
  location: string;
  buttons: Array<{
    text: string;
    variant: "primary" | "secondary";
  }>;
}

const EventListing: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      date: "MAR 28, 2026",
      title: "Rattlesnake Rodeo",
      location: "Opp, AL",
      buttons: [{ text: "PRESALE TICKETS", variant: "secondary" }],
    },
    {
      id: 2,
      date: "MAY 14, 2026",
      title: "Miles City Bucking Horse Sale",
      location: "Miles City, MT",
      buttons: [{ text: "TICKETS", variant: "secondary" }],
    },
    {
      id: 3,
      date: "JUN 21, 2026",
      title: "Alabama Theatre",
      location: "North Myrtle Beach, SC",
      buttons: [
        {
          text: "GET PRESALE CODE",
          variant: "secondary",
        },
        { text: "PRESALE TICKETS", variant: "secondary" },
      ],
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 mb-0">
      <div className="max-w-6xl mx-auto space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-black text-white rounded-lg overflow-hidden"
          >
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Left section - Date and Title */}
              <div className="flex-1 space-y-2">
                <h2 className="text-lg md:text-xl font-bold tracking-wide">
                  {event.date}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {event.title}
                </h3>
              </div>

              {/* Middle section - Location */}
              <div className="flex-1 md:text-center">
                <p className="text-lg md:text-xl">{event.location}</p>
              </div>

              {/* Right section - Buttons */}
              <div className="flex flex-col justify-center items-center sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
                {event.buttons.map((button, idx) => (
                  <a
                    href="mailto:admin@traceadkinsvip.com"
                    className="bg-gray-400 hover:bg-gray-300 text-black font-bold py-3 px-6 rounded transition-colors duration-200 whitespace-nowrap text-sm md:text-base"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
