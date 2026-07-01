import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {

  const quickLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Team",
      path: "/team"
    },
    {
      name: "Events",
      path: "/events"
    },
    {
      name: "Volunteer",
      path: "/volunteer"
    },
    {
      name: "Donate",
      path: "/donate"
    }
  ];

  return (

    <footer
      className="
        bg-[#2F5D50]
        text-white
        mt-20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >

        <div
          className="
            grid
            md:grid-cols-3
            gap-12
          "
        >

          {/* Brand */}

          <div>

            <div
              className="
                flex
                items-center
                gap-4
                mb-6
              "
            >

              <motion.img
                whileHover={{
                  rotate: 10,
                  scale: 1.1
                }}
                src="/images/logo.png"
                alt="EKYA"
                className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  border-2
                  border-white
                "
              />

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                EKYA
              </h2>

            </div>

            <p
              className="
                text-gray-200
                leading-relaxed
              "
            >
              Empowering communities through
              education, volunteering,
              sustainability and meaningful
              social impact.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Quick Links
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >

              {quickLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    text-gray-200
                    hover:text-white
                    transition-all
                  "
                >
                  {link.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Connect With Us
            </h3>

            <div className="space-y-3 text-gray-300">

              <p>
                📞 +91 98174 56907
              </p>

              <p>
                📞 +91 92577 57755
              </p>

              <p>
                📧 ekya.offical@gmail.com
              </p>

              <p>
                📍1547 urban estate 2, hisar haryana 125005
              </p>

            </div>

            <div
              className="
                flex
                gap-4
                mt-8
              "
            >

              <a
                href="https://www.instagram.com/ekyaofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="
                  bg-[#4B1D3F]
                  px-5
                  py-2
                  rounded-full
                  hover:scale-105
                  transition-all
                "
              >
                Instagram
              </a>

              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-[#B79D74]
                  px-5
                  py-2
                  rounded-full
                  hover:scale-105
                  transition-all
                "
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div
          className="
            border-t
            border-white/20
            mt-12
            pt-8
            text-center
          "
        >

          <p
            className="
              text-gray-300
            "
          >
            © {new Date().getFullYear()} EKYA.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;