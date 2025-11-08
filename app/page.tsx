"use client";

import React, { useEffect, useState } from "react";
import { Heart, Search, Phone, Menu } from "lucide-react";
import ArtistInfoCard from "@/components/box";
import Footer from "@/components/bootomFooter";
import FAQComponent from "@/components/faqs";
import emailjs from "@emailjs/browser";
import Overview from "@/components/overview";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  budget: string;
  comments: string;
  hostedBefore: string;
}

export default function TraceAdkinsLanding() {
  const [loading, setloading] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Submit");
  const [tab, setTab] = useState<"overview" | "faq" | "">("overview");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    budget: "",
    comments: "",
    hostedBefore: "no",
  });

  let text = "Submit";
  const displayText = () => {
    if (loading == true) {
      text = "Submitting...";
    } else {
      text = "Submit";
      setTimeout(() => {
        text = "Submit";
      }, 2000);
    }

    return text;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const rendertabsContent = () => {
    if (tab == "overview") {
      return <Overview />;
    } else if (tab == "faq") {
      return <FAQComponent />;
    } else {
      return null;
    }
  };

  const handleSubmit = async () => {
    setloading(true);

    const message = `
      Trace Adkins request:
      Name: ${formData.firstName}, ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Event Type: ${formData.eventType}
      Event Date: ${formData.eventDate}
      Budget: ${formData.budget}
      Hosted before: ${formData.hostedBefore}
      comments: ${formData.comments}
      `;

    try {
      // Your emailjs or API call here
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.firstName,
          to_name: "Trace Adkins",
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Submitted successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4 px-4 sm:px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto space-x-4 sm:space-x-8">
            <div className="text-2xl font-bold">
              <span className="text-white">Trace Adkins</span>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <a href="#" className="hover:text-yellow-500 transition">
                Discover
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                Top Lists
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                How We Work
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                Featured Events
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 rounded transition text-sm sm:text-base">
              Book Now
            </button>
            <button className="border border-white px-3 sm:px-4 py-2 rounded hover:bg-white hover:text-black transition text-sm sm:text-base">
              Login
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="flex-1 relative w-full">
            <input
              type="text"
              placeholder="Search for artists or tags"
              className="w-full px-4 py-2 rounded-l text-black bg-white"
            />
            <button className="absolute right-0 top-0 bg-red-600 px-4 sm:px-6 py-2 rounded-r hover:bg-red-700">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-96 sm:h-96 bg-linear-to-r from-gray-800 to-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center py-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 w-full">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gray-700 border-4 border-white overflow-hidden shrink-0">
              <img
                src={"/artist.webp"}
                className="w-full h-full bg-linear-to-br from-gray-600 to-gray-800 flex items-center justify-center text-4xl sm:text-6xl font-bold text-white"
              />
              TA
            </div>

            <div className="text-white text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  TRACE ADKINS
                </h1>
              </div>
              <nav className="flex space-x-4 sm:space-x-6 text-base sm:text-lg justify-center sm:justify-start">
                <button
                  type="button"
                  className={`${
                    tab === "overview"
                      ? "border-b-2 border-white pb-2"
                      : "border-none"
                  }`}
                  onClick={() => setTab("overview")}
                >
                  Overview
                </button>

                <button
                  type="button"
                  onClick={() => setTab("faq")}
                  className={`${
                    tab === "faq"
                      ? "border-b-2 border-white pb-2"
                      : "border-none"
                  }`}
                >
                  FAQs
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <button className="w-full bg-red-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-red-700 transition mb-4 sm:mb-6">
              Book Trace Adkins
            </button>

            <ArtistInfoCard />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">{rendertabsContent()}</div>
        </div>
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Trace Adkins performs{" "}
            <a href="#" className="text-blue-600 hover:underline">
              country
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              modern country
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              male vocalists
            </a>{" "}
            music and can be booked for (private) corporate events, personal
            appearances, or other music performances. The estimated booking fee
            range to book Trace Adkins for your event is Demo:25-35,35-50,50 +.
            Trace Adkins has more than 416.5K listeners worldwide and really
            knows how to entertain your audience. Similar artists are Montgomery
            Gentry, Joe Nichols, Tim McGraw, Brad Paisley, Kenny Chesney, Dierks
            Bentley, Tracy Byrd, Chris Young, Keith Anderson, Gary Allan, Blake
            Shelton, Justin Moore, Rodney Atkins, Jason Aldean. Contact Trace
            Adkins Music agency for ratings, reviews, videos and information on
            scheduling Trace Adkins for an upcoming event.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section
        className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6"
        id="bookingForm"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            TALK TO US ABOUT YOUR EVENT
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gray-800 p-6 sm:p-8 rounded-lg">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                <strong>Trace Adkins Music</strong>, a division of{" "}
                <strong>All American Entertainment</strong>, is a full-service
                artist booking agency dedicated to representing the interests of
                event professionals. We respect the different needs of our
                clients and offer unbiased recommendations for the best possible
                musicians, bands, and other performers.
              </p>

              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Looking for the perfect music artist for your event? Trying to
                find the right performance to entertain your audience?
              </p>

              <p className="text-sm sm:text-base">
                Our extensive relationships and reputation in the music industry
                allow us to book virtually any artist in the world.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="eventDate"
                  placeholder="Event Date"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                >
                  <option value="" className="bg-gray-800">
                    Event Type
                  </option>
                  <option value="corporate" className="bg-gray-800">
                    Corporate Function
                  </option>
                  <option value="private" className="bg-gray-800">
                    Private Party
                  </option>
                  <option value="fair" className="bg-gray-800">
                    Fair or Festival
                  </option>
                  <option value="radio" className="bg-gray-800">
                    Radio Station Promotion
                  </option>
                  <option value="fundraiser" className="bg-gray-800">
                    Fundraiser
                  </option>
                  <option value="college" className="bg-gray-800">
                    College Organization
                  </option>
                  <option value="entrepreneur" className="bg-gray-800">
                    Entrepreneur
                  </option>
                  <option value="hotel" className="bg-gray-800">
                    Hotel or Casino
                  </option>
                  <option value="independent" className="bg-gray-800">
                    Independent Promoter
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other
                  </option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
                >
                  <option value="" className="bg-gray-800">
                    Event Budget*
                  </option>
                  <option value="under25k" className="bg-gray-800">
                    $10,000 - $25,000
                  </option>
                  <option value="25k-50k" className="bg-gray-800">
                    $25,000 - $50,000
                  </option>
                  <option value="50k-100k" className="bg-gray-800">
                    $50,000 - $100,000
                  </option>
                  <option value="over100k" className="bg-gray-800">
                    $150,000 - $250,000
                  </option>
                  <option value="over100k" className="bg-gray-800">
                    $250,000 - $500,000
                  </option>
                  <option value="over100k" className="bg-gray-800">
                    $500,000 - $1,000000
                  </option>
                  <option value="over100k" className="bg-gray-800">
                    $1,000,000+
                  </option>
                </select>
              </div>

              <textarea
                name="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded bg-transparent border border-gray-400 focus:border-white focus:outline-none text-sm sm:text-base"
              ></textarea>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm sm:text-base">
                <span>Have you hosted this event before?</span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hostedBefore"
                      value="yes"
                      checked={formData.hostedBefore === "yes"}
                      onChange={handleInputChange}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hostedBefore"
                      value="no"
                      checked={formData.hostedBefore === "no"}
                      onChange={handleInputChange}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 sm:py-4 rounded font-bold text-base sm:text-lg transition"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
