import React from "react";
import { motion } from "framer-motion";

function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18
      }}
      className="
        w-[380px]
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        flex-shrink-0
        cursor-pointer
        
      "
    >
      <div className="overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="
            w-full
            h-64
            object-cover
            transition-all
            duration-700
            hover:scale-110
          "
        />

      </div>

      <div className="p-6">

        <p className="text-[#55AD9B] font-semibold text-sm">
          {event.date}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {event.title}
        </h3>

        <p className="text-gray-600 mt-4">
          {event.description}
        </p>

      </div>
    </motion.div>
  );
}

export default EventCard;