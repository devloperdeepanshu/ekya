import React from "react";
import { motion } from "framer-motion";

function Events() {

  const featuredEvent = {
    title: "Donation Drive",
    date: "30 june 2026",
    image: "/images/upcoming-event.jpg",
    description:
      "Join us for a city-wide donation drive and help support those in need."
  };

  const pastEvents = [
    {
      id: 1,
      title: "Dog Feeding Drive",
      date: "6 june 2026",
      image: "/images/event1.jpg",
      description:
        "Providing food and care to stray animals across the community."
    },
    {
      id: 2,
      title: "Cleanliness Drive",
      date: "31 may 2026",
      image: "/images/event2.jpg",
      description:
        "Bringing volunteers together to clean public spaces."
    },
    {
      id: 3,
      title: "Hygiene Workshop",
      date: "16 may 2026",
      image: "/images/gallery3.jpg",
      description:
        "Educational session conducted for students."
    },
    {
      id: 4,
      title: "Donation Drive",
      date: "28 June 2025",
      image: "/images/event4.jpg",
      description:
        "Collecting and distributing essential items."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Donation Drive",
      date: "30 june 2026",
      description:
        "Collecting and distributing essential items."
    },
    {
      id: 2,
      title: "TOTE bags launch",
      date: "August 2026",
      description:
        "replacing single use plastic and starting a new era of sustainability."
    },

  ];

  return (
    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-[#2F5D50]
            "
          >
            Our Events
          </h1>

          <p
            className="
              text-gray-600
              mt-5
              max-w-3xl
              mx-auto
            "
          >
            Every event represents a step towards
            building a stronger and more compassionate
            community.
          </p>

        </motion.div>

      </section>

      {/* Bento Layout */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
          "
        >

          {/* Featured Upcoming Event */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
              lg:col-span-2
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
            "
          >

            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="
                w-full
                h-[350px]
                object-cover
              "
            />

            <div className="p-8">

              <span
                className="
                  bg-[#2F5D50]
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                upcoming Event
              </span>

              <h2
                className="
                  text-4xl
                  font-bold
                  text-[#3D2B1F]
                  mt-5
                "
              >
                {featuredEvent.title}
              </h2>

              <p
                className="
                  text-[#4B1D3F]
                  font-semibold
                  mt-2
                "
              >
                {featuredEvent.date}
              </p>

              <p
                className="
                  text-gray-600
                  mt-5
                "
              >
                {featuredEvent.description}
              </p>

            </div>

          </motion.div>

          {/* Event Info Card */}

          <motion.div
            whileHover={{ y: -8 }}
            className="
              bg-[#2F5D50]
              text-white
              rounded-3xl
              p-8
              shadow-lg
              flex
              flex-col
              justify-center
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-5
              "
            >
              Why We Organize Events
            </h2>

            <p className="text-gray-200 leading-relaxed">
              Our events bring people together,
              create awareness and inspire action
              towards social and environmental causes.
            </p>

          </motion.div>

          {/* Past Events */}

          {pastEvents.map((event) => (

            <motion.div
              key={event.id}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
              "
            >

              <img
                src={event.image}
                alt={event.title}
                className="
                  w-full
                  h-60
                  object-cover
                "
              />

              <div className="p-6">

                <p
                  className="
                    text-[#4B1D3F]
                    font-medium
                  "
                >
                  {event.date}
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#3D2B1F]
                    mt-2
                  "
                >
                  {event.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    mt-4
                  "
                >
                  {event.description}
                </p>

              </div>

            </motion.div>

          ))}

          {/* Upcoming Timeline */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              lg:col-span-2
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-[#2F5D50]
                mb-8
              "
            >
              Upcoming Events
            </h2>

            <div className="space-y-8">

              {upcomingEvents.map((event) => (

                <div
                  key={event.id}
                  className="
                    border-l-4
                    border-[#B79D74]
                    pl-6
                  "
                >

                  <p
                    className="
                      text-[#4B1D3F]
                      font-semibold
                    "
                  >
                    {event.date}
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-[#3D2B1F]
                      mt-1
                    "
                  >
                    {event.title}
                  </h3>

                  <p
                    className="
                      text-gray-600
                      mt-2
                    "
                  >
                    {event.description}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* CTA */}

          <motion.div
            whileHover={{
              scale: 1.02
            }}
            className="
              bg-[#4B1D3F]
              text-white
              rounded-3xl
              p-8
              shadow-lg
              flex
              flex-col
              justify-center
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-4
              "
            >
              Join The Next Event
            </h2>

            <p
              className="
                text-gray-200
                mb-8
              "
            >
              Be part of our upcoming initiatives
              and create real impact.
            </p>

            <a
              href="/volunteer"
              className="
                bg-white
                text-[#4B1D3F]
                py-3
                rounded-full
                text-center
                font-semibold
              "
            >
              Become A Volunteer
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Events;  