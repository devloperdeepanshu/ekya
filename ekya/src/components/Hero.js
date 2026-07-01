import React from "react";

function Hero() {
  return (
    <section className="bg-[#F1F8E8] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Ekya Logo"
                className="w-20 h-20 object-contain"
              />

              <h1 className="text-6xl font-extrabold text-[#55AD9B]">
                EKYA
              </h1>
            </div>

            <p className="text-2xl font-medium text-gray-700">
              Your Motto Here
            </p>

            <p className="mt-6 text-gray-600">
              Creating positive impact through
              education, volunteering, community
              service, animal welfare, and youth
              empowerment.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="bg-[#55AD9B] text-white px-6 py-3 rounded-full">
                Volunteer
              </button>

              <button className="border-2 border-[#55AD9B] text-[#55AD9B] px-6 py-3 rounded-full">
                Donate
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div>

            <div className="bg-[#D8EFD3] rounded-3xl p-10 shadow-md">

              <h2 className="text-2xl font-bold mb-4">
                Together We Create Change
              </h2>

              <p className="text-gray-700">
                Through drives, workshops, donations,
                and volunteering initiatives, EKYA
                aims to build a more compassionate
                and responsible society.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;