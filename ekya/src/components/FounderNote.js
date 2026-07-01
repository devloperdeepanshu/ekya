import React from "react";

function FounderNote() {
  return (
    <section className="py-20 bg-[#F1F8E8]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#55AD9B]">
          Founder's Note
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Founder Card */}
          <div className="bg-[#D8EFD3] rounded-3xl p-8 shadow-md">

            <div className="flex items-start gap-6">

              <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-gray-400">
                  Founder Photo
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Founder
                </h3>

                <p className="text-gray-700 mt-4">
                  Add founder's message here.
                  Talk about why EKYA was started,
                  the vision behind it, and the
                  impact it aims to create in society.
                </p>
              </div>

            </div>

          </div>

          {/* Co-Founder Card */}
          <div className="bg-[#D8EFD3] rounded-3xl p-8 shadow-md">

            <div className="flex items-start gap-6">

              <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-gray-400">
                  Co-Founder Photo
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Co-Founder
                </h3>

                <p className="text-gray-700 mt-4">
                  Add co-founder's message here.
                  Share the mission, goals, and
                  commitment towards building
                  a better future through EKYA.
                </p>
              </div>

            </div>

          </div>

<div className="bg-[#D8EFD3] rounded-3xl p-8 shadow-md">

            <div className="flex items-start gap-6">

              <div className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-gray-400">
                  Co-Founder Photo
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Co-Founder
                </h3>

                <p className="text-gray-700 mt-4">
                  Add co-founder's message here.
                  Share the mission, goals, and
                  commitment towards building
                  a better future through EKYA.
                </p>
              </div>

            </div>

          </div>
        </div>




        {/* chief advisor */}
        
        

        {/* Impact Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-[#55AD9B]">
              50+
            </h3>
            <p>Volunteers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-[#55AD9B]">
              10+
            </h3>
            <p>Drives</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-[#55AD9B]">
              500+
            </h3>
            <p>Lives Impacted</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow">
            <h3 className="text-3xl font-bold text-[#55AD9B]">
              5+
            </h3>
            <p>Projects</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default FounderNote;