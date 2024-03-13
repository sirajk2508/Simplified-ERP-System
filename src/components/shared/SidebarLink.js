import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { linkClasses } from "../lib/constants/config";
import { useSidebar } from "../context/SidebarContext";


const SidebarLink = ({ item }) => {

  const { toggleSidebar } = useSidebar();

  const { pathname } = useLocation();
    if(!item)
        return;
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item?.path
          ? "bg-neutral-700 text-white"
          : "text-neutral-400",
        linkClasses
      )}
      onClick={toggleSidebar}
    >
      <span className="text-xl">{item?.icon}</span>
      {item?.label}
    </Link>
  );
};

export default SidebarLink;
