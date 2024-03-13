import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./header/Header";
import { SidebarProvider } from "../context/SidebarContext";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-row bg-neutral-100 lg:h-screen lg:w-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
