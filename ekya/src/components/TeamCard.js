import React from "react";
import { motion } from "framer-motion";

function TeamCard({
images,
name,
role,
description
}) {

return (


<motion.div
  whileHover={{
    y: -12,
    scale: 1.03
  }}
  transition={{
    duration: 0.3
  }}
  className="
    w-[340px]
    h-[530px]
    bg-white
    rounded-3xl
    shadow-lg
    flex-shrink-0
    group
    overflow-hidden
  "
>

  {/* Single Image */}

  {images.length === 1 && (

    <div
      className="
        h-[280px]
        overflow-hidden
      "
    >

      <img
        src={images[0]}
        alt={name}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </div>

  )}

  {/* Double Image */}

  {images.length === 2 && (

    <div
  className="
    h-[280px]
    flex
    items-center
    justify-center
    bg-[#F3E9D7]
  "
>

  <div className="flex items-center justify-center">

    <img
      src={images[0]}
      alt=""
      className="
        w-40
        h-40
        rounded-full
        object-cover
        border-4
        border-white
        shadow-lg
        z-10
      "
    />

    <img
      src={images[1]}
      alt=""
      className="
        w-40
        h-40
        rounded-full
        object-cover
        border-4
        border-white
        shadow-lg
        -ml-10
      "
    />

  </div>

</div>

  )}

  {/* Content */}

  <div className="p-6">

    <p
      className="
        text-[#4B1D3F]
        font-semibold
        uppercase
        tracking-wider
        text-sm
      "
    >
      {role}
    </p>

    <h3
      className="
        text-2xl
        font-bold
        text-[#3D2B1F]
        mt-2
      "
    >
      {name}
    </h3>

    <div
      className="
        w-16
        h-1
        bg-[#B79D74]
        rounded-full
        mt-4
        mb-4
      "
    />

    <p
      className="
        text-gray-600
        leading-relaxed
      "
    >
      {description}
    </p>

  </div>

</motion.div>


);

}

export default TeamCard;
