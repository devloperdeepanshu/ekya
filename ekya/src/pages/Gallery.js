import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {

const [open, setOpen] = useState(false);
const [slides, setSlides] = useState([]);
const [currentTitle, setCurrentTitle] = useState("");

const drives = [
{
id: 1,
title: "Dog Feeding Drive",
cover: "/images/dog-drive/cover.jpg",
images: [
"/images/dog-drive/1.jpg",
"/images/dog-drive/2.jpg",
"/images/dog-drive/3.jpg",
"/images/dog-drive/4.jpg"
]
},
{
id: 2,
title: "Cleanliness Drive",
cover: "/images/clean-drive/cover.jpg",
images: [
"/images/clean-drive/1.jpg",
"/images/clean-drive/2.jpg",
"/images/clean-drive/3.jpg"
]
},
{
id: 3,
title: "Hygiene Workshop",
cover: "/images/hygiene-drive/cover.jpg",
images: [
"/images/hygiene-drive/1.jpg",
"/images/hygiene-drive/2.jpg",
"/images/hygiene-drive/3.jpg"
]
},
{
id: 4,
title: "Donation Drive",
cover: "/images/donation-drive/cover.jpg",
images: [
"/images/donation-drive/1.jpg",
"/images/donation-drive/2.jpg",
"/images/donation-drive/3.jpg"
]
}
];

const openAlbum = (drive) => {


setSlides(
  drive.images.map((image) => ({
    src: image
  }))
);

setCurrentTitle(drive.title);
setOpen(true);


};

return (

<div className="bg-[#F8F5F0] min-h-screen">

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
        Our Gallery
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
        Explore memorable moments from our drives,
        workshops and community initiatives.
      </p>

    </motion.div>

  </section>

  <section className="max-w-7xl mx-auto px-6 pb-24">

    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >

      {drives.map((drive) => (

        <motion.div
          key={drive.id}
          whileHover={{
            y: -10,
            scale: 1.03
          }}
          transition={{
            duration: 0.3
          }}
          onClick={() => openAlbum(drive)}
          className="
            bg-white
            rounded-[32px]
            overflow-hidden
            shadow-lg
            cursor-pointer
            hover:shadow-2xl
          "
        >

          <div className="relative">

            <img
              src={drive.cover}
              alt={drive.title}
              className="
                w-full
                h-[280px]
                object-cover
              "
            />

            <div
              className="
                absolute
                top-4
                right-4
                bg-white
                px-4
                py-2
                rounded-full
                font-semibold
                text-[#2F5D50]
                shadow-md
              "
            >
              📸 {drive.images.length}
            </div>

          </div>

          <div className="p-8">

            <h2
              className="
                text-2xl
                font-bold
                text-[#2F5D50]
                mb-3
              "
            >
              {drive.title}
            </h2>

            <p
              className="
                text-gray-600
                mb-6
              "
            >
              Click to explore this photo album.
            </p>

            <button
              className="
                bg-[#B79D74]
                text-white
                px-5
                py-3
                rounded-full
                font-medium
              "
            >
              View Album →
            </button>

          </div>

        </motion.div>

      ))}

    </div>

  </section>

  <Lightbox
    open={open}
    close={() => setOpen(false)}
    slides={slides}
  />

</div>


);

}

export default Gallery;
