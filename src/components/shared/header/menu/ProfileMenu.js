import React from "react";
import ProfileTransition from "./ProfileTransition";
import MenuButton from "./MenuButton";
import { Menu } from "@headlessui/react";

const ProfileMenu = () => {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton/>
      </div>
      <ProfileTransition/>
    </Menu>
  );
};

export default ProfileMenu;
