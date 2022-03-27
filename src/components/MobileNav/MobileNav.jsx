import React from "react";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <section className="mobile-navigator">
      <a href="#" className="mobile-nav-item">
        <div className="mobile-icon">
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
      </a>
      <a href="#" className="mobile-nav-item">
        <div className="mobile-icon">
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
      </a>
      <a href="#" className="mobile-nav-item">
        <div className="mobile-icon">
          <svg
            width="1em"
            height="1em"
            className=" MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="VideoLibraryOutlinedIcon"
          >
            <path
              fill="currentColor"
              d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z"
            ></path>
          </svg>
        </div>
        <div>Library</div>
      </a>
    </section>
  );
};

export { MobileNav };
