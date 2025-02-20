"use client";

import { User, Building2, Users, Activity, Clock, Shield } from "lucide-react";
import Pricing from "./pricing";
import WhyChooseUs from "../components/why-choose-us";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDark } = useTheme();

  return (
    <div
      className={isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <div className="min-h-screen mt-20">
        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl md:text-4xl font-bold text-center ${
                isDark ? "text-blue-400" : "text-[#2B428C]"
              } mb-4`}
            >
              Our Services
            </h2>
            <p
              className={`text-center ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto mb-12`}
            >
              Lorem ipsum dolor sit amet consectetur. Dictum auctor urna feugiat
              morbi. Blandit egestas ipsum vehicula fusce sit. A fusce pulvinar
              morbi
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <ServiceCard
                icon={
                  <User
                    className={`w-12 h-12 ${
                      isDark ? "text-green-400" : "text-[#47C263]"
                    }`}
                  />
                }
                title="Personal Consultant"
                description="Lorem ipsum dolor sit amet consectetur. Mauris tellus aliquet curabitur dignissim urna. Nibh ultrices sed semper non ipsum aliquam vulputate sapien."
                isDark={isDark}
              />
              <ServiceCard
                icon={
                  <Building2
                    className={`w-12 h-12 ${
                      isDark ? "text-blue-400" : "text-[#2B428C]"
                    }`}
                  />
                }
                title="Company consultant"
                description="Lorem ipsum dolor sit amet consectetur. Mauris tellus aliquet curabitur dignissim urna. Nibh ultrices sed semper non ipsum aliquam vulputate sapien."
                isDark={isDark}
              />
              <ServiceCard
                icon={
                  <Users
                    className={`w-12 h-12 ${
                      isDark ? "text-blue-400" : "text-[#2B428C]"
                    }`}
                  />
                }
                title="Family Consultant"
                description="Lorem ipsum dolor sit amet consectetur. Mauris tellus aliquet curabitur dignissim urna. Nibh ultrices sed semper non ipsum aliquam vulputate sapien."
                isDark={isDark}
              />
              <ServiceCard
                icon={
                  <Activity
                    className={`w-12 h-12 ${
                      isDark ? "text-blue-400" : "text-[#2B428C]"
                    }`}
                  />
                }
                title="Health Consultant"
                description="Lorem ipsum dolor sit amet consectetur. Mauris tellus aliquet curabitur dignissim urna. Nibh ultrices sed semper non ipsum aliquam vulputate sapien."
                isDark={isDark}
              />
            </div>
          </div>
        </section>
        <WhyChooseUs />

        {/* Trust Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2
                  className={`text-3xl md:text-4xl font-bold ${
                    isDark ? "text-blue-400" : "text-[#2B428C]"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur. Porttitor in vitae
                </h2>
                <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                  Lorem ipsum dolor sit amet consectetur.
                  <br />
                  Diam lacus porttitor eget nec. Eget nulla tortor diam
                  convallis.
                  <br />
                  Amet feugiat nullam senean pellentesque eleifend.
                </p>

                <div className="space-y-4">
                  <div
                    className={`flex items-center gap-4 p-4 ${
                      isDark ? "bg-gray-800" : "bg-white"
                    } ${
                      isDark ? "text-white" : "text-black"
                    } rounded-lg shadow-sm`}
                  >
                    <Clock
                      className={`w-10 h-10 ${
                        isDark ? "text-blue-400" : "text-blue-800"
                      }`}
                    />
                    <div>
                      <h3 className="font-semibold">Trusted and Reliable</h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-black"
                        }`}
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-4 p-4 ${
                      isDark ? "bg-gray-800" : "bg-white"
                    } ${
                      isDark ? "text-white" : "text-black"
                    } rounded-lg shadow-sm`}
                  >
                    <Shield
                      className={`w-10 h-10 ${
                        isDark ? "text-blue-400" : "text-blue-800"
                      }`}
                    />
                    <div>
                      <h3 className="font-semibold">Trusted and Reliable</h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-black"
                        }`}
                      >
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <img
                  src="/assets/expert img.png"
                  alt="Work Environment"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={`py-16 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <h2
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? "text-blue-400" : "text-[#2B428C]"
              } mb-4 flex flex-col items-center`}
            >
              What Our Customers Say?
            </h2>
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-12 flex flex-col items-center`}
            >
              Take a look at the feedback from satisfied customers
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <TestimonialCard
                name="Eng. Abdalla Farah"
                role="C.e.o at Tera tech"
                rating={5}
                testimonial="Lorem ipsum dolor sit amet consectetur. Commodo ut venenatis quam tristique nulla sed enim. Tempor semper malesuada arcu cursus. Venenatis vulputate diam elit tellus faucibus senectus Faucibus consectetur tortor."
                profilePicture="/assets/Rectangle 10.jpg"
                isDark={isDark}
              />
              <TestimonialCard
                name="Dr. Husni Alli"
                role="Manager at netcare"
                rating={5}
                testimonial="Lorem ipsum dolor sit amet consectetur. Commodo ut venenatis quam tristique nulla sed enim. Tempor semper malesuada arcu cursus. Venenatis vulputate diam elit tellus faucibus senectus Faucibus consectetur tortor."
                profilePicture="/assets/Rectangle 17.jpg"
                isDark={isDark}
              />
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                className={`p-2 rounded-full ${
                  isDark
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-full ${
                  isDark
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-[#47C263] text-white hover:bg-[#47C263]/90"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Pricing />
    </div>
  );
}

function ServiceCard({ icon, title, description, isDark }) {
  return (
    <div
      className={`${
        isDark ? "bg-gray-800" : "bg-white"
      } p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={isDark ? "text-gray-300" : "text-gray-600"}>
        {description}
      </p>
    </div>
  );
}

const TestimonialCard = ({
  name,
  role,
  rating,
  testimonial,
  profilePicture,
  isDark,
}) => {
  return (
    <div
      className={`flex flex-col items-center p-6 ${
        isDark ? "bg-gray-700" : "bg-gray-50"
      } rounded-lg shadow-md`}
    >
      <img
        src={profilePicture || "/placeholder.svg"}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3
        className={`text-xl font-semibold ${
          isDark ? "text-blue-400" : "text-[#2B428C]"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} mb-2`}
      >
        {role}
      </p>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p
        className={
          isDark ? "text-gray-300 text-center" : "text-gray-600 text-center"
        }
      >
        {testimonial}
      </p>
    </div>
  );
};
