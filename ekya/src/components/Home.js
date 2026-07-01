import React from "react";
import { motion } from "framer-motion";

function Home() {

  return (
    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
          >

            <div className="flex items-center gap-5 mb-8">

              <img
                src="/images/logo.png"
                alt="EKYA Logo"
                className="
                  w-24
                  h-24
                  rounded-full
                  object-cover
                  border-4
                  border-[#B79D74]
                "
              />

              <div>

                <h1
                  className="
                    text-7xl
                    font-bold
                    text-[#2F5D50]
                  "
                >
                  EKYA
                </h1>

                <p
                  className="
                    text-[#4B1D3F]
                    font-medium
                  "
                >
                  Together For Change
                </p>

              </div>

            </div>

            <h2
              className="
                text-3xl
                md:text-4xl
                font-bold
                text-[#3D2B1F]
              "
            >
              Building a Better Tomorrow Through Collective Action
            </h2>

            <p
              className="
                mt-6
                text-gray-700
                text-lg
                leading-relaxed
              "
            >
              EKYA is a youth-led initiative focused on community
              development, education, environmental action,
              volunteer engagement and social impact. We believe
              meaningful change begins when people come together
              with a shared purpose.
            </p>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
          >

            <img
              src="/images/hero.jpg"
              alt="EKYA"
              className="
                rounded-3xl
                shadow-2xl
                w-full
                h-[550px]
                object-cover
              "
            />

          </motion.div>

        </div>

      </section>

      {/* Stats Section */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{
              y: -8
            }}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              text-center
            "
          >

            <h3 className="text-5xl font-bold text-[#2F5D50]">
              50+
            </h3>

            <p className="mt-3 text-gray-600">
              Volunteers Engaged
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8
            }}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              text-center
            "
          >

            <h3 className="text-5xl font-bold text-[#4B1D3F]">
               5
            </h3>

            <p className="mt-3 text-gray-600">
              Events Conducted
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8
            }}
            className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              text-center
            "
          >

            <h3 className="text-5xl font-bold text-[#B79D74]">
              500+
            </h3>

            <p className="mt-3 text-gray-600">
              Lives Impacted
            </p>

          </motion.div>

        </div>

      </section>

      {/* Founder's Note */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.h2
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="
            text-5xl
            font-bold
            text-center
            text-[#2F5D50]
            mb-16
          "
        >
          Leadership Team
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-10 cursor-pointer">

          {/* Founder */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <img
              src="/images/founder.jpeg"
              alt="Founder"
              className="
                w-36
                h-36
                rounded-full
                object-cover
                mx-auto
                mb-6
              "
            />

            <h3 className="text-3xl font-bold text-center text-[#3D2B1F]">
            Niyati Bajaj
            </h3>

            <p className="text-[#4B1D3F] text-center mt-2">
             Founder and President
            </p>

            <p className="text-gray-600 text-center mt-6">
              It has always been my dream to make my city a better place and contribute towards building a stronger India. This organization was founded with the belief that every social issue deserves attention, not just a select few. We are committed to making the best use of our resources to create meaningful change, empower communities, and welcome everyone who wishes to join us in giving back to society.
            </p>

          </motion.div>

          {/* Co Founder */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <img
              src="/images/co-founder.png"
              alt="Co Founder"
              className="
                w-36
                h-36
                rounded-full
                object-cover
                mx-auto
                mb-6
              "
            />

            <h3 className="text-3xl font-bold text-center text-[#3D2B1F]">
              Vidita Saini
            </h3>

            <p className="text-[#4B1D3F] text-center mt-2">
              Co-Founder and Executive Director
            </p>

            <p className="text-gray-600 text-center mt-6">
EKYA began with a simple thought: what if we stopped waiting for someone else to fix our society? Every day, we complain about unclean surroundings, inequality, and the lack of compassion around us, forgetting that we are the very society we criticize. We didn't start EKYA to build just another NGO. We started it to build a movement and eventually, a lifestyle where kindness, responsibility, and community become a part of everyday life. Change doesn't begin with governments or organizations. It begins with individuals who choose to act.            </p>

          </motion.div>

          {/* Chief Executive */}

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
            "
          >

            <img
              src="/images/chief.jpg"
              alt="Chief Executive"
              className="
                w-36
                h-36
                rounded-full
                object-cover
                mx-auto
                mb-6
              "
            />

            <h3 className="text-3xl font-bold text-center text-[#3D2B1F]">
              Prithika Bajaj
            </h3>

            <p className="text-[#4B1D3F] text-center mt-2">
              Chief Advisor
            </p>

            <p className="text-gray-600 text-center mt-6">
            As Chief Advisor, I am honored to guide an organization driven by compassion, inclusivity, and a commitment to social progress. Our vision extends beyond addressing individual issues—we strive to create meaningful impact across all aspects of society. By combining thoughtful planning with collective action, we aim to utilize our resources effectively and work towards building stronger communities and a better future for all.
            </p>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Home;