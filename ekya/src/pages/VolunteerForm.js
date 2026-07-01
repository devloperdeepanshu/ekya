import React, { useState } from "react";
import { motion } from "framer-motion";

function VolunteerForm() {

const [formData, setFormData] = useState({
fullName: "",
email: "",
age: "",
city: "",
phone: "",
membershipType: "",
contribution: "",
dailyTime: "",
socialWorkExperience: "",
teamworkAnswer: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = (e) => {
e.preventDefault();

```
console.log(formData);

alert("Application Submitted Successfully!");
```

};

return ( <div className="bg-[#F8F5F0] min-h-screen py-16">

  <div className="max-w-5xl mx-auto px-6">

    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6
      }}
      className="text-center mb-12"
    >

      <h1
        className="
          text-4xl
          md:text-6xl
          font-bold
          text-[#2F5D50]
          mb-5
        "
      >
        EKYA Volunteer Application
      </h1>

      <p
        className="
          text-gray-600
          max-w-2xl
          mx-auto
          leading-relaxed
        "
      >
        Thank you for your interest in becoming a part of EKYA.
        Please fill out the application form below. Our team
        reviews every application carefully.
      </p>

    </motion.div>

    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        y: 40
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.7
      }}
      className="
        bg-white
        rounded-3xl
        shadow-lg
        p-8
        md:p-12
      "
    >

      {/* Personal Information */}

      <h2
        className="
          text-3xl
          font-bold
          text-[#2F5D50]
          mb-8
        "
      >
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-[#3D2B1F]
            "
          >
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              outline-none
              focus:border-[#2F5D50]
            "
          />

        </div>

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-[#3D2B1F]
            "
          >
            Email *
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              outline-none
              focus:border-[#2F5D50]
            "
          />

        </div>

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-[#3D2B1F]
            "
          >
            Age *
          </label>

          <input
            type="number"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              outline-none
              focus:border-[#2F5D50]
            "
          />

        </div>

        <div>

          <label
            className="
              block
              mb-2
              font-semibold
              text-[#3D2B1F]
            "
          >
            City Of Residence *
          </label>

          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              p-4
              outline-none
              focus:border-[#2F5D50]
            "
          />

        </div>

      </div>

      <div className="mt-6">

        <label
          className="
            block
            mb-2
            font-semibold
            text-[#3D2B1F]
          "
        >
          Phone Number *
        </label>

        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            outline-none
            focus:border-[#2F5D50]
          "
        />

      </div>

      {/* Membership */}

      <div className="mt-10">

        <h2
          className="
            text-3xl
            font-bold
            text-[#2F5D50]
            mb-6
          "
        >
          Membership Preference
        </h2>

        <label
          className="
            block
            mb-4
            font-semibold
            text-[#3D2B1F]
          "
        >
          What Type Of Membership Are You Interested In? *
        </label>

        <div className="space-y-4">

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="membershipType"
              value="Permanent Member"
              required
              onChange={handleChange}
            />

            Becoming A Permanent Member

          </label>

          <label className="flex items-center gap-3">

            <input
              type="radio"
              name="membershipType"
              value="Event Volunteer"
              onChange={handleChange}
            />

            Just Attending / Helping Out In Events

          </label>

        </div>

      </div>

      {/* Contribution */}

      <div className="mt-10">

        <label
          className="
            block
            mb-2
            font-semibold
            text-[#3D2B1F]
          "
        >
          How Can You Help EKYA? What Do You Have To Offer? *
        </label>

        <textarea
          rows="5"
          name="contribution"
          required
          value={formData.contribution}
          onChange={handleChange}
          placeholder="Marketing, Social Media, Public Outreach, Logistics, General Volunteering..."
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            outline-none
            focus:border-[#2F5D50]
          "
        />

      </div>

      {/* Time Commitment */}

      <div className="mt-10">

        <label
          className="
            block
            mb-4
            font-semibold
            text-[#3D2B1F]
          "
        >
          How Much Time Can You Dedicate To EKYA Each Day? *
        </label>

        <div className="space-y-3">

          {[
            "Half an hour",
            "1 hour",
            "1.5 hours",
            "2 hours",
            "More than 2 hours"
          ].map((time) => (

            <label
              key={time}
              className="flex items-center gap-3"
            >

              <input
                type="radio"
                name="dailyTime"
                value={time}
                required
                onChange={handleChange}
              />

              {time}

            </label>

          ))}

        </div>

      </div>

      {/* Experience */}

      <div className="mt-10">

        <label
          className="
            block
            mb-2
            font-semibold
            text-[#3D2B1F]
          "
        >
          Any Past Experience Related To Social Work?
        </label>

        <textarea
          rows="5"
          name="socialWorkExperience"
          value={formData.socialWorkExperience}
          onChange={handleChange}
          placeholder="Please briefly describe any previous volunteering or social work experience."
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            outline-none
            focus:border-[#2F5D50]
          "
        />

      </div>

      {/* Scenario Question */}

      <div className="mt-10">

        <label
          className="
            block
            mb-2
            font-semibold
            text-[#3D2B1F]
          "
        >
          Imagine You Are Part Of An EKYA Event And Things Are
          Not Going As Planned. How Would You Contribute To Make
          Sure The Work Gets Done? *
        </label>

        <textarea
          rows="6"
          name="teamworkAnswer"
          required
          value={formData.teamworkAnswer}
          onChange={handleChange}
          className="
            w-full
            border
            border-gray-300
            rounded-xl
            p-4
            outline-none
            focus:border-[#2F5D50]
          "
        />

      </div>

      {/* Submit */}

      <div className="mt-12 text-center">

        <button
          type="submit"
          className="
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
          Submit Application
        </button>

      </div>

    </motion.form>

  </div>

</div>


);
}

export default VolunteerForm;
