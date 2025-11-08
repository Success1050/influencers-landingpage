import React from "react";

interface EventCardProps {
  date: string;
  title: string;
  location: string;
  route: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  location,
  route,
}) => {
  return (
    <div className="relative bg-black text-white p-8 md:p-12 lg:p-16">
      {/* Top border accent */}
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
          {date}
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center px-4">
          {title}
        </h3>
        <p className="text-lg md:text-xl lg:text-2xl font-light">{location}</p>
        <a
          href={route}
          className="mt-4 md:mt-6 bg-gray-400 hover:bg-gray-500 text-black font-semibold px-12 md:px-16 lg:px-20 py-3 md:py-4 rounded transition-colors duration-200 text-base md:text-lg"
        >
          TICKETS
        </a>
      </div>
    </div>
  );
};

export default function RodeoEvents() {
  const events = [
    {
      date: "JAN 17, 2026",
      title: "Tampa Rodeo",
      location: "Dover, FL",
      route: "/#bookingForm",
    },
    {
      date: "MAY 14, 2026",
      title: "Miles City Bucking Horse Sale",
      location: "Miles City, MT",
      route: "/#bookingForm",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-[90%] md:w-[50%] mx-auto my-20">
          <img src="/artist.webp" className="w-full" />
        </div>

        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              title={event.title}
              location={event.location}
              route={event.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
