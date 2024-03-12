import React from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { Menu } from "@headlessui/react";

const MenuItem = ({name, link}) => {

    const navigate = useNavigate();

  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={classNames(
            active && "bg-gray-100",
            "text-gray-700 cursor-pointer px-4 py-2 rounded-sm focus:bg-gray-200"
          )}
          onClick={() => navigate(`/${link}`)}
        >
          {name}
        </div>
      )}
    </Menu.Item>
  );
};

export default MenuItem;
