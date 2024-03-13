import SearchInput from "./SearchInput";
import MessagePopover from "./MessagePopover";
import NotificationPopover from "./NotificationPopover";
import ProfileMenu from "./menu/ProfileMenu";
import { useSidebar } from "../../context/SidebarContext";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-300">
      <RxHamburgerMenu
          onClick={toggleSidebar}
          fontSize={24}
          className="cursor-pointer mr-2"
        />
      
      <SearchInput />
      <div className="flex items-center gap-2 mr-2">
        <MessagePopover />
        <NotificationPopover />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
