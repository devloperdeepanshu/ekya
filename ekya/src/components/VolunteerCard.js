import React from "react";
import { motion } from "framer-motion";
function VolunteerCard({ item }) {
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
        w-[440px]
    
      "
    >
    <div
      className="
        w-[320px]
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        transition-all
        duration-500
        hover:scale-105
        hover:-translate-y-2
        hover:shadow-2xl
        flex-shrink-0
        gap-2
      "
    >
      <h3 className="text-2xl font-bold mb-4">
        {item.title}
      </h3>

      <p className="text-gray-600">
        {item.description}
      </p>
    </div>
</motion.div>
  );
}

export default VolunteerCard;