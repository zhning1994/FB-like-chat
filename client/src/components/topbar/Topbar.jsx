import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src="/assets/logo.png" alt="logo" className="" />
        <span className="logo">FofocaChat</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            type="text"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="profilePic"
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;
