import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";

function Team() {

const leadership = [
{
id: 1,
images: ["/images/founder.jpeg"],
name: "Niyati Bajaj",
role: "Founder",
description:
"Leading EKYA with a vision of creating meaningful social impact through youth-driven initiatives."
},
{
id: 2,
images: ["/images/co-founder.png"],
name: "Vidita Saini",
role: "Co-Founder",
description:
"Building opportunities for volunteers and strengthening community engagement."
},
{
id: 3,
images: ["/images/chief.jpg"],
name: "Prithika Bajaj",
role: "Chief Advisor",
description:
"Managing operations and ensuring every initiative creates measurable impact."
}
];

const teamHeads = [
{
id: 4,
images: [
"/images/aashni.jpg",
"/images/shayna.jpg"
],
name: "Aashni & Shayna",
role: "Social Media Heads",
description:
"Leading EKYA's digital presence and social media strategy."
},
{
id: 5,
images: [
"/images/yovraj.jpg",
"/images/yuvraj.jpg"
],
name: "Yovraj & Yuvraj",
role: "Operations Heads",
description:
"Overseeing planning and execution of organizational activities."
},
{
id: 6,
images: [
"/images/jeevansh.jpg",
"/images/kashvi.jpg"
],
name: "Jeevansh & Kashvi",
role: "Event Management Heads",
description:
"Leading planning and execution of EKYA events."
},
{
id: 7,
images: [
"/images/aashvi.jpg",
"/images/freya.jpg"
],
name: "Aashvi & Freya",
role: "Volunteer Management Heads",
description:
"Leading volunteer outreach and engagement."
},
{
id: 8,
images: [
"/images/deepanshu.jpg",
"/images/sakshi.jpg"
],
name: "Deepanshu & Sakshi",
role: "Technical Heads",
description:
"Leading website development and technical operations."
}
];

return ( <div className="bg-[#F8F5F0] min-h-screen">

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
    >

      <h1
        className="
          text-5xl
          md:text-6xl
          font-bold
          text-center
          text-[#2F5D50]
        "
      >
        Meet The Team
      </h1>

      <p
        className="
          text-center
          text-gray-600
          mt-5
          max-w-3xl
          mx-auto
        "
      >
        The passionate individuals working together
        to build positive change through EKYA.
      </p>

    </motion.div>

  </section>

  <section className="max-w-7xl mx-auto px-6 pb-20">

    <h2
      className="
        text-4xl
        font-bold
        text-[#4B1D3F]
        mb-10
      "
    >
      Leadership
    </h2>

    <div
      className="
        flex
        gap-8
        overflow-x-auto
        scrollbar-hide
        pb-4
      "
    >

      {leadership.map((member) => (

        <TeamCard
          key={member.id}
          images={member.images}
          name={member.name}
          role={member.role}
          description={member.description}
        />

      ))}

    </div>

  </section>

  <section className="max-w-7xl mx-auto px-6 pb-24">

    <h2
      className="
        text-4xl
        font-bold
        text-[#4B1D3F]
        mb-10
      "
    >
      Department Heads
    </h2>

    <div
      className="
        flex
        gap-8
        overflow-x-auto
        scrollbar-hide
        pb-4
      "
    >

      {teamHeads.map((member) => (

        <TeamCard
          key={member.id}
          images={member.images}
          name={member.name}
          role={member.role}
          description={member.description}
        />

      ))}

    </div>

  </section>

</div>


);
}

export default Team;
