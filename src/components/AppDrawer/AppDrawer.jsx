import React from "react";
import "./AppDrawer.css";
import { NavLink } from "react-router-dom";

const AppDrawer = () => {
  return (
    <section className="app-drawer">
      <NavLink to="/" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--fa"
            width="1.27em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1664 1312"
          >
            <path
              fill="currentColor"
              d="M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
            ></path>
          </svg>
        </div>
        <div className="drawer-item-text">Home</div>
      </NavLink>
      <NavLink to="/explore" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"
            ></path>
          </svg>
        </div>
        <div>Explore</div>
      </NavLink>
      <NavLink to="/playlist" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--ic"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"
            ></path>
          </svg>
        </div>
        <div>Playlist</div>
      </NavLink>
      <NavLink to="/watchlater" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--carbon"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z"
            ></path>
          </svg>
        </div>
        <div>Watch Later</div>
      </NavLink>
      <NavLink to="/liked" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--bxs"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
            ></path>
          </svg>
        </div>
        <div>Liked</div>
      </NavLink>
      <NavLink to="/history" className="drawer-item">
        <div className="drawer-item-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--fa"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1536 1536"
          >
            <path
              fill="currentColor"
              d="M1536 768q0 156-61 298t-164 245t-245 164t-298 61q-172 0-327-72.5T177 1259q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9q16 2 23 12q73 95 179 147t225 52q104 0 198.5-40.5T1130 1130t109.5-163.5T1280 768t-40.5-198.5T1130 406T966.5 296.5T768 256q-98 0-188 35.5T420 393l137 138q31 30 14 69q-17 40-59 40H64q-26 0-45-19T0 576V128q0-42 40-59q39-17 69 14l130 129Q346 111 483.5 55.5T768 0q156 0 298 61t245 164t164 245t61 298zM896 480v448q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V480q0-14 9-23t23-9h64q14 0 23 9t9 23z"
            ></path>
          </svg>
        </div>
        <div>History</div>
      </NavLink>
    </section>
  );
};

export { AppDrawer };
