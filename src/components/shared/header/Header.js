import SearchInput from "./SearchInput";
import MessagePopover from "./MessagePopover";
import NotificationPopover from "./NotificationPopover";
import ProfileMenu from "./menu/ProfileMenu";

const Header = () => {

  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-b border-gray-300">
      <SearchInput/>
      <div className="flex items-center gap-2 mr-2">
        <MessagePopover/>
        <NotificationPopover/>
        <ProfileMenu/>
      </div>
    </div>
  );
};

export default Header;
