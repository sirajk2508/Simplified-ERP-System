import React from "react";
import MenuItem from "./MenuItem";
import { Menu } from "@headlessui/react";

const MenuItems = () => {
  return (
    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <MenuItem name="Your Profile" />
      <MenuItem name="Settings" />
      <MenuItem name="Logout"/>
    </Menu.Items>
  );
};

export default MenuItems;
