import React from "react";
import { motion } from "framer-motion";

function Volunteer() {

const roles = [
{
id: 1,
icon: "📸",
title: "Photographer",
description:
"Capture memorable moments from events and activities."
},
{
id: 2,
icon: "📱",
title: "Social Media",
description:
"Help spread awareness and showcase EKYA's impact online."
},
{
id: 3,
icon: "🎨",
title: "Content Creator",
description:
"Design posts, write content and create engaging campaigns."
},
{
id: 4,
icon: "🤝",
title: "Event Coordinator",
description:
"Assist in planning and managing community initiatives."
}
];

const journey = [
{
step: "01",
title: "Apply"
},
{
step: "02",
title: "Meet The Team"
},
{
step: "03",
title: "Attend Events"
},
{
step: "04",
title: "Create Impact"
}
];

return ( <div className="bg-[#F8F5F0] min-h-screen">


  {/* Floating Join Button */}

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdGZpr8TXZ2Ng41oKwh4StWI6KbZpOVk_mpu96akgcLEd77yA/viewform"
    target="_blank"
    rel="noreferrer"
    className="
      fixed
      bottom-6
      right-6
      z-50
      bg-[#B79D74]
      text-white
      px-7
      py-4
      rounded-full
      font-semibold
      shadow-xl
      hover:scale-105
      transition-all
      duration-300
    "
  >
    Join Now 🚀
  </a>

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
        Become A Volunteer
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
        Join a passionate community of changemakers and help
        create meaningful impact through action, compassion
        and teamwork.
      </p>

    </motion.div>

  </section>

  {/* Why Join */}

  <section className="max-w-7xl mx-auto px-6 pb-24">

    <motion.div
      whileHover={{
        y: -5
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
          text-4xl
          font-bold
          text-[#2F5D50]
          mb-6
        "
      >
        Why Join EKYA?
      </h2>

      <p
        className="
          text-gray-600
          text-lg
          leading-relaxed
        "
      >
        Volunteering with EKYA is more than participating in
        events. It is about building friendships, learning
        valuable skills, contributing to society and becoming
        part of something bigger than yourself.
      </p>

    </motion.div>

  </section>

  {/* Volunteer Roles */}

  <section className="max-w-7xl mx-auto px-6 pb-24">

    <h2 className="text-5xl font-bold text-center text-[#2F5D50] mb-16">
      Volunteer Roles
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {roles.map((role) => (

        <motion.div
          key={role.id}
          whileHover={{
            y: -10
          }}
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
            text-center
          "
        >

          <div className="text-5xl mb-5">
            {role.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#3D2B1F] mb-3">
            {role.title}
          </h3>

          <p className="text-gray-600">
            {role.description}
          </p>

        </motion.div>

      ))}

    </div>

  </section>

  {/* Journey */}

  <section className="max-w-7xl mx-auto px-6 pb-24">

    <h2 className="text-5xl font-bold text-center text-[#2F5D50] mb-16">
      Your Journey
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      {journey.map((item) => (

        <motion.div
          key={item.step}
          whileHover={{
            scale: 1.05
          }}
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
            text-center
          "
        >

          <div
            className="
              w-16
              h-16
              mx-auto
              rounded-full
              bg-[#B79D74]
              text-white
              flex
              items-center
              justify-center
              text-xl
              font-bold
              mb-5
            "
          >
            {item.step}
          </div>

          <h3 className="text-xl font-bold text-[#2F5D50]">
            {item.title}
          </h3>

        </motion.div>

      ))}

    </div>

  </section>

</div>


);
}

export default Volunteer;
