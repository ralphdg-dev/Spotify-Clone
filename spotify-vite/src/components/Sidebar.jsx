import { FaHome, FaSearch, FaBook, FaPlusSquare, FaPodcast } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">

      </div>
      <div className="sidebar-links">
        <a href="#" className="sidebar-link"><FaHome /> Home</a>
        <a href="#" className="sidebar-link"><FaSearch /> Search</a>
        <a href="#" className="sidebar-link"><FaBook /> Your Library</a>
      </div>
      <div className="sidebar-actions">
        <button className="create-btn"><FaPlusSquare /> Create Playlist</button>
        <button className="podcast-btn"><FaPodcast /> Browse Podcasts</button>
      </div>
    </aside>
  );
};

export default Sidebar;
