import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { linkClasses } from "../lib/constants/config";


const SidebarLink = ({ item }) => {
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
    >
      <span className="text-xl">{item?.icon}</span>
      {item?.label}
    </Link>
  );
};

export default SidebarLink;
