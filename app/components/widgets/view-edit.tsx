import { Dispatch, SetStateAction } from "react";

interface ViewEditProps{
    profile: string;
    setProfile: Dispatch<SetStateAction<string>>
}
const ViewEdit = ({profile, setProfile}: ViewEditProps) =>{
    return (
 <div className="flex flex-row items-center bg-[#F8F8F8] sm:bg-black/50 rounded-lg text-[14px]">
          <p
            className={`px-4 py-1.5 cursor-pointer text-black/50 ${
              profile === "view" && "rounded-lg bg-light text-white"
            }`}
            onClick={() => setProfile("view")}
          >
            View
          </p>
          <p
            className={`px-4 py-1.5  cursor-pointer rounded-r-lg text-black/50 ${
              profile === "edit" && "bg-custom-black rounded-lg text-white"
            }`}
            onClick={() => setProfile("edit")}
          >
            Edit
          </p>
        </div>
    );
}
export default ViewEdit;