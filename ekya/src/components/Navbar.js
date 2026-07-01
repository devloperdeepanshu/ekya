import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Donate", path: "/donate" },
    { name: "Tote Bags", path: "/totebags" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/90
        backdrop-blur-md
        shadow-md
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >

            <motion.img
              whileHover={{
                rotate: 5,
                scale: 1.08
              }}
              src="/images/logo.png"
              alt="EKYA"
              className="
                w-14
                h-14
                rounded-full
                object-cover
                border-2
                border-[#B79D74]
              "
            />

            <div>

              <h1
                className="
                  text-3xl
                  font-bold
                  text-[#2F5D50]
                "
              >
                EKYA
              </h1>

              <p
                className="
                  text-xs
                  text-[#4B1D3F]
                "
              >
                Together For Change
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <div
            className="
              hidden
              lg:flex
              items-center
              gap-7
            "
          >

            {navLinks.map((link) => (

              <motion.div
                key={link.name}
                whileHover={{
                  y: -3
                }}
              >

                <Link
                  to={link.path}
                  className="
                    text-[#3D2B1F]
                    font-medium
                    hover:text-[#4B1D3F]
                    transition-all
                    duration-300
                  "
                >
                  {link.name}
                </Link>

              </motion.div>

            ))}

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              lg:hidden
              text-3xl
              text-[#2F5D50]
            "
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: "auto"
            }}
            className="
              lg:hidden
              flex
              flex-col
              gap-4
              pb-6
            "
          >

            {navLinks.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  text-[#3D2B1F]
                  hover:text-[#4B1D3F]
                  transition-all
                "
              >
                {link.name}
              </Link>

            ))}

          </motion.div>

        )}

      </div>

    </nav>
  );
}

export default Navbar;
