import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQPage() {

  const [active, setActive] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is EKYA?",
      answer:
        "EKYA is a youth-led initiative focused on social impact through volunteering, education, sustainability and community service."
    },
    {
      id: 2,
      question: "How can I become a volunteer?",
      answer:
        "Visit the Volunteer page and fill out the registration form to join our volunteer community."
    },
    {
      id: 3,
      question: "How can I donate?",
      answer:
        "You can support our initiatives through the donation form available on the Donate page."
    },
    {
      id: 4,
      question: "Do volunteers receive certificates?",
      answer:
        "Yes, certificates may be provided based on participation and contribution to events and initiatives."
    },
    {
      id: 5,
      question: "How can I collaborate with EKYA?",
      answer:
        "You can contact us through the Contact page for partnerships, sponsorships or collaboration opportunities."
    }
  ];

  const toggleFAQ = (id) => {

    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }

  };

  return (

    <div className="bg-[#F8F5F0] min-h-screen">

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-6 py-20">

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
            Frequently Asked Questions
          </h1>

          <p
            className="
              text-center
              text-gray-600
              mt-5
            "
          >
            Find answers to the most common questions about EKYA.
          </p>

        </motion.div>

      </section>

      {/* FAQ Section */}

      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="space-y-5">

          {faqs.map((faq) => (

            <motion.div
              key={faq.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  toggleFAQ(faq.id)
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-6
                  text-left
                "
              >

                <h3
                  className="
                    text-lg
                    md:text-xl
                    font-semibold
                    text-[#3D2B1F]
                  "
                >
                  {faq.question}
                </h3>

                <motion.span
                  animate={{
                    rotate:
                      active === faq.id
                        ? 45
                        : 0
                  }}
                  className="
                    text-3xl
                    text-[#2F5D50]
                  "
                >
                  +
                </motion.span>

              </button>

              <AnimatePresence>

                {active === faq.id && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        px-6
                        pb-6
                        text-gray-600
                        leading-relaxed
                      "
                    >
                      {faq.answer}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default FAQPage;