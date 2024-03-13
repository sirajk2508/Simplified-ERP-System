import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constants/Navigation";
import SidebarLink from "./SidebarLink";
import classNames from "classnames";
import { linkClasses } from "../lib/constants/config";
import { HiOutlineLogout } from "react-icons/hi";
import { useSidebar } from "../context/SidebarContext";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = () => {

  const { isSidebarOpen } = useSidebar();
  const { toggleSidebar } = useSidebar();

  return (
    <div  className={classNames("bg-neutral-900 w-60 p-3 flex flex-col text-white absolute z-10 h-screen", { 'hidden': !isSidebarOpen })}>
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
        <MdOutlineClose
          onClick={toggleSidebar}
          fontSize={24}
          className="cursor-pointer ml-10"
        />
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink item={item} key={item.key} />
        ))}
      </div>

      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames(linkClasses, "cursor-pointer text-red-500")}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
