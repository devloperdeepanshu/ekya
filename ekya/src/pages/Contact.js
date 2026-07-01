import React from "react";
import { motion } from "framer-motion";

function Contact() {

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
            Contact Us
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
            Have questions, ideas, collaborations,
            or want to join our mission?
            We'd love to hear from you.
          </p>

        </motion.div>

      </section>

      {/* Main Section */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-xl
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-[#4B1D3F]
                mb-8
              "
            >
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#3D2B1F]
                  "
                >
                  Email
                </h3>

                <p className="text-gray-600 mt-2">
                 ekya.offical@gmail.com
                </p>

              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#3D2B1F]
                  "
                >
                  Phone 
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 98174 56907 <br/>
                   +91 92577 57755
                </p>

              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#3D2B1F]
                  "
                >
                  Location
                </h3>

                <p className="text-gray-600 mt-2">
                  Hisar, Haryana, India
                </p>

              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-[#3D2B1F]
                  "
                >
                  Follow Us
                </h3>

                <div className="flex gap-4 mt-4">

                  <a
                    href="https://www.instagram.com/ekyaofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-[#2F5D50]
                      text-white
                    "
                  >
                    Instagram
                  </a>

                  <a
                    href="/"
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-[#B79D74]
                      text-white
                    "
                  >
                    LinkedIn
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-xl
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-[#4B1D3F]
                mb-8
              "
            >
              Send A Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  outline-none
                  focus:border-[#2F5D50]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  outline-none
                  focus:border-[#2F5D50]
                "
              />

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  outline-none
                  focus:border-[#2F5D50]
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                  outline-none
                  resize-none
                  focus:border-[#2F5D50]
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-[#2F5D50]
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* Map Placeholder */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="
            h-[400px]
            rounded-3xl
            bg-white
            shadow-xl
            flex
            items-center
            justify-center
          "
        >

          <p
            className="
              text-xl
              font-semibold
              text-[#3D2B1F]
            "
          >
            Google Map Here
          </p>

        </motion.div>

      </section>

    </div>

  );
}

export default Contact;