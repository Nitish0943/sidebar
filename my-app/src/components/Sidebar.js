import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar1">
      <div className="section live-events">
        <h3 >Live Events</h3>
        <span className="count">29</span>
      </div>
      <div className="section">
        <h3 >Starting Soon</h3>
      </div>
      <div className="section">
        <h3 >My Bet</h3>
      </div>
      </div>
      <div className="sidebar2">
        <h3>Top Sports</h3>
        <hr />
        <ul>
          <li><span className="icon tennis"></span>Tennis</li>
          <li><span className="icon soccer"></span>Soccer</li>
          <li><span className="icon american-football"></span>American Football</li>
          <li><span className="icon basketball"></span>Basket Ball</li>
          <li><span className="icon cricket"></span>Cricket</li>
          <li><span className="icon ice-hockey"></span>Ice Hockey</li>
          <li><span className="icon racing"></span>Racing</li>
          <li><span className="icon mma"></span>MMA</li>
          <li><span className="icon cs2"></span>CS2</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
