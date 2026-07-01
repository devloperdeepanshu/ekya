import React from "react";
import { motion } from "framer-motion";

function About() {

  const values = [
    {
      id: 1,
      icon: "🌱",
      title: "Growth",
      description:
        "Helping individuals and communities grow through learning and action."
    },
    {
      id: 2,
      icon: "🤝",
      title: "Unity",
      description:
        "Creating change together through collaboration and teamwork."
    },
    {
      id: 3,
      icon: "📚",
      title: "Education",
      description:
        "Empowering people with knowledge, awareness and opportunity."
    },
    {
      id: 4,
      icon: "❤️",
      title: "Compassion",
      description:
        "Leading every initiative with kindness, empathy and purpose."
    }
  ];

  const workAreas = [
    "Education Programs",
    "Community Service",
    "Environmental Action",
    "Volunteer Development"
  ];

  return (
    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-24">

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
              md:text-7xl
              font-bold
              text-[#2F5D50]
              mb-6
            "
          >
            About EKYA
          </h1>

          <p
            className="
              max-w-3xl
              mx-auto
              text-gray-600
              text-lg
              leading-relaxed
            "
          >
            A youth-driven initiative dedicated to creating
            meaningful social impact through compassion,
            community action and collective growth.
          </p>

        </motion.div>

      </section>

      {/* Story Section */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <img
              src="/images/about.jpg"
              alt="About EKYA"
              className="
                w-full
                h-[450px]
                object-cover
                rounded-3xl
                shadow-xl
                border-4
                border-[#4B1D3F]
              "
            
              
            />

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
          >

            <p
              className="
                text-[#B79D74]
                font-semibold
                uppercase
                tracking-wider
                mb-3
              "
            >
              Our Story
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                text-[#2F5D50]
                mb-6
              "
            >
              Small Actions,
              <br />
              Big Impact
            </h2>

            <p
              className="
                text-gray-600
                leading-relaxed
                text-lg
              "
            >
              EKYA started with a simple belief that young people
              can create extraordinary change when they come
              together with purpose. What began as a small idea
              has grown into a community focused on education,
              environmental responsibility, volunteering and
              meaningful social action.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{
              y: -8
            }}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-10
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-[#2F5D50]
                mb-5
              "
            >
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              To inspire and empower individuals to actively
              contribute toward building stronger communities,
              promoting awareness and creating sustainable
              positive change.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8
            }}
            className="
              bg-[#2F5D50]
              text-white
              rounded-3xl
              shadow-lg
              p-10
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                mb-5
              "
            >
              Our Vision
            </h2>

            <p className="text-gray-200 leading-relaxed">
              To build a future where compassion, responsibility
              and collective action become a way of life for
              every individual.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Values */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2
          className="
            text-5xl
            font-bold
            text-center
            text-[#2F5D50]
            mb-16
          "
        >
          Our Values
        </h2>

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {values.map((value) => (

            <motion.div
              key={value.id}
              whileHover={{
                y: -10
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                text-center
              "
            >

              <div className="text-5xl mb-5">
                {value.icon}
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#3D2B1F]
                  mb-3
                "
              >
                {value.title}
              </h3>

              <p className="text-gray-600">
                {value.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* What We Do */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div
          className="
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
              text-center
              text-[#2F5D50]
              mb-12
            "
          >
            What We Do
          </h2>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {workAreas.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05
                }}
                className="
                  bg-[#F8F5F0]
                  rounded-2xl
                  p-6
                  text-center
                "
              >

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#4B1D3F]
                  "
                >
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Closing Banner */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <motion.div
          whileHover={{
            scale: 1.01
          }}
          className="
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
            Together We Can Make A Difference
          </h2>

          <p
            className="
              text-gray-200
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Every volunteer, every initiative and every act of
            kindness brings us one step closer to a stronger,
            more compassionate society.
          </p>

        </motion.div>

      </section>

    </div>
  );
}

export default About;