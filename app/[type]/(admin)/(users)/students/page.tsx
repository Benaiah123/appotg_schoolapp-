import React from "react";
import SearchPage from "./state";
import Image from "next/image";
import StudentTable from "@/app/components/StudentTable";
import ActionsButton from "@/app/components/buttons/actionsButton";
import ExportButton from "@/app/components/buttons/exportButton";
import StudentsPage from "@/app/components/Students2";

const page = () => {
  return (
    <div className="bg-white rounded-t-xl p-10">
      <div className="md:flex items-center gap-2 hidden">
        <input
          type="search"
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2"
          placeholder="Search for a student"
          
        />
        <ActionsButton />
        <ExportButton />
      </div>
      <StudentTable />
      <StudentsPage />
    </div>
  );
};

export default page;
