import React, { useState } from "react";
import { motion } from "framer-motion";

function ToteBags() {

  const images = [
    "/images/tote-front.jpg",
    "/images/tote-side.jpg",
    "/images/tote-back.jpg"
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  const features = [
    "220 GSM Cotton Canvas",
    "Eco-Friendly & Reusable",
    "Durable Daily Use Design",
    "Spacious Interior",
    "Comfortable Handles",
    "Supports EKYA Initiatives"
  ];

  return (
    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Images */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
          >

           <div
               className="
                bg-white
    rounded-3xl
    p-6
    shadow-lg
    flex
    justify-center
  "
>

             <img
  src={images[selectedImage]}
  alt="EKYA Tote Bag"
  className="
    w-full
    max-w-[350px]
    h-auto
    mx-auto
    object-contain
    rounded-2xl
  "
/>

            </div>

            <div className="flex gap-4 mt-5">

              {images.map((img, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`
                    w-24
                    h-24
                    rounded-2xl
                    overflow-hidden
                    border-2
                    transition-all
                    ${
                      selectedImage === index
                        ? "border-[#2F5D50]"
                        : "border-transparent"
                    }
                  `}
                >

                  <img
                    src={img}
                    alt="Thumbnail"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </button>

              ))}

            </div>

          </motion.div>

          {/* Details */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
          >

            <span
              className="
                inline-block
                bg-[#B79D74]
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                mb-5
              "
            >
              Sustainable Collection
            </span>

            <h1
              className="
                text-5xl
                font-bold
                text-[#2F5D50]
                mb-4
              "
            >
              EKYA Tote Bag
            </h1>

            <p
              className="
                text-2xl
                font-semibold
                text-[#4B1D3F]
                mb-6
              "
            >
              220 GSM Cotton Canvas 
            </p>

            <p
              className="
                text-gray-600
                leading-relaxed
                mb-8
              "
            >
              Designed for everyday use, our sustainable tote bag
              combines durability, simplicity and purpose. Every
              purchase supports EKYA's community initiatives and
              helps create meaningful impact.
            </p>

            <div className="space-y-4 mb-10">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <span className="text-[#2F5D50] text-xl">
                    ✓
                  </span>

                  <p className="text-gray-700">
                    {feature}
                  </p>

                </div>

              ))}

            </div>

            <a
              href="YOUR_GOOGLE_FORM_LINK"
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                bg-[#2F5D50]
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
              Pre-Book Now
            </a>

          </motion.div>

        </div>

      </section>

      {/* Impact Section */}

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
          Small Bag, Big Impact
        </h2>

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >

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

            <div className="text-5xl mb-5">
              🌱
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[#2F5D50]
                mb-3
              "
            >
              Eco Friendly
            </h3>

            <p className="text-gray-600">
              Reduce plastic usage with a reusable and sustainable alternative.
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

            <div className="text-5xl mb-5">
              🤝
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[#2F5D50]
                mb-3
              "
            >
              Support EKYA
            </h3>

            <p className="text-gray-600">
              Every purchase helps support future community projects.
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

            <div className="text-5xl mb-5">
              ❤️
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[#2F5D50]
                mb-3
              "
            >
              Made With Purpose
            </h3>

            <p className="text-gray-600">
              More than a tote bag — it represents positive change.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Specifications */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div
          className="
            bg-white
            rounded-3xl
            p-10
            shadow-lg
          "
        >

          <h2
            className="
              text-4xl
              font-bold
              text-[#2F5D50]
              mb-8
            "
          >
            Product Details
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>Material</span>
              <span>Cotton Canvas</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Fabric</span>
              <span>220 GSM</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Type</span>
              <span>Reusable Tote Bag</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Colour</span>
              <span>Natural Cotton</span>
            </div>

            <div className="flex justify-between">
              <span>Brand</span>
              <span>EKYA</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ToteBags;
