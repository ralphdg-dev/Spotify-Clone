import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Your Library</h2>
      <button className="create-btn">Create playlist</button>
      <button className="podcast-btn">Browse podcasts</button>
    </aside>
  );
};

export default Sidebar;
