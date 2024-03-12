import { Menu } from "@headlessui/react";
import React from "react";

const MenuButton = () => {
  return (
    <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
      <span className="sr-only">Open user menu</span>
      <div
        className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/80x80?face',
        }}
      >
        <span className="sr-only">Hugh Jackson</span>
      </div>
    </Menu.Button>
  );
};

export default MenuButton;
