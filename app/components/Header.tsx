"use client";
import Image from "next/image";
import UserDropdown from "./Dropdown";
import { name } from "@/data";
import { usePathname } from "next/navigation";
interface HeaderProps {
  type: String;
}
const Header = ({ type, }: HeaderProps) => {
  const pathname: string = usePathname();

const parts: string[] = pathname.split("/"); // ["", "admin", "students", "add-student"]
const lastPart: string = parts[parts.length - 1]; // "add-student"

// Helper function to format pathname parts
function formatLabel(segment: string): string {
  if (!segment) return "";

  // Split on hyphens, capitalize each word, then join with space
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const label: string = formatLabel(lastPart);
  return (
    <div className="hidden md:flex justify-between items-center bg-white rounded-b-lg p-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-normal">{label}</h1>
        {type === "admin" && (
          <span className="bg-[#070E30]  uppercase text-white text-sm px-2 py-1 rounded-lg">
            ADMIN
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/svg/f7_person-crop-circle.svg"
            alt="person"
            width={30}
            height={30}
          />
          <span className="font-medium">
            {type === "admin" &&
              `${name.admin.firstName} ${name.admin.lastName}`}
              {type === "parent" && `${name.parent}`}
              {type === "student" && `${name.student.firstName} ${name.student.lastName}`}
              {type === "tutor" && `${name.tutor.firstName} ${name.tutor.lastName}`}

          </span>
          <UserDropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
