import React from "react";
import { useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { useRef, useState } from "react";
import { useClickOutsideMultiple } from "../hooks/useClickOutsideMultiple";

const Header = () => {
  const location = useLocation();

  let urlBreakdown = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" "),
    );

  const breadcrumb =
    urlBreakdown.length > 0 ? urlBreakdown.join(" > ") : "Home";

  const [profileOpen, setProfileOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  const imgRef = useRef(null);
  const menuRef = useRef(null);

  useClickOutsideMultiple([imgRef, menuRef], () => setProfileOpen(false));

  return (
    <div>
      <div className="m-1.5 mx-5 max-h-fit w-full flex justify-between p-0.5 text-[#CBD5E1]">
        <div
          onClick={toggleSidebar}
          className="cursor-pointer flex justify-center align-middle mx-1.25 p-1.25 font-[Space_Grotesk] font-[400px] text-md/loose text-shadow-lg/30 bg-slate-800 rounded-xl hover:inset-shadow-sm hover:inset-shadow-gray-700 hover:text-shadow-none opacity-70 hover:opacity-100"
        >
          <span className="rounded-xl flex justify-center p-1 m-1">
            {breadcrumb}
          </span>
        </div>

        <div className="relative pr-5">
          <img
            className="h-12.5 w-12.5 mr-4 p-0.5 border-none rounded-full object-cover hover:cursor-pointer"
            src={import.meta.env.VITE_IMAGE_HOST_URL + "avatar.png"}
            onClick={() => setProfileOpen(!profileOpen)}
            ref={imgRef}
          />
          {profileOpen && (
            <div className="absolute bg-white shadow-lg rounded-2xl -left-12 top-4.5rem w-25 border border-gray-500 z-1">
              <ul>
                <li
                  className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                  ref={menuRef}
                  onClick={() => setProfileOpen(false)}
                >
                  Profile
                </li>
                <li
                  className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                  ref={menuRef}
                  onClick={() => setProfileOpen(false)}
                >
                  Setting
                </li>
                <li
                  className="cursor-pointer text-lg text-black p-2 hover:font-semibold"
                  ref={menuRef}
                  onClick={() => {}}
                >
                  Log Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
