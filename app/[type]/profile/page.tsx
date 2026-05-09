"use client";
import InputEdit from "@/app/components/InputEdit";
import InputShow from "@/app/components/InputShow";
import Image from "next/image";
import ImageUploadPreview from "@/app/components/Upload";

import { useState } from "react";

const Page = () => {
  const [profile, setProfile] = useState("view");
  return (
    <section className={`bg-white rounded-t-lg sm:p-4 min-h-screen`}>
      <div className="flex flex-row justify-between bg-[#EEEBEB] p-4 sm:p-0 sm:bg-white">
        <h1>{profile === "view" ? "View Mode" : "Edit Mode"}</h1>
        <div className="flex flex-row items-center bg-[#F8F8F8] sm:bg-black/50 rounded-lg text-[14px]">
          <p
            className={`px-4 py-1.5 cursor-pointer text-black/50 ${
              profile === "view" && "rounded-lg bg-secondary text-white"
            }`}
            onClick={() => setProfile("view")}
          >
            View
          </p>
          <p
            className={`px-4 py-1.5  cursor-pointer rounded-r-lg text-black/50 ${
              profile === "edit" && "bg-secondary rounded-lg text-white"
            }`}
            onClick={() => setProfile("edit")}
          >
            Edit
          </p>
        </div>
      </div>
      <div className="p-2 sm:p-0">
        {profile === "view" && (
          <div className="flex flex-col sm:flex-row gap-6 mt-7">
            <ImageUploadPreview />
            <InputShow
              firstName={"John"}
              lastName={"Doe"}
              email={"Johndoe@mail.com"}
              facebook={"John Doe"}
              twitter={"I_am_JD"}
            />
          </div>
        )}
        {profile === "edit" && (
          <div className="flex flex-col sm:flex-row gap-6 mt-7">
            <ImageUploadPreview />
            <InputEdit
              firstName={"John"}
              lastName={"Doe"}
              email={"Johndoe@mail.com"}
              facebook={"John Doe"}
              twitter={"I_am_JD"}
            />
          </div>
        )}

        <div
          className={`${
            profile === "edit" ? "block" : "hidden"
          } bg-[#000000]/20 py-[0.6px] rounded-xl mt-10`}
        ></div>
        <div
          className={`${
            profile === "edit" ? "flex" : "hidden"
          } flex-col sm:flex-row mt-5 gap-4`}
        >
          <p className="text-[#070E30] font-semibold">Change Password</p>
          <section className="flex flex-col gap-6 text-black/50 w-full">
            <div>
              <p>Old Password</p>
              <input className="text-black border border-black/50 py-2 w-full rounded-lg pl-3" />
            </div>
            <div>
              <p>New Password</p>
              <input className="text-black border border-black/50 py-2 w-full rounded-lg pl-3" />
            </div>
            <div>
              <p>Confirm Password</p>
              <input className="text-black border border-black/50 py-2 w-full rounded-lg pl-3" />
            </div>
            <div className="flex justify-between">
              <div></div>
              <Image
                src="/icons/Frame 57.png"
                className="cursor-pointer"
                alt="submit"
                width={193}
                height={45}
              />
            </div>
          </section>
        </div>
      </div>
      
    </section>
  );
};

export default Page;
