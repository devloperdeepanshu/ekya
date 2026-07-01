import React from "react";
import { motion } from "framer-motion";

function Donate() {

  const causes = [
    {
      id: 1,
      title: "Animal Welfare",
      description:
        "Support feeding drives and care initiatives for stray animals."
    },
    {
      id: 2,
      title: "Education Support",
      description:
        "Help provide educational resources and workshops to students."
    },
    {
      id: 3,
      title: "Community Projects",
      description:
        "Support donation drives, awareness campaigns and local initiatives."
    },
    {
      id: 4,
      title: "Environmental Action",
      description:
        "Contribute towards plantation drives and sustainability projects."
    }
  ];

  const donationFlow = [
    "Choose A Cause",
    "Make Your Contribution",
    "Support EKYA Initiatives",
    "Create Real Impact"
  ];

  return (
    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
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
            Support Our Mission
          </h1>

          <p
            className="
              text-gray-600
              mt-5
              max-w-3xl
              mx-auto
            "
          >
            Every contribution helps us create meaningful
            change through education, community service,
            environmental action and animal welfare.
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

          {/* Main Card */}

          <motion.div
            whileHover={{
              y: -5
            }}
            className="
              lg:col-span-2
              bg-white
              rounded-3xl
              shadow-lg
              p-10
            "
          >

            <h2
              className="
                text-4xl
                font-bold
                text-[#2F5D50]
                mb-6
              "
            >
              Why Donate?
            </h2>

            <p
              className="
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Donations help us organize impactful initiatives,
              support underprivileged communities, provide aid
              where it is needed and expand the reach of our
              projects. Every contribution, big or small,
              plays an important role.
            </p>

          </motion.div>

          {/* Where Donations Go */}

          <motion.div
            whileHover={{
              y: -5
            }}
            className="
              bg-[#2F5D50]
              text-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-5
              "
            >
              Your Support Helps
            </h2>

            <ul className="space-y-4 text-gray-200">

              <li>• Animal Welfare</li>
              <li>• Education Projects</li>
              <li>• Community Drives</li>
              <li>• Environmental Campaigns</li>
              <li>• Awareness Programs</li>

            </ul>

          </motion.div>

          {/* Causes */}

          {causes.map((cause) => (

            <motion.div
              key={cause.id}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                p-8
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#B79D74]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-xl
                  mb-5
                "
              >
                {cause.id}
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#3D2B1F]
                "
              >
                {cause.title}
              </h3>

              <p
                className="
                  text-gray-600
                  mt-4
                "
              >
                {cause.description}
              </p>

            </motion.div>

          ))}

          {/* Donation Process */}

          <motion.div
            whileHover={{
              y: -5
            }}
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
              How Your Donation Creates Impact
            </h2>

            <div className="space-y-6">

              {donationFlow.map((step, index) => (

                <div
                  key={index}
                  className="
                    border-l-4
                    border-[#B79D74]
                    pl-5
                  "
                >

                  <p
                    className="
                      text-[#3D2B1F]
                      font-semibold
                    "
                  >
                    Step {index + 1}
                  </p>

                  <h3 className="mt-1">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Transparency Card */}

          <motion.div
            whileHover={{
              y: -5
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-[#4B1D3F]
                mb-5
              "
            >
              Transparency
            </h2>

            <p className="text-gray-600">
              We believe in accountability and ensuring that
              contributions are used responsibly to maximize
              positive impact.
            </p>

          </motion.div>

          {/* CTA */}

          <motion.div
            whileHover={{
              scale: 1.01
            }}
            className="
              lg:col-span-3
              bg-[#4B1D3F]
              text-white
              rounded-3xl
              p-12
              text-center
            "
          >

            <h2
              className="
                text-4xl
                font-bold
                mb-6
              "
            >
              Make A Difference Today
            </h2>

            <p
              className="
                text-gray-200
                max-w-2xl
                mx-auto
                mb-8
              "
            >
              Your contribution can help us reach more people,
              support more causes and create lasting impact.
            </p>

            <a
              href="YOUR_DONATION_LINK"
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                bg-[#B79D74]
                text-white
                px-10
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Donate Now
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Donate;