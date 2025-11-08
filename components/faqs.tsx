"use client";

import { useState } from "react";
import { Calendar, DollarSign, Users } from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: React.ReactNode;
}

export default function FAQComponent() {
  const [openItem, setOpenItem] = useState<string | null>("booking");

  const faqItems: FAQItem[] = [
    {
      id: "booking",
      icon: <Calendar className="w-5 h-5" />,
      question: "HOW TO BOOK TRACE ADKINS?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Our booking agents have successfully helped clients around the world
          secure talent like Trace Adkins for speaking engagements, personal
          appearances, product endorsements, or corporate entertainment for over
          15 years. The team at Trace Adkins represents and listens to the needs
          of organizations and corporations seeking to hire musicians, bands, or
          entertainers. Fill out a{" "}
          <a href="/#bookingForm" className="text-blue-600 hover:underline">
            booking request form
          </a>{" "}
          for Trace Adkins, or call our office to discuss your upcoming event.
          One of our experienced agents will be happy to help you get pricing
          information and check availability for Trace Adkins or any other
          artist of your choice.
        </p>
      ),
    },
    {
      id: "cost",
      icon: <DollarSign className="w-5 h-5" />,
      question: "HOW MUCH DOES IT COST TO BOOK TRACE ADKINS?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Booking fees for Trace Adkins, or any other artist, singer, or
          celebrity, are determined based on a number of factors and may change
          without notice. Pricing often varies according to the circumstances,
          including the talent's schedule, market conditions, length of the
          performance, and the location of the event. Booking fees listed on
          this website are intended to serve as a guideline only. In some cases,
          the actual quote may be above or below the stated range. For the most
          current fee to hire Trace Adkins, please fill out our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            booking request form
          </a>{" "}
          or call our office at to speak with an experienced booking agent.
        </p>
      ),
    },
    {
      id: "agent",
      icon: <Users className="w-5 h-5" />,
      question: "WHO IS THE AGENT FOR TRACE ADKINS?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Trace Adkins has successfully secured celebrity talent like Trace
          Adkins for clients worldwide for more than 15 years. As a full-service
          artist booking agency, we have access to virtually any artist, singer,
          or performer in the world. Our artist booking agents are happy to help
          you with any entertainment buying needs, from booking Trace Adkins or
          other live entertainment, to researching artists and checking
          availability.
        </p>
      ),
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-gray-500 italic text-sm sm:text-base">
          BOOKING TRACE ADKINS
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start gap-3 py-4 text-left hover:bg-gray-50 transition-colors px-2 sm:px-4"
              aria-expanded={openItem === item.id}
            >
              <span className="text-gray-600 mt-1 shrink-0">{item.icon}</span>
              <span className="font-semibold text-gray-800 text-base sm:text-lg grow">
                {item.question}
              </span>
              <span className="text-gray-400 text-xl shrink-0 mt-0.5">
                {openItem === item.id ? "−" : "+"}
              </span>
            </button>

            {openItem === item.id && (
              <div className="px-2 sm:px-4 pb-6 pl-10 sm:pl-14">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <div className="mt-8 border-t border-gray-300"></div>
    </div>
  );
}
