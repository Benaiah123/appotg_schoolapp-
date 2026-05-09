import React from "react";
import Image from "next/image";

import { month, statistics } from "@/data/admin";
import { name } from "@/data";
import Welcome from "../components/Welcome";
import Header from "../components/Header";
import CalendarSection from "../components/CalendarSection";
import { studentDetails } from "@/data/student";
import { tutorDetails } from "@/data/tutor";
import EventList from "../components/Event";

interface PageProps {
  params: Promise<{ type: string }>; // 👈 params is async
}

const page = async ({ params }: PageProps) => {
  const { type } = await params;
  type Detail = {
    name: string;
    logo: string;
    number: string;
    style: string;
    style1: string;
  };

  let details: Detail[] = [];
  if (type === "admin") {
    details = month;
  } else if (type === "student") {
    details = studentDetails;
  } else if (type === "tutor") {
    details = tutorDetails;
  }

  return (
   
      <div className="flex flex-col md:grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Welcome Section */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full max-w-full">
          <Welcome type={type} />

          {details.map(({ name, number, style1 }) => (
            <div
              key={name}
              className={`flex ${style1} border-b-2 bg-white rounded-lg p-2 justify-between items-center shadow md:hidden`}
            >
              <p>{name}</p>
              <p>₦{number}</p>
            </div>
          ))}
          {type === "admin" && (
            <div className="bg-white md:hidden flex flex-col gap-5 p-2 rounded-lg">
              <p className="text-[20px] font-medium">Statistics</p>
              {statistics.map(({ name, img, number }) => (
                <div className="flex text-[#263065] justify-between" key={name}>
                  <div className="flex gap-2">
                    <Image src={img} alt="logo" width={24} height={24} />
                    <p className="">{name}</p>
                  </div>
                  <p>{number}</p>
                </div>
              ))}
            </div>
          )}
          {/* Notices Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold">Notices</h3>
              <button className="px-2 sm:px-3 py-1 rounded bg-gray-200 text-xs sm:text-sm">
                View All
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border-b pb-3">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Adopting tech into our operations
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Showing area: <span className="font-medium">Parent</span>
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            {/* <div className="bg-indigo-100 p-6 rounded-xl shadow">
              
              <h3>Monthly Students Payment</h3>
              <p className="text-2xl font-bold">140</p>
            </div>
            <div className="bg-green-100 p-6 rounded-xl shadow">
              <h3>Current Month Income</h3>
              <p className="text-2xl font-bold">140</p>
            </div>
            <div className="bg-red-100 p-6 rounded-xl shadow">
              <h3>Current Month Expense</h3>
              <p className="text-2xl font-bold">140</p>
            </div> */}
            {type !== "parent" &&
              details.map(({ name, number, logo, style }) => (
                <div
                  className={`${style} hidden md:block px-5 py-2.5 rounded-xl shadow`}
                  key={name}
                >
                  <div className="flex gap-2">
                    <Image src={logo} alt="logo" width={40} height={50} />
                    <div>
                      <h3>{name}</h3>
                      <p className="text-[32px] font-medium">{number}</p>
                    </div>
                  </div>
                </div>
              ))}
            {type === "parent" && <CalendarSection />}
          </div>
          {type === "admin" && (
            <div className="bg-white hidden md:flex flex-col gap-5 p-2 rounded-lg">
              <p className="text-[20px] font-medium">Statistics</p>
              {statistics.map(({ name, img, number }) => (
                <div className="flex text-[#263065] justify-between" key={name}>
                  <div className="flex gap-2">
                    <Image src={img} alt="logo" width={24} height={24} />
                    <p className="">{name}</p>
                  </div>
                  <p>{number}</p>
                </div>
              ))}
            </div>
          )}
          {type === "student" || type === "tutor" ? (
            <div className="bg-white flex flex-col gap-5 p-2 rounded-lg">
              <EventList />
            </div>
          ) : (
            <></>
          )}
        </div>

        {/* Notices */}
      </div>
  
  );
};

export default page;
